import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLeadContext } from "../contexts/useLeadContext";

const LeadDetails = () => {
  const { leads, agents, updateLead } = useLeadContext();
  const { leadId } = useParams();
  const findLead = leads?.find((lead) => lead._id === leadId);
  console.log("this is from lead details component-- ", findLead);
  console.log("this is agent list from lead details component -- ", agents);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (findLead) {
      setFormData(findLead);
    }
  }, [findLead]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const updatedLeaddata = await updateLead(leadId, formData);
    if (updatedLeaddata) {
      setFormData(updatedLeaddata); // ensure UI updates
    }
    setIsEditing(false);
  };

  // const findSalesAgent = agents?.find(
  //   (agent) => agent._id === findLead.salesAgent,
  // );

  return (
    <>
      <div className="container bg-white p-4 rounded shadow-sm">
        <h2 className="text-secondary fs-2">Lead Details</h2>
        <hr />
        {findLead && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                {" "}
                {/* Controls width & centers horizontally */}
                <div className="d-flex justify-content-between fs-6 mb-2">
                  <strong>Lead Name:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control w-50"
                    />
                  ) : (
                    <span className="fs-5">{formData.name}</span>
                  )}
                </div>
                <div className="d-flex justify-content-between fs-6 mb-2">
                  <strong>Sales Agent:</strong>
                  {isEditing ? (
                    <select
                      name="salesAgent"
                      value={formData.salesAgent}
                      onChange={handleChange}
                      className="form-control w-50"
                    >
                      {agents.map((agent) => {
                        return (
                          <option value={agent._id} key={agent._id}>
                            {agent.name}
                          </option>
                        );
                      })}
                    </select>
                  ) : (
                    <span className="fs-5">
                      {agents.find((a) => a._id === formData.salesAgent)?.name}
                    </span>
                  )}
                </div>
                <div className="d-flex justify-content-between fs-6 mb-2">
                  <strong>Lead Source:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      name="source"
                      value={formData.source || ""}
                      onChange={handleChange}
                      className="form-control w-50"
                    />
                  ) : (
                    <span className="fs-5">{formData.source}</span>
                  )}
                </div>
                <div className="d-flex justify-content-between fs-6 mb-2">
                  <strong>Lead Status:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      name="status"
                      value={formData.status || ""}
                      onChange={handleChange}
                      className="form-control w-50"
                    />
                  ) : (
                    <span className="fs-5">{formData.status}</span>
                  )}
                </div>
                <div className="d-flex justify-content-between fs-6 mb-2">
                  <strong>Priority:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      name="priority"
                      value={formData.priority || ""}
                      onChange={handleChange}
                      className="form-control w-50"
                    />
                  ) : (
                    <span className="fs-5">{formData.priority}</span>
                  )}
                </div>
                <div className="d-flex justify-content-between fs-6">
                  <strong>Time to close:</strong>
                  {isEditing ? (
                    <input
                      type="text"
                      name="timetoclose"
                      value={formData.timetoclose || ""}
                      onChange={handleChange}
                      className="form-control w-50"
                    />
                  ) : (
                    <span className="fs-5">{formData.timetoclose}</span>
                  )}
                </div>
              </div>
            </div>
            <hr />
            <button
              className="btn btn-primary d-block m-auto"
              onClick={() => {
                if (isEditing) {
                  handleSave();
                } else {
                  setIsEditing(true);
                }
              }}
            >
              {isEditing ? "Save Changes" : "Edit Details"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default LeadDetails;
