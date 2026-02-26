import React from "react";
import { useParams } from "react-router-dom";
import { useLeadContext } from "../contexts/useLeadContext";
import Sidebar from "../components/Sidebar";
import LeadDetails from "../components/LeadDetails";

const Leaddetails = () => {
  const { leads } = useLeadContext();
  const { leadId } = useParams();
  const findLead = leads?.find((lead) => lead._id === leadId);
  // console.log("this is from lead details page-- ", findLead);

  return (
    <>
      {findLead && (
        <div>
          <header className="bg-white text-center text-secondary py-3 shadow-sm">
            <h1>Lead Management : {findLead.name}</h1>

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
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Menu</h5>
              <button
                type="button"
                className="btn-close"
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
                <div className="bg-white p-3 h-100 rounded shadow-sm">
                  <Sidebar />
                </div>
              </div>

              {/* Main Content */}
              <div className="col-12 col-lg-9">
                <div className="">
                  <LeadDetails />
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default Leaddetails;
