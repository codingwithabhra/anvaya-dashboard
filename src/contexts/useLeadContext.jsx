import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const LeadContext = createContext();
export const useLeadContext = () => useContext(LeadContext);

export const LeadsProvider = ({ children }) => {
  const [leads, setLeads] = useState([]);
  const [agents, setAgents] = useState([]);
  const { leadId } = useParams();
  const findLead = leads?.find((lead) => lead._id === leadId);
  console.log("this is from lead details page-- ", findLead);
  console.log("this is from lead details page-- ", agents);

  //getting all the lead info
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get(
          "https://leads-peach-rho.vercel.app/leads",
        );
        setLeads(response.data);
        // console.log("Leads are --", response);
      } catch (error) {
        console.log("Error fetching leads -- ", error);
      }
    };
    fetchLeads();
  }, []);

  //getting all the agent info
  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await axios.get(
          "https://agent-three-pi.vercel.app/agent",
        );
        setAgents(response.data);
        
      } catch (error) {
        console.log("Error fetching agents -- ", error);
      }
    };
    fetchAgents();
  }, []);

  //updating lead info
  const updateLead = async (id, updatedData) => {
    try {
      const response = await axios.post(
        `https://leads-peach-rho.vercel.app/leads/${id}`,
        updatedData,
      );
      const updatedLead = response.data.updateLeadData;
      console.log("this is response data - ", response.data);
      setLeads((prev) =>
        prev.map((lead) =>
          lead._id === id ? { ...lead, ...updatedLead } : lead,
        ),
      );

      toast.success("Lead updated successfully");
      return updatedLead;
    } catch (error) {
      console.log("Error updating lead: ", error);
      toast.error("Failed to update lead");
      return null;
    }
  };

  //delete lead
  const deleteLead = async (id) => {
    try {
      await axios.delete(`https://leads-peach-rho.vercel.app/leads/${id}`);

      //remove deleted lead from UI
      setLeads((prev) => prev.filter((lead) => lead._id !== id));

      toast.success("Lead deleted successfully");
    } catch (error) {
      console.log("Error deleting lead: ", error);
      toast.error("Failed to delete lead");
    }
  };

  //delete agent
  const deleteAgent = async (id) => {
    try {
      await axios.delete(`https://agent-three-pi.vercel.app/agent/${id}`);

      //remove deleted agent from UI
      setAgents((prev) => prev.filter((agent) => agent._id !== id));

      toast.success("Agent deleted successfully");
    } catch (error) {
      console.log("Error deleting agent: ", error);
      toast.error("Failed to delete agent");
    }
  };

  return (
    <LeadContext.Provider
      value={{
        leads,
        findLead,
        agents,
        updateLead,
        deleteLead,
        deleteAgent,
        setLeads,
      }}
    >
      {children}
    </LeadContext.Provider>
  );
};
