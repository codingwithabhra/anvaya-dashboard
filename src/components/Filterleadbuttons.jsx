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
          <div className="container">
            <div className="py-3">
              <div className="row align-items-center g-3">
                {/* Filters Title */}
                <div className="col-12 col-md-2">
                  <h4 className="mb-0 text-center text-md-start">Filters :</h4>
                </div>

                {/* Controls */}
                <div className="col-12 col-md-10">
                  <div className="d-flex flex-column flex-md-row gap-3">
                    {/* Status Filter */}
                    <select
                      className="form-select shadow-sm border-primary"
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

                    {/* Agent Filter */}
                    <select
                      className="form-select shadow-sm border-warning"
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
                </div>
              </div>
            </div>
            <hr style={{ opacity: "0.15" }} />
            <div className="py-3">
              {/* SORT BY */}
              <div className="row align-items-center gy-4">
                {/* Title */}
                <div className="col-12 col-md-2">
                  <h4 className="mb-0 text-center text-md-start">Sort By :</h4>
                </div>

                {/* Controls */}
                <div className="col-12 col-md-10">
                  <div className="d-flex flex-column flex-md-row gap-3">
                    {/* Priority Dropdown */}
                    <select
                      aria-label="Priority filter"
                      className="form-select border-success d-block mx-auto mx-md-0"
                      style={{ maxWidth: "200px" }}
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

                    {/* Time to Close Button */}
                    <button className="btn btn-outline-danger w-100 w-md-auto">
                      Time to Close
                    </button>

                    {/* Add Lead Button */}
                    <Link
                      to="/leads/addnewlead"
                      className="btn btn-warning w-100 w-md-auto"
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
    </>
  );
};

export default Filterleadbuttons;
