import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from "recharts";
import { FaChartBar, FaChartLine, FaFileAlt } from "react-icons/fa";

const Reports = () => {
  // Sample analytics data
  const engagementData = [
    { platform: "Instagram", engagement: 2400, reach: 3800 },
    { platform: "Twitter", engagement: 1398, reach: 2800 },
    { platform: "LinkedIn", engagement: 980, reach: 1800 },
    { platform: "Facebook", engagement: 3908, reach: 4800 },
  ];

  const growthData = [
    { month: "Jan", followers: 1000 },
    { month: "Feb", followers: 1500 },
    { month: "Mar", followers: 2100 },
    { month: "Apr", followers: 3000 },
    { month: "May", followers: 3800 },
    { month: "Jun", followers: 4700 },
  ];

  const pieData = [
    { name: "Instagram", value: 400 },
    { name: "Twitter", value: 300 },
    { name: "LinkedIn", value: 200 },
    { name: "Facebook", value: 100 },
  ];

  const COLORS = ["#ff8c00", "#ffb84d", "#ffaa33", "#ffe0b3"];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1><FaFileAlt style={{ marginRight: "10px" }} /> Reports</h1>
        <p className="page-subtitle">
          Generate and analyze performance, engagement, and growth reports across your platforms.
        </p>
      </div>

      {/* Summary Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
        gap: "1rem",
        marginBottom: "2rem"
      }}>
        {[
          { title: "Total Engagement", value: "12.4K", icon: <FaChartBar />, color: "#ff8c00" },
          { title: "Total Reach", value: "32.8K", icon: <FaChartLine />, color: "#ffaa33" },
          { title: "Conversion Rate", value: "4.6%", icon: <FaChartLine />, color: "#ffb84d" },
          { title: "New Followers", value: "820", icon: <FaChartBar />, color: "#ffcc66" },
        ].map((item, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: "10px",
            padding: "1rem",
            boxShadow: "0 0 15px rgba(255,140,0,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <div>
              <h3 style={{ color: item.color, marginBottom: "4px", fontSize: "1.1rem" }}>{item.title}</h3>
              <h2 style={{ color: "#fff" }}>{item.value}</h2>
            </div>
            <div style={{ fontSize: "1.8rem", color: item.color }}>{item.icon}</div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
        gap: "2rem"
      }}>
        {/* Engagement Chart */}
        <div style={{
          background: "rgba(255,255,255,0.05)",
          borderRadius: "10px",
          padding: "1rem",
          boxShadow: "0 0 20px rgba(255,140,0,0.1)"
        }}>
          <h2 style={{ color: "#ffb84d", marginBottom: "10px" }}>Engagement Overview</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="platform" stroke="#ffcc66" />
              <YAxis stroke="#ffcc66" />
              <Tooltip contentStyle={{ background: "#1a0f00", border: "1px solid #ff8c00" }} />
              <Legend />
              <Bar dataKey="engagement" fill="#ff8c00" />
              <Bar dataKey="reach" fill="#ffaa33" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Follower Growth */}
        <div style={{
          background: "rgba(255,255,255,0.05)",
          borderRadius: "10px",
          padding: "1rem",
          boxShadow: "0 0 20px rgba(255,140,0,0.1)"
        }}>
          <h2 style={{ color: "#ffb84d", marginBottom: "10px" }}>Follower Growth</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" stroke="#ffcc66" />
              <YAxis stroke="#ffcc66" />
              <Tooltip contentStyle={{ background: "#1a0f00", border: "1px solid #ff8c00" }} />
              <Legend />
              <Line type="monotone" dataKey="followers" stroke="#ff8c00" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Engagement Share Pie */}
        <div style={{
          background: "rgba(255,255,255,0.05)",
          borderRadius: "10px",
          padding: "1rem",
          boxShadow: "0 0 20px rgba(255,140,0,0.1)"
        }}>
          <h2 style={{ color: "#ffb84d", marginBottom: "10px" }}>Engagement Share</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: "#1a0f00", border: "1px solid #ff8c00" }} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Reports;
