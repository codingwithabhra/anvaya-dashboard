import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddAgents = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchagents = async () => {
      try {
        const response = await axios.get(
          "https://agent-omega-rosy.vercel.app/agent",
        );
        setAgents(response.data);
        console.log("Responses are --", response);
      } catch (error) {
        console.error("Error fetching agents:", error);
        toast.error("Failed to load sales agents");
      }
    };
    fetchagents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      name &&
      email
    ) {
      try {
        const response = await axios.post(
          "https://agent-omega-rosy.vercel.app/agent",
          {
            name: name,
            email: email,
          },
        );

        console.log("Agent Created:", response.data);

        // Reset form after success
        setName("");
        setEmail("");

        toast.success("Agent Created Successfully");
      } catch (error) {
        console.error("Error creating agent:", error);
        toast.error("Something went wrong ");
      }
    }
  };

  return (
    <>
      <div className="bg-white text-center text-secondary py-3 shadow-sm">
        <h1>Add New Sales Agent</h1>
      </div>

      <div className="container my-5">
        <div
          className="bg-white p-4 mx-auto rounded shadow-sm"
          style={{ maxWidth: "1000px" }}
        >
          <form className="py-4 px-5" onSubmit={handleSubmit}>
            {/* LEAD NAME */}
            <div className="row align-items-center pb-4">
              <div className="col-md-4">
                <label className="form-label">Agent Name :</label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  required
                  value={name}
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="row align-items-center pb-4">
              <div className="col-md-4">
                <label className="form-label">Email :</label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  value={email}
                />
              </div>
            </div>
            <button
              type="submit"
              className="d-block mx-auto mt-4 btn btn-primary py-2 px-4"
            >
              Create Agent
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddAgents;
