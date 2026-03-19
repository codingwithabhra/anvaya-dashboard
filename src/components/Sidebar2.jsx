import React from 'react'
import { Link } from "react-router-dom";

const Sidebar2 = () => {
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
                <ul className="list-unstyled text-center">
                  <li className="mb-4">
                    <Link className="sidebar-link text-decoration-none fs-5 w-100" to="/">
                      <span><img src="/left-arrow.png" alt="" style={{paddingRight: "5px"}}/></span> Back to Dashboard
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
    </>
  )
}

export default Sidebar2
