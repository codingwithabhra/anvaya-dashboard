import React from "react";
import { useParams } from "react-router-dom";
import { useLeadContext } from "../contexts/useLeadContext";
import Sidebar from "../components/Sidebar";
import LeadDetails from "../components/LeadDetails";
import Sidebar2 from "../components/Sidebar2";
import Comments from "../components/Comments";

const Leaddetails = () => {
  const { leads } = useLeadContext();
  const { leadId } = useParams();
  const findLead = leads?.find((lead) => lead._id === leadId);
  // console.log("this is from lead details page-- ", findLead);

  return (
    <>
      {findLead && (
        <div>
          <header className="bg-white text-center text-dark py-3 shadow-sm">
            <h1 className="fs-4">Lead Management : {findLead.name}</h1>

            <button
              className="btn btn-primary d-lg-none position-absolute top-18 end-0 mx-2 my-2"
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
                  <LeadDetails />
                </div>
                <div className="my-3">
                  <Comments leadId={findLead._id} />
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
