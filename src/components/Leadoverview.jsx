import React from "react";
import { useLeadContext } from "../contexts/useLeadContext";
import { useFilterContext } from "../contexts/filterContext";
import { Link } from "react-router-dom";

const Leadoverview = () => {
  const { leads = [], agents = [] } = useLeadContext();
  const { filter } = useFilterContext();
  console.log("this is from lead overview page filter -- ", filter);

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
  console.log("this is from lead overview page -- ", filteredLeads);
  console.log("this is from lead overview page agents -- ", agents);

  return (
    <>
      <div className="content-area">
        <div className="newLeads bg-white px-3 py-4 rounded shadow-sm">
          <div className="container">
            <h2 className="text-secondary">Lead Overview</h2>
            <hr />
            <div className="row g-4">
              {filteredLeads?.map((lead) => {
                const findAgent = agents?.find(
                  (agent) => agent._id === lead.salesAgent,
                );

                return (
                  <Link
                    className="text-decoration-none"
                    key={lead._id}
                    to={`/leads/leaddetails/${lead._id}`}
                  >
                    <div className="card h-100 shadow-sm border-0.3 rounded-3">
                      <div className="card-body d-flex flex-nowrap align-items-center justify-content-between">
                        <h5
                          className="card-title text-dark mb-0"
                          style={{ fontSize: "1.7rem" }}
                        >
                          {lead.name}
                        </h5>

                        <p
                          className="card-text mb-0"
                          style={{ fontSize: "1.3rem" }}
                        >
                          <span className="fw-bold text-danger">Status :</span>{" "}
                          <span className="badge bg-success">
                            {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                          </span>
                        </p>
                        <p className="mb-0" style={{ fontSize: "1.7rem" }}>
                          <span
                            className="fw-semibold"
                            style={{ color: "blue" }}
                          >
                            Agent :
                          </span>{" "}
                          {findAgent?.name || "Not Assigned"}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leadoverview;
