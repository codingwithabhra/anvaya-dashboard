import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div
        className="sidebar d-flex flex-column p-4 text-white rounded"
        style={{
          minHeight: "100vh",
          background: "#191970",
        }}
      >
        <h4 className="text-center fw-bold fs-3 mb-5">CRM Panel</h4>

        <nav>
          <ul className="list-unstyled">
            <li className="mb-4">
              <Link className="sidebar-link fs-5" to="/leads">
                <img
                  src="/Images/add (3).png"
                  alt=""
                  className="sidebar-icon"
                />
                <span>Leads</span>
              </Link>
            </li>

            <li className="mb-4">
              <Link className="sidebar-link fs-5" to="/leads/leadbystatus">
                <img src="/Images/arrow.png" alt="" className="sidebar-icon" />
                <span>Sales</span>
              </Link>
            </li>

            <li className="mb-4">
              <Link className="sidebar-link fs-5" to="/leads/agents">
                <img
                  src="/Images/people (1).png"
                  alt=""
                  className="sidebar-icon"
                />
                <span>Agents</span>
              </Link>
            </li>

            <li className="mb-4">
              <Link className="sidebar-link fs-5" to="/leads/reports">
                <img
                  src="/Images/analysis.png"
                  alt=""
                  className="sidebar-icon"
                />
                <span>Reports</span>
              </Link>
            </li>

            <li className="mb-4">
              <Link className="sidebar-link fs-5" to="/leads/settings">
                <img
                  src="/Images/setting.png"
                  alt=""
                  className="sidebar-icon"
                />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
