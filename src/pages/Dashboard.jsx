import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import {
  dailyEngagement,
  platforms,
  timeline,
  sentimentData,
} from "../data/mockData";
import StatCard from "../components/StatCard";
import "../styles.css";

const Dashboard = () => {
  const COLORS = ["#ff7300", "#ffa500", "#ffd580", "#ffb347"];

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <h1>Social Media Analytics Dashboard</h1>
        <p>
          Visualize audience, engagement, sentiment, and growth trends powered by
          data-driven insights.
        </p>
      </div>

      {/* Statistic Cards */}
      <div className="dashboard-stats">
        <StatCard title="Followers" value="8.2K" growth="+3.4%" />
        <StatCard title="Posts" value="1.3K" growth="+1.1%" />
        <StatCard title="Comments" value="2.4K" growth="-0.9%" />
        <StatCard title="Engagement Rate" value="89%" growth="+4.2%" />
      </div>

      {/* Charts Section */}
      <div className="dashboard-charts">
        {/* Line Chart */}
        <div className="chart-box">
          <h3>Weekly Engagement Overview</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={dailyEngagement}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="day" stroke="#ffa500" />
              <YAxis stroke="#ffa500" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#111",
                  border: "1px solid #ff7300",
                  color: "#ffa500",
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#ff7300"
                strokeWidth={3}
                dot={{ fill: "#ffa500", r: 6 }}
                activeDot={{ r: 9 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="chart-box">
          <h3>Engagement by Platform</h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={platforms}
                dataKey="users"
                nameKey="platform"
                cx="50%"
                cy="50%"
                outerRadius={90}
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {platforms.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    stroke="#111"
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#111",
                  border: "1px solid #ff7300",
                  color: "#ffa500",
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="chart-box">
          <h3>Monthly Audience Growth</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={timeline}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="month" stroke="#ffa500" />
              <YAxis stroke="#ffa500" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#111",
                  border: "1px solid #ff7300",
                  color: "#ffa500",
                }}
              />
              <Legend />
              <Bar
                dataKey="engagement"
                fill="url(#barGradient)"
                radius={[8, 8, 0, 0]}
                barSize={40}
              />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff7300" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#000" stopOpacity={0.1} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Sentiment Chart */}
        <div className="chart-box">
          <h3>Audience Sentiment Breakdown</h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={sentimentData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label={({ name, value }) => `${name}: ${value}%`}
              >
                <Cell fill="#00C49F" />
                <Cell fill="#FFBB28" />
                <Cell fill="#FF4444" />
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#111",
                  border: "1px solid #ff7300",
                  color: "#ffa500",
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
