import React from 'react'
import { Bar } from "react-chartjs-2";

const BarChart = ({ data }) => {
  return (
    <div>
      {data && <Bar data={data}  redraw />}
    </div>
  )
}

export default BarChart
