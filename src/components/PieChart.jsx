import React from 'react'
import { Pie } from "react-chartjs-2";

const PieChart = ({data}) => {
  return (
    <div>
      {data && <Pie data={data}  redraw />}
    </div>
  )
}

export default PieChart
