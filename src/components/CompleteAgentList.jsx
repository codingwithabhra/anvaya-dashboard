import React from "react";
import { useLeadContext } from "../contexts/useLeadContext";

const CompleteAgentList = () => {
  const { agents = [], deleteAgent } = useLeadContext();
  return (
    <>
      <div className="content-area">
        <div className="bg-white px-3 py-4 rounded shadow-sm">
          <div className="container">
            <h2 className="text-secondary">Total Agent List</h2>
            <hr />

            {agents.length === 0 ? (
              <p className="text-center mt-4 fs-5 text-dark">No result found</p>
            ) : (
              agents?.map((agent) => (
                <div
                  key={agent.id}
                  className="row align-items-center mb-3 py-2 px-3 rounded shadow-sm"
                  style={{ backgroundColor: "#E1EBEE" }}
                >
                  {/* Left Section (Name + Email) */}
                  <div className="col-9 col-md-8">
                    {/* Agent Name */}
                    <div className="row align-items-center g-1">
                      <div className="col-12 col-md-auto">
                        <span className="fw-semibold badge bg-primary">
                          Agent Name :
                        </span>
                      </div>

                      <div className="col-12 col-md-auto fw-bold">{agent.name}</div>

                      <div className="col-12 col-md-auto">({agent.email})</div>
                    </div>
                  </div>

                  {/* Delete Agent */}
                  <div className="col-3 col-md-4 text-end">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteAgent(agent._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteAgentList;
