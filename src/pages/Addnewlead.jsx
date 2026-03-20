import React from "react";
import AddNewLead from "../components/AddNewLead";
import Sidebar2 from "../components/Sidebar2";
import Sidebar from "../components/Sidebar";

const Addnewlead = () => {

  return (
    <>
      {/* Header */}
      <header className="bg-white py-3 position-relative">
        <h1 className="fs-3 fw-bold text-center m-0">Add New Lead</h1>

        {/* Toggle button (only visible on small screens) */}
        <button
          className="btn btn-primary d-lg-none position-absolute top-100 end-0 mx-2 my-2"
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
            <div className="rounded shadow-sm" style={{height: "100%", minHeight: "85vh"}}>
              <Sidebar2 />
            </div>
          </div>

          {/* Main Content */}
          <div className="col-12 col-lg-9">
            <div className="container">
              <AddNewLead />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Addnewlead;
