import React from "react"
import { Line } from "react-chartjs-2"
import { Chart, registerables } from "chart.js"
Chart.register(...registerables)

const data = {
  labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sar", "Sun"],
  datasets: [
    {
      // label: "First dataset",
      data: [35, 45, 45, 58, 64, 68, 75],
      fill: false,
      pointRadius: 0,
      tension: 0.4,
      borderColor: "#A8C5DA",
    },
    {
      // label: "Second dataset",
      data: [33, 35, 40, 51, 54, 66, 70],
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

      // ticks: {
      //   beginAtZero: true,
      //   maxTicksLimit: 6,
      //   // padding: 20,
      //   callback(n: number) {
      //     if (n < 1e3) return n
      //     if (n >= 1e3) return +(n / 1e3).toFixed(1) + "K"
      //   },
      // },
    },
  },
}

const LineChart = () => {
  return (
    <div className="App">
      <h1 className="font-medium ml-2 mb-2">Revenue</h1>
      <Line data={data} options={options} />
    </div>
  )
}

export default LineChart
