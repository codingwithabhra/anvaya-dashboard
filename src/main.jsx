import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Leads from "./pages/Leads.jsx";
import Sales from "./pages/Sales.jsx";
import Addnewlead from "./pages/Addnewlead.jsx";
import { ToastContainer } from "react-toastify";
import Leaddetails from "./pages/Leaddetails.jsx";
import { LeadsProvider } from "./contexts/useLeadContext.jsx";
import { FilterProvider } from "./contexts/filterContext.jsx";
import AgentManagement from "./pages/AgentManagement.jsx";
import AddAgents from "./pages/AddAgents.jsx";
import Reports from "./pages/Reports.jsx";
import LeadsByStatus from "./pages/LeadsByStatus.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/leads",
    element: <Leads />,
  },
  {
    path: "/leads/sales",
    element: <Sales />,
  },
  {
    path: "/leads/addnewlead",
    element: <Addnewlead />,
  },
  {
    path: "/leads/leaddetails/:leadId",
    element: <Leaddetails />,
  },
  {
    path: "/leads/agents",
    element: <AgentManagement />,
  },
  {
    path: "/leads/agents/addagent",
    element: <AddAgents />,
  },
  {
    path: "/leads/reports",
    element: <Reports />,
  },
  {
    path: "/leads/leadybystatus",
    element: <LeadsByStatus />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FilterProvider>
      <LeadsProvider>
        <RouterProvider router={router} />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </LeadsProvider>
    </FilterProvider>
  </StrictMode>,
);
