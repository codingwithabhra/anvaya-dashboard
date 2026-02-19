import React from "react";
import { Link } from "react-router-dom";

const Maincontent = () => {
  return (
    <>
      <h2 className="text-secondary">Dashboard</h2>
      <div className="content-area">
        {/* NEW LEADS */}
        <div className="newLeads bg-white p-3">
          {/* CARD 1 */}
          <div className="card mb-3" style={{ "max-width": "300px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://placehold.co/150 "
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Amit Mahanta</h5>
                  <p className="card-text">
                    Source: Website, <span>status: New</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LEAD STATUS */}
        <div className="leadStatus bg-white my-3 p-3">
          <h2 className="text-secondary">Lead Status </h2>
          <hr />
          <div className="status row g-3 py-3">
            {/* status --- new */}
            <div className="col-12 col-md-4">
              <div className="status-new d-flex align-items-center justify-content-between p-3 border rounded">
                <div className="d-flex align-items-center flex-nowrap">
                  <img
                    src="/Images/right-arrow.png"
                    alt="arrow"
                    style={{ width: "25px" }}
                    className="me-2"
                  />
                  <h5 className="mb-0">New :</h5>
                </div>
                <p className="fs-5 mb-0">5 Leads</p>
              </div>
            </div>
            {/* status --- contacted */}
            <div className="col-12 col-md-4">
              <div className="status-contacted d-flex align-items-center justify-content-between p-3 border rounded">
                <div className="d-flex align-items-center flex-nowrap">
                  <img
                    src="/Images/arrow.png"
                    alt="arrow"
                    style={{ width: "25px" }}
                    className="me-2"
                  />
                  <h5 className="mb-0">Contacted :</h5>
                </div>
                <p className="fs-5 mb-0">2 Leads</p>
              </div>
            </div>
            {/* status --- qualified */}
            <div className="col-12 col-md-4">
              <div className="status-qualified d-flex align-items-center justify-content-between p-3 border rounded">
                <div className="d-flex align-items-center flex-nowrap">
                  <img
                    src="/Images/right-arrow (1).png"
                    alt="arrow"
                    style={{ width: "25px" }}
                    className="me-2"
                  />
                  <h5 className="mb-0">Qualified :</h5>
                </div>
                <p className="fs-5 mb-0">1 Leads</p>
              </div>
            </div>
          </div>
        </div>

        {/* QUICK FILTERS */}
        <div className="leadStatus bg-white mB-3 p-3">
          <h2 className="text-secondary">Quick Filters</h2>
          <hr />
          {/* BUTTONS */}
          <div className="buttons row g-3 py-3">
            {/* btn -new */}
            <div className="col-12 col-sm-4">
              <Link className="btn-new d-flex align-items-center text-decoration-none">
                <img
                  src="/Images/add.png"
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
                  src="/Images/button.png"
                  alt="New"
                  style={{ width: "25px" }}
                  className="me-2"
                />
                <p className="mb-0 fs-5 text-black">Contacted</p>
              </Link>
            </div>
            {/* btn -add new */}
            <div className="col-12 col-sm-4">
              <Link className="btn-new d-flex align-items-center text-decoration-none">
                <img
                  src="/Images/add (1).png"
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
