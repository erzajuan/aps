import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const DashboardStats = () => {
  // Data dummy
  const data = [
    { npk: "91201", closedTickets: 10 },
    { npk: "91202", closedTickets: 7 },
    { npk: "91203", closedTickets: 14 },
    { npk: "91204", closedTickets: 7 },
    { npk: "91205", closedTickets: 12 },
    { npk: "91206", closedTickets: 50 },
    { npk: "91207", closedTickets: 100 },
    { npk: "91208", closedTickets: 87 },
    { npk: "91209", closedTickets: 1 },
  ];

  // Data untuk diagram lingkaran
  const pieData = [
    { name: "Ticket Closed", value: 40 },
    { name: "Ticket Reopen", value: 10 },
    { name: "Ticket Open", value: 30 },
    { name: "Returned to Backdesk", value: 20 },
  ];

  // Warna untuk diagram lingkaran
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // Custom Legend Component
  const renderCustomLegend = () => (
    <div className="custom-legend">
      {pieData.map((entry, index) => (
        <div key={`item-${index}`} className="legend-item">
          <div
            className="legend-color"
            style={{
              backgroundColor: COLORS[index % COLORS.length],
            }}
          ></div>
          <span className="legend-name">{entry.name}</span>
          <span className="legend-value">({entry.value})</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="dashboard-stats">
      {/* Diagram Lingkaran */}
      <div className="pie-chart-container">
        <PieChart width={400} height={400}>
          <Pie
            data={pieData}
            cx="50%"
            cy="40%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        {renderCustomLegend()}
      </div>

      {/* Diagram batang */}
      <BarChart
        width={900}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="npk" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="closedTickets" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default DashboardStats;
