import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div
        className="sidebar d-flex flex-column p-4 text-white rounded"
        style={{
          height: "100%",
          background: "#003153",
        }}
      >
        <h4 className="text-center fw-bold fs-3 mb-5">CRM Panel</h4>

        <nav>
          <ul className="list-unstyled">
            <li className="mb-4">
              <Link className="sidebar-link fs-5" to="/leads">
                <img
                  src="/add (3).png"
                  alt=""
                  className="sidebar-icon"
                />
                <span>Leads</span>
              </Link>
            </li>

            <li className="mb-4">
              <Link className="sidebar-link fs-5" to="/leads/leadbystatus">
                <img src="/arrow.png" alt="" className="sidebar-icon" />
                <span>Sales</span>
              </Link>
            </li>

            <li className="mb-4">
              <Link className="sidebar-link fs-5" to="/leads/agents">
                <img
                  src="/people (1).png"
                  alt=""
                  className="sidebar-icon"
                />
                <span>Agents</span>
              </Link>
            </li>

            <li className="mb-4">
              <Link className="sidebar-link fs-5" to="/leads/reports">
                <img
                  src="/analysis.png"
                  alt=""
                  className="sidebar-icon"
                />
                <span>Reports</span>
              </Link>
            </li>

            <li className="mb-4">
              <Link className="sidebar-link fs-5" to="/settings">
                <img
                  src="/setting.png"
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
