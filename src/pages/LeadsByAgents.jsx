import React from "react";
import Sidebar from "../components/Sidebar";
import LeadsByAgentContent from "../components/LeadsByAgentContent";
import Sidebar2 from "../components/Sidebar2";

const LeadsByAgents = () => {
  return (
    <>
      <header className="bg-white py-3 position-relative shadow-sm">
        <h1 className="fs-2 text-center text-secondary m-0">Leads By Agents</h1>

        {/* Toggle button (only visible on small screens) */}
        <button
          className="btn btn-primary d-lg-none position-absolute top-50 start-0 translate-middle-y ms-3"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileSidebar"
        >
          ☰
        </button>
      </header>

      {/* Sidebar Offcanvas (Mobile) */}
      <div
        className="offcanvas offcanvas-start d-lg-none"
        tabIndex="-1"
        id="mobileSidebar"
        style={{ backgroundColor: "#003153" }}
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close bg-white"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <Sidebar />
        </div>
      </div>

      {/* Desktop Layout */}
      <main className="container-fluid mt-3">
        <div className="row g-3">
          {/* Sidebar (Desktop only) */}
          <div className="col-lg-3 d-none d-lg-block">
            <div className="h-100 rounded shadow-sm">
              <Sidebar2 />
            </div>
          </div>

          {/* Main Content */}
          <div className="col-12 col-lg-9">
            <div className="">
              <div>
                <LeadsByAgentContent />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LeadsByAgents;
