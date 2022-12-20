import React, { useState } from "react"
import { Bar } from "react-chartjs-2"
import { Chart, registerables } from "chart.js"
Chart.register(...registerables)

const StackedBarChart = () => {
  const [data, setData] = useState({
    // Label for datasets
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        backgroundColor: "#A8C5DA",
        data: [12, 14, 13.5, 25, 5, 15],
        barThickness: 20,
      },

      {
        backgroundColor: "#E5ECF6",
        borderWidth: 0,
        data: [3, 5, 4, 3, 4, 5],
        barThickness: 20,
      },
    ],
  })
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },

    type: "bar",
    // Stacked chart
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        drawOnChartArea: false,
        drawBorder: false,
        min: 0,
        max: 30,
        ticks: {
          padding: 5,
          stepSize: 10,
        },
      },
    },
  }
  return (
    <div>
      <h4 className="font-medium ml-2 pb-2">Projections vs Actuals</h4>

      <Bar data={data} options={options} />
    </div>
  )
}
export default StackedBarChart
