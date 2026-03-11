import React from "react";
import { useLeadContext } from "../contexts/useLeadContext";
import { Link } from "react-router-dom";

const AgentList = () => {
  const { agents = [] } = useLeadContext();
  console.log("This is from agent page--", agents);
  
  return (
    <>
      <div className="content-area">
        <div className="newLeads bg-white px-3 py-4 rounded shadow-sm">
          <div className="container">
            <h2 className="text-secondary">Sales Agent List</h2>
            <hr />

            <div className="row g-4 p-4">
              {agents.length === 0 ? (
                <p className="text-center mt-4 fs-5 text-danger">
                  No result found
                </p>
              ) : (
                agents?.map((agent) => (
                  <Link to={`/leads/agents/leadsbyagent/${agent._id}`} className="text-decoration-none">
                    <div className="card h-100 shadow-sm border-0.1 rounded-3">
                      <div className="card-body">
                        <div className="row g-3">
                          <div className="col-12 col-md-6">
                            <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
                              <span className="fw-bold text-white badge bg-primary px-4 py-2 mb-2 mb-sm-0">
                                Agent :
                              </span>
                              <span
                                className="ms-sm-3"
                                style={{ fontSize: "1rem" }}
                              >
                                {agent.name}
                              </span>
                            </div>
                          </div>

                          <div className="col-12 col-md-6">
                            <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
                              <span className="fw-bold text-white badge bg-danger px-4 py-2 mb-2 mb-sm-0">
                                Email :
                              </span>
                              <span
                                className="ms-sm-3"
                                style={{ fontSize: "1rem" }}
                              >
                                {agent.email}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>

            <Link to="/leads/agents/addagent">
              <button className="btn btn-success d-block m-auto my-4 fw-bold fs-6">
                Add New Agent
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentList;
