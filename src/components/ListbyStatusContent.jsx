import React from "react";
import { useLeadContext } from "../contexts/useLeadContext";
import { useFilterContext } from "../contexts/filterContext";

const ListbyStatusContent = () => {
  const { leads, agents } = useLeadContext();
  const { filter, setFilter } = useFilterContext();

  // // Filter leads with status "New"
  // const newLeads = leads.filter((lead) => lead.status?.toLowerCase() === "new");

  // FILTER LOGIC
  const filteredLeads = leads.filter((lead) => {
    const statusMatch =
      filter.status === "" ||
      lead.status?.toLowerCase() === filter.status.toLowerCase();

      const agentMatch = filter.agent === "" || lead.salesAgent === filter.agent;

    const priorityMatch =
      filter.priority === "" ||
      lead.priority?.toLowerCase() === filter.priority.toLowerCase();

    return statusMatch && agentMatch && priorityMatch;
  });

  return (
    <>
      <h2 className="text-secondary pb-2">Lead List by Status</h2>
      <div className="content-area">
        <div className="newLeads bg-white px-3 py-4 rounded shadow-sm">
          <h4 className="fs-3 text-primary">Status : New</h4>
          <hr />
          <div style={{ minHeight: "300px" }}>
            {filteredLeads.length === 0 ? (
              <p className="text-muted">No new leads</p>
            ) : (
              <div className="container-fluid">
                {filteredLeads.map((lead, index) => {
                  const agent = agents.find(
                    (agent) => agent._id === lead.salesAgent,
                  );

                  return (
                    <div
                      key={lead._id}
                      className="row align-items-center border rounded p-3 mb-3 shadow-sm bg-light"
                    >
                      {/* Lead Number */}
                      <div className="col-12 col-md-2 fw-bold text-secondary">
                        Lead {index + 1}
                      </div>

                      {/* Lead Name */}
                      <div className="col-12 col-md-5">
                        <span className="fw-semibold">Lead Name:</span>{" "}
                        {lead.name}
                      </div>

                      {/* Sales Agent */}
                      <div className="col-12 col-md-5">
                        <span className="fw-semibold">Sales Agent:</span>{" "}
                        {agent?.name || "Not Assigned"}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <hr />

          {/* Filters Section */}
          <div
            className="row align-items-center mb-3 py-2 rounded"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <div className="col-12 col-md-2 fw-bold fs-5 mb-2 mb-md-0">
              Filters:
            </div>

            {/* Sales Agent Filter */}
            <div className="col-12 col-md-4 mb-2 mb-md-0">
              <select
                className="form-select border-primary shadow-sm"
                value={filter.agent}
                onChange={(e) =>
                  setFilter({ ...filter, agent: e.target.value })
                }
              >
                <option value="">Sales Agent</option>
                {agents.map((agent) => (
                  <option key={agent._id} value={agent._id}>
                    {agent.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Priority Filter */}
            <div className="col-12 col-md-4">
              <select
                className="form-select border-warning shadow-sm"
                value={filter.priority}
                onChange={(e) =>
                  setFilter({ ...filter, priority: e.target.value })
                }
              >
                <option value="">Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>

          {/* Sort Section */}
          <div
            className="row align-items-center py-2 rounded"
            style={{ backgroundColor: "#eef6ff" }}
          >
            <div className="col-12 col-md-2 fw-bold fs-5 mb-2 mb-md-0">
              Sort By:
            </div>

            <div className="col-12 col-md-4">
              <select className="form-select border-success shadow-sm">
                <option value="">Time to Close</option>
                <option value="lowToHigh">Low → High</option>
                <option value="highToLow">High → Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListbyStatusContent;
