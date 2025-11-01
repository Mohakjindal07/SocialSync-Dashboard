// 📊 src/pages/Analytics.jsx
import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  AreaChart, Area
} from "recharts";
import {
  analyticsData,
  contentPerformance,
  sentimentTrend,
} from "../data/mockData";

const Analytics = () => {
  return (
    <div className="dashboard-container">
      {/* HEADER */}
      <div className="dashboard-header">
        <h1>Analytics Overview</h1>
        <p>Deep dive into platform performance, engagement trends, and sentiment</p>
      </div>

      {/* CHART GRID */}
      <div className="charts-grid">

        {/* Platform Engagement */}
        <div className="chart-card">
          <h3>Platform Engagement vs Reach</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="platform" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="engagement" fill="#ff8c00" />
              <Bar dataKey="reach" fill="#ffcc66" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Content Performance */}
        <div className="chart-card">
          <h3>Content Type Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={contentPerformance}>
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" />
              <PolarRadiusAxis />
              <Radar
                name="Performance"
                dataKey="value"
                stroke="#ff8c00"
                fill="#ff8c00"
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Sentiment Trend */}
        <div className="chart-card">
          <h3>Weekly Sentiment Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={sentimentTrend}>
              <defs>
                <linearGradient id="colorPos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff8c00" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ff8c00" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="positive" stroke="#ff8c00" fillOpacity={1} fill="url(#colorPos)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default Analytics;
