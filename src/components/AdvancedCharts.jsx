// src/components/AdvancedCharts.jsx
import React from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";
import { platformStats, engagementTypes, sentimentData, postReach } from "../data/mockData";

const COLORS = ["#ff7f00", "#ffae42", "#ffaa00", "#ffcf33", "#ff6600"];

const AdvancedCharts = () => {
  return (
    <div className="advanced-charts">
      <div className="chart-row">
        <div className="chart-box">
          <h3>Platform User Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={platformStats}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#ffcc66" />
              <YAxis stroke="#ffcc66" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1a0f00",
                  border: "1px solid #ffa500",
                  color: "#fff",
                }}
              />
              <Bar dataKey="users" fill="#ff7f00" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>Engagement Type Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={engagementTypes}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                fill="#ff7f00"
                label
              >
                {engagementTypes.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="chart-row">
        <div className="chart-box">
          <h3>Sentiment Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart outerRadius={90} data={sentimentData}>
              <PolarGrid stroke="#333" />
              <PolarAngleAxis dataKey="name" stroke="#ffcc66" />
              <PolarRadiusAxis stroke="#ffcc66" />
              <Radar
                name="Sentiment"
                dataKey="value"
                stroke="#ff7f00"
                fill="#ff7f00"
                fillOpacity={0.5}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>Post Reach Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={postReach}>
              <defs>
                <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff7f00" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ff7f00" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="month" stroke="#ffcc66" />
              <YAxis stroke="#ffcc66" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="reach"
                stroke="#ff7f00"
                fillOpacity={1}
                fill="url(#colorReach)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdvancedCharts;
