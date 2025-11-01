// 📈 src/components/ChartCard.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChartCard = ({ data, title }) => {
  return (
    <div className="chart-card">
      <h3 style={{ marginBottom: "10px", color: "#ffa500" }}>{title}</h3>
      {/* ResponsiveContainer ensures chart fills width/height */}
      <div style={{ width: "100%", height: "280px" }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="day" stroke="#ffcc66" />
            <YAxis stroke="#ffcc66" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a0f00",
                border: "1px solid #ffa500",
                color: "#fff",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#ffa500"
              strokeWidth={3}
              dot={{ fill: "#ffcc66", r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartCard;
