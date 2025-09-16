

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Sales",
      data: [120, 190, 300, 500, 200, 300, 400, 320, 290, 400, 360, 480],
      borderColor: "#4cc9f0",
      backgroundColor: "rgba(76, 201, 240, 0.2)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    y: { beginAtZero: true, ticks: { color: "#ccc" } },
    x: { ticks: { color: "#ccc" } },
  },
  plugins: {
    legend: {
      labels: { color: "#fff" },
    },
  },
};

const cards = [
  { label: "Today's Money", value: "$53,000", change: "+55%" },
  { label: "Today's Users", value: "2,300", change: "+5%" },
  { label: "New Clients", value: "3,052", change: "-14%" },
  { label: "Total Sales", value: "$173,000", change: "+8%" },
];

export default function ChartCard() {
  return (
    <div className="space-y-6 ">
      {/* Top Cards Grid */}
      <div className="    grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-[#1d3557] p-4 rounded-xl shadow-md">
            <p className="text-sm text-gray-400">{card.label}</p>
            <div className="flex justify-between items-center mt-1">
              <h2 className="text-xl font-bold">{card.value}</h2>
              <span className={`text-sm ${card.change.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>
                {card.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Sales Chart */}
      <div className="bg-[#1d3557] p-4 rounded-xl shadow-md w-full">
        <h3 className="text-lg font-semibold mb-2">Sales Overview</h3>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
