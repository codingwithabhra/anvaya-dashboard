import React from "react";
import { Link } from "react-router-dom";
import { useLeadContext } from "../contexts/useLeadContext";

const Maincontent = () => {
  const { leads } = useLeadContext();

  const statusCounts = leads.reduce((acc, lead) => {
    const status = lead.status?.toLowerCase() || "unknown";

    acc[status] = (acc[status] || 0) + 1;

    return acc;
  }, {});

  const statusList = [
    "New",
    "Contacted",
    "Qualified",
    "Proposal Sent",
    "Closed",
  ];

  return (
    <>
      <h2 className="text-secondary">Dashboard</h2>
      <div className="content-area">
        {/* NEW LEADS */}
        <div className="newLeads bg-white px-3 py-4 rounded shadow-sm">
          <div className="container">
            <div className="row g-4">
              {leads?.map((lead) => (
                <Link
                  className="col-lg-4 col-md-6 col-sm-12 text-decoration-none"
                  key={lead._id}
                  to={`/leads/leaddetails/${lead._id}`}
                >
                  <div className="card h-100 shadow-sm border-0 rounded-3" style={{backgroundColor: "#F0F8FF"}}>
                    <div className="card-body">
                      <h5 className="card-title fw-bold text-dark">
                        {lead.name}
                      </h5>

                      <div className="d-flex gap-3">
                        <p className="card-text mb-1">
                          <span className="fw-semibold text-primary">
                            Source:
                          </span>{" "}
                          <span className="text-secondary">Website</span>
                        </p>

                        <p className="card-text">
                          <span className="fw-semibold text-danger">
                            Status:
                          </span>{" "}
                          <span className="badge bg-success">New</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* LEAD STATUS */}
        <div className="leadStatus bg-white my-3 p-3 rounded shadow-sm">
          <h2 className="text-secondary">Lead Status </h2>
          <hr />
          <div className="status row g-3 py-2">
            {statusList.map((status) => (
              <div
                key={status}
                className="col-12 col-md-4 text-decoration-none"
              >
                <div className="d-flex align-items-center justify-content-between p-3 border rounded">
                  <h5 className="mb-0 text-primary">{status} :</h5>

                  <p className="fs-5 mb-0">
                    {statusCounts[status.toLowerCase()] || 0} Leads
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QUICK FILTERS */}
        <div className="leadStatus bg-white p-3 rounded shadow-sm">
          <h2 className="text-secondary">Quick Filters</h2>
          <hr />
          {/* BUTTONS */}
          <div className="buttons row g-3 py-3">
            {/* btn -new */}
            <div className="col-12 col-sm-4">
              <Link className="btn-new d-flex align-items-center text-decoration-none">
                <img
                  src="/add.png"
                  alt="New"
                  style={{ width: "25px" }}
                  className="me-2"
                />
                <p className="mb-0 fs-5 text-black">New</p>
              </Link>
            </div>
            {/* btn -contacted */}
            <div className="col-12 col-sm-4">
              <Link className="btn-new d-flex align-items-center text-decoration-none">
                <img
                  src="/help-desk.png"
                  alt="New"
                  style={{ width: "25px" }}
                  className="me-2"
                />
                <p className="mb-0 fs-5 text-black">Contacted</p>
              </Link>
            </div>
            {/* btn -add new */}
            <div className="col-12 col-sm-4">
              <Link
                to="/leads/addnewlead"
                className="btn-new d-flex align-items-center text-decoration-none"
              >
                <img
                  src="/add (1).png"
                  alt="New"
                  style={{ width: "25px" }}
                  className="me-2"
                />
                <p className="mb-0 fs-5 text-black">Add New Lead</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maincontent;
