import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  BarElement,
  Tooltip,
  Legend,
  LinearScale,
} from "chart.js";
import { useLeadContext } from "../contexts/useLeadContext";
import PieChart from "./PieChart";
import BarChart from "./BarChart";

ChartJS.register(ArcElement, CategoryScale, BarElement, LinearScale, Tooltip, Legend);

const ReportContent = () => {
  const { leads, agents } = useLeadContext();
  const piedata = {
    labels: ["New", "Contacted", "Qualified", "Proposal Sent", "Closed"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          leads.filter((lead) => lead.status === "new").length,
          leads.filter((lead) => lead.status === "contacted").length,
          leads.filter((lead) => lead.status === "qualified").length,
          leads.filter((lead) => lead.status === "proposal sent").length,
          leads.filter((lead) => lead.status === "closed").length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const bardata = {
    labels: agents.map((agent) => agent.name) || [],
    datasets: [
      {
        label: "# of Leads Closed",
        data:
          agents?.map(
            (agent) =>
              leads.filter(
                (lead) =>
                  lead.salesAgent === agent._id && lead.status === "closed",
              ).length,
          ) || [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  return (
    <>
      <div className="content-area">
        <h2 className="text-secondary pb-2">Report Overview</h2>
        <div className="bg-white px-3 py-4 rounded shadow-sm">
          <div className="container">
            <h4>Total Leads closed and in Pipeline :</h4>
            <div
              className="chart"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "500px",
                height: "350px",
                margin: "auto",
              }}
            >
              <PieChart
                data={piedata}
                className="py-3"
                options={options}
              />
            </div>
          </div>
        </div>

        <div className="bg-white my-2 px-3 py-4 rounded shadow-sm">
          <div className="container">
            <h4>Leads Closed by Sales Agent: :</h4>
            <div
              className="chart"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "500px",
                height: "350px",
                margin: "auto",
              }}
            >
              <BarChart
                data={bardata}
                className="py-3"
                options={options}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportContent;
