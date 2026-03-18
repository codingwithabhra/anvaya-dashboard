import React from "react";
import { Link } from "react-router-dom";
import { useLeadContext } from "../contexts/useLeadContext";
import { useFilterContext } from "../contexts/filterContext";

const Filterleadbuttons = () => {
  const { agents } = useLeadContext();
  const { filter, setFilter } = useFilterContext();
  return (
    <>
      <div className="newLeads bg-white px-3 py-4 rounded shadow-sm">
        <div className="container">
          <h2 className="text-secondary">Filter Buttons</h2>
          <hr />
          <div className="container rounded p-3" style={{backgroundColor: "#003153", color: "white"}}>
            <div className="py-3">
              <div className="row align-items-center g-3">
                {/* Filters Title */}
                <div className="col-12 col-md-2">
                  <h4 className="mb-0 text-center text-md-start">Filters :</h4>
                </div>

                {/* Controls */}
                <div className="col-12 col-md-10">
                  <div className="row g-3">
                    {/* Status Filter */}
                    <div className="col-12 col-md-4">
                      <select
                        className="form-select"
                        value={filter.status}
                        onChange={(e) =>
                          setFilter({ ...filter, status: e.target.value })
                        }
                      >
                        <option value="">Filter by Status</option>
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="qualified">Qualified</option>
                        <option value="proposal sent">Proposal Sent</option>
                        <option value="closed">Closed</option>
                      </select>
                    </div>

                    {/* Agent Filter */}
                    <div className="col-12 col-md-4">
                      <select
                        className="form-select"
                        value={filter.agent}
                        onChange={(e) =>
                          setFilter({ ...filter, agent: e.target.value })
                        }
                      >
                        <option value="">Filter by Agent</option>
                        {agents.map((agent) => (
                          <option value={agent._id} key={agent._id}>
                            {agent.name}
                          </option>
                        ))}
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
            <hr style={{ opacity: "0.55" }} />
            <div className="py-3">
              {/* SORT BY */}
              <div className="row align-items-center gy-4">
                {/* Title */}
                <div className="col-12 col-md-2">
                  <h4 className="mb-0 text-center text-md-start">Sort By :</h4>
                </div>

                {/* Controls */}
                <div className="col-12 col-md-10">
                  <div className="row g-3">
                    {/* Priority */}
                    <div className="col-12 col-md-4">
                      <select
                        aria-label="Priority filter"
                        className="form-select w-100"
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

                    {/* Time to Close */}
                    <div className="col-12 col-md-4">
                      <select
                        className="form-select w-100"
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

                    {/* Add Lead */}
                    <div className="col-12 col-md-4">
                      <Link
                        to="/leads/addnewlead"
                        className="btn btn-warning w-100"
                      >
                        Add New Lead
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filterleadbuttons;
