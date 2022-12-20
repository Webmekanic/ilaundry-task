import React from "react"
import Image from "next/image"
import BlackDot from "../assets/BlackDot.svg"
import BlueDot from "../assets/BlueDot.svg"
import { Line } from "react-chartjs-2"
import { Chart, registerables } from "chart.js"
Chart.register(...registerables)

const data = {
  labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sar", "Sun"],
  datasets: [
    {
      // label: "First dataset",
      data: [8000, 10000, 12000, 10000, 15000, 16000, 18000, 20000],
      fill: false,
      pointRadius: 0,
      tension: 0.4,
      borderColor: "#A8C5DA",
    },
    {
      // label: "Second dataset",
      data: [5000, 7000, 10000, 10000, 15000, 16000, 18000, 10000],
      fill: false,
      pointRadius: 0,
      tension: 0.4,
      borderColor: "#1C1C1C",
    },
  ],
}

const options: any = {
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
    <div className="pr-6 pb-3">
      <div className="flex text-center align-center gap-4 py-6">
        <h1 className="font-medium ml-2 self-center">
          Revenue <span className="ml-4 text-lightgray">|</span>
        </h1>
        <div className="flex text-center align-center  self-center">
          <Image src={BlackDot} width={6} height={6} alt="Black Dot" />
          <p className="flex self-center ml-2 text-black">
            Current Week $58,211
          </p>
        </div>
        <div className="flex text-center align-center self-center">
          <Image src={BlueDot} width={6} height={6} alt="Black Dot" />
          <h4 className="flex self-center ml-2 text-black">
            Previous Week $68,768
          </h4>
        </div>
      </div>

      <Line data={data} options={options} />
    </div>
  )
}

export default LineChart
