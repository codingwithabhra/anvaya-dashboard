import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Maincontent from "./components/Maincontent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Header */}
      <header className="bg-white py-3 position-relative">
        <h1 className="fs-2 fw-bolder text-center m-0">Anvaya CRM Dashboard</h1>

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
            <div className="h-100 rounded shadow-sm">
              <Sidebar />
            </div>
          </div>

          {/* Main Content */}
          <div className="col-12 col-lg-9">
            <div className="">
              <Maincontent />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
