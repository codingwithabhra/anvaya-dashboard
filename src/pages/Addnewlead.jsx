import React from "react";
import AddNewLead from "../components/AddNewLead";
import Sidebar2 from "../components/Sidebar2";

const Addnewlead = () => {
  // const { setLeads } = useLeadContext();

  // const [name, setName] = useState("");
  // const [source, setSource] = useState("");
  // const [salesAgent, setSalesAgent] = useState("");
  // const [status, setStatus] = useState("");
  // const [priority, setPriority] = useState("");
  // const [timetoclose, settimetoclose] = useState("");
  // const [tags, setTags] = useState([]);
  // const [formdata, setFormdata] = useState(false);
  // const [agents, setAgents] = useState([]);

  // const tagOptions = ["hot", "cold", "urgent", "follow-up", "important"];

  // useEffect(() => {
  //   const fetchagents = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://agent-three-pi.vercel.app/agent",
  //       );
  //       setAgents(response.data);
  //       console.log("Responses are --", response);
  //     } catch (error) {
  //       console.error("Error fetching agents:", error);
  //       toast.error("Failed to load sales agents");
  //     }
  //   };
  //   fetchagents();
  // }, []);

  // const handleform = async (e) => {
  //   e.preventDefault();

  //   if (
  //     name &&
  //     source &&
  //     salesAgent &&
  //     status &&
  //     priority &&
  //     timetoclose &&
  //     tags
  //   ) {
  //     try {
  //       const response = await axios.post(
  //         "https://leads-peach-rho.vercel.app/leads",
  //         {
  //           name,
  //           source,
  //           salesAgent,
  //           status,
  //           priority,
  //           timetoclose,
  //           tags,
  //         },
  //       );

  //       // Refetch fresh data
  //       const updatedLeads = await axios.get(
  //         "https://leads-peach-rho.vercel.app/leads",
  //       );

  //       setLeads(updatedLeads.data);

  //       console.log("Lead Created:", response.data);

  //       // Reset form after success
  //       setName("");
  //       setSource("");
  //       setSalesAgent("");
  //       setStatus("");
  //       setPriority("");
  //       settimetoclose("");
  //       setTags("");

  //       toast.success("Lead Created Successfully");
  //     } catch (error) {
  //       console.error("Error creating lead:", error);
  //       toast.error("Something went wrong ");
  //     }
  //   }
  // };

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
          <Sidebar2 />
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
