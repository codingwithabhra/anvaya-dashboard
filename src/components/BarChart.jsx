import React from 'react'
import { Bar } from "react-chartjs-2";

const BarChart = ({ data, options }) => {
  return (
    <div>
      {data && <Bar data={data} options={options} redraw />}
    </div>
  )
}

export default BarChart
