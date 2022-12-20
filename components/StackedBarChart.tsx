import React, { useState } from "react"
import { Bar } from "react-chartjs-2"
import { Chart, registerables } from "chart.js"
Chart.register(...registerables)

// const data = {
//   labels: ["Organic", "Sponsored", "Organic", "Sponsored"],
//   previousDate: {
//     label: "08/10/2019 - 09/30/2019",
//     dataSet: [10000, 150000, 10000, 150000],
//   },
//   currentDate: {
//     label: "10/01/2019 - 11/20/2019",
//     dataSet: [10000, 225000, 10000, 225000],
//   },
// }

// const StackedBarChart = () => {
//   return (
//     <div className="App">
//       <Bar
//         pointStyle="star"
//         data={{
//           labels: data.labels,
//           responsive: true,
//           offset: true,
//           datasets: [
//             {
//               label: "Mobile",
//               pointStyle: "rectRounded",
//               backgroundColor: "#E5ECF6",
//               barThickness: 40,
//               categoryPercentage: 1,
//               data: data.previousDate.dataSet, //From API
//             },
//             {
//               label: "Desktop",
//               backgroundColor: "#A8C5DA",
//               barThickness: 40,
//               categoryPercentage: 1,
//               pointStyle: "triangle",
//               data: data.currentDate.dataSet, //From API
//             },
//           ],
//         }}
//         height={220}
//         options={{
//           offsetGridLines: true,
//           drawTicks: true,
//           layout: {
//             padding: {
//               top: 10,
//               right: 10,
//               bottom: 0,
//             },
//           },
//           legend: {
//             display: true,
//             position: "right",
//             align: "start",
//             labels: {
//               usePointStyle: true,
//             },
//           },
//           responsive: true,
//           maintainAspectRatio: false,
//           scales: {
//             xAxes: [
//               {
//                 stacked: true,
//                 ticks: {
//                   padding: 5,
//                 },
//                 gridLines: {
//                   display: false,
//                 },
//               },
//             ],
//             yAxes: [
//               {
//                 stacked: false,
//                 gridLines: {
//                   drawBorder: false,
//                 },
//                 ticks: {
//                   beginAtZero: true,
//                   maxTicksLimit: 6,
//                   // padding: 20,
//                   callback(n: number) {
//                     if (n < 1e3) return n
//                     if (n >= 1e3) return +(n / 1e3).toFixed(1) + "K"
//                   },
//                 },
//               },
//             ],
//           },
//         }}
//       />
//     </div>
//   )
// }

// export default StackedBarChart

const StackedBarChart = () => {
  const [data, setData] = useState({
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
  return (
    <div>
      <h4 className="font-medium ml-2 pb-2">Projections vs Actuals</h4>

      <Bar data={data} options={options} />
    </div>
  )
}
export default StackedBarChart
