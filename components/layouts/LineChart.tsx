import React from "react"
import { Line } from "react-chartjs-2"
import { Chart, registerables } from "chart.js"
Chart.register(...registerables)

const data = {
  labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sar", "Sun"],
  datasets: [
    {
      // label: "First dataset",
      data: [7500, 800, 1000, 1000, 2000, 2000, 2000, 20000],
      fill: false,
      pointRadius: 0,
      tension: 0.4,
      borderColor: "#A8C5DA",
    },
    {
      // label: "Second dataset",
      data: [5000, 0, 10000, 10000, 15000, 16000, 18000, 10000],
      fill: false,
      pointRadius: 0,
      tension: 0.4,
      borderColor: "#1C1C1C",
    },
  ],
}

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
      ticks: {
        beginAtZero: true,
        padding: 1,
        // min: 0,
        // max: 36000,
        stepSize: 9000,
        suggestedMin: 36000,
        suggestedMax: 9000,
        callback(n: number) {
          if (n < 900) return n
          if (n >= 1000) return +(n / 1000).toFixed(1) + "K"
        },
      },
    },
  },
}

const LineChart = () => {
  return (
    <div>
      <h1 className="font-medium ml-2 mb-2 py-4">Revenue</h1>
      <Line data={data} options={options} />
    </div>
  )
}

export default LineChart
