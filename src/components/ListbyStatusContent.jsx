import React from "react";
import { useLeadContext } from "../contexts/useLeadContext";
import { useFilterContext } from "../contexts/filterContext";

const ListbyStatusContent = () => {
  const { leads, agents } = useLeadContext();
  const { filter, setFilter } = useFilterContext();

  // FILTER LOGIC
  const filteredLeads = leads.filter((lead) => {
    const statusMatch =
      filter.status === "" ||
      lead.status?.toLowerCase() === filter.status.toLowerCase();

    const agentMatch = filter.agent === "" || lead.salesAgent === filter.agent;

    const priorityMatch =
      filter.priority === "" ||
      lead.priority?.toLowerCase() === filter.priority.toLowerCase();

    // TIME TO CLOSE FILTER
    let timeMatch = true;

    if (filter.timetoclose === "0-3") {
      timeMatch = lead.timetoclose <= 3;
    }

    if (filter.timetoclose === "4-10") {
      timeMatch = lead.timetoclose >= 4 && lead.timetoclose <= 10;
    }

    if (filter.timetoclose === "10+") {
      timeMatch = lead.timetoclose > 10;
    }

    return statusMatch && agentMatch && priorityMatch && timeMatch;
  });

  return (
    <>
      <h2 className="text-secondary pb-2">Lead List by Status</h2>
      <div className="content-area">
        <div className="newLeads bg-white px-3 py-4 rounded shadow-sm">
          <h4 className="fs-4 fw-bold text-dark">
            Status : <span className="badge bg-success">New</span>
          </h4>
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
                      className="row align-items-center border rounded p-3 mb-3 shadow-sm"
                      style={{ backgroundColor: "#E1EBEE" }}
                    >
                      {/* Lead Number */}
                      <div className="col-12 col-md-2 fw-bold text-secondary">
                        Lead {index + 1}
                      </div>

                      {/* Lead Name */}
                      <div className="col-12 col-md-2 fw-bold">
                        {lead.name}
                      </div>

                      {/* Sales Agent */}
                      <div className="col-12 col-md-4">
                        <span className="fw-semibold">Sales Agent:</span>{" "}
                        {agent?.name || "Not Assigned"}
                      </div>

                      {/* Priority + Time to close */}
                      <div className="col-12 col-md-4">
                        <span className="badge bg-danger">
                          {lead.priority} priority
                        </span>{" "}/{" "}
                        <span className="badge bg-success">
                          {lead.timetoclose} day(s) to close
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <hr />

          <div
            className="px-4 py-3 rounded shadow-sm"
            style={{ backgroundColor: "#003153", color: "white" }}
          >
            {/* Filters Section */}
            <div
              className="row align-items-center mb-3 py-2 rounded"
              // style={{ backgroundColor: "#f8f9fa" }}
            >
              <div className="col-12 col-md-2 fw-bold fs-5 mb-2 mb-md-0">
                Filters:
              </div>

              {/* Sales Agent Filter */}
              <div className="col-12 col-md-4 mb-2 mb-md-0">
                <select
                  className="form-select"
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
                  className="form-select"
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
              // style={{ backgroundColor: "#eef6ff" }}
            >
              <div className="col-12 col-md-2 fw-bold fs-5 mb-2 mb-md-0">
                Sort By:
              </div>

              <div className="col-12 col-md-4">
                <select
                  className="form-select w-100 mb-2 mb-md-0"
                  value={filter.timetoclose}
                  onChange={(e) =>
                    setFilter({ ...filter, timetoclose: e.target.value })
                  }
                >
                  <option value="">Time to Close</option>
                  <option value="0-3">0 - 3 Days</option>
                  <option value="4-10">4 - 10 Days</option>
                  <option value="10+">More than 10 Days</option>
                </select>
              </div>

              {/* Clear Filter Button */}
              <div className="col-12 col-md-4">
                <button
                  className="btn btn-primary w-100"
                  onClick={() =>
                    setFilter({
                      priority: "",
                      agent: "",
                      status: "",
                      timetoclose: "",
                    })
                  }
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListbyStatusContent;
