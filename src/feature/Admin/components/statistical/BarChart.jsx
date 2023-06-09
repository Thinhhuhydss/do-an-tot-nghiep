import React, { useState, useEffect } from "react"

import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { type } from "os"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarChart = (props) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartData({
      labels: ["Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy", "CN"],
      datasets: [
        {
          label: "Lược truy cập",
          data: [18, 22, 19, 17, 24, 17, 22],
          borderColor: "rgb(53,162,235)",
          backgroundColor: "rgb(53,162,235,0.4)",
        },
      ],
    })
    setChartOptions({
      Plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Daily Revenue",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    })
  }, [])

  return (
    <>
      <div className="w-full md:col-span-2 relative lg:h-[75vh] h-[50vh] m-auto p-43 border rounded-lg bg-white">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  )
}

export default BarChart
