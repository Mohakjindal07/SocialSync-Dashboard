import React from "react";

const StatCard = ({ title, value, growth }) => {
  const growthColor = growth >= 0 ? "#ffa500" : "#ff4444";
  return (
    <div className="stat-card">
      <h3 style={{ marginBottom: "6px", color: "#ffcc66" }}>{title}</h3>
      <h1 style={{ fontSize: "1.8rem", margin: "5px 0" }}>{value}</h1>
      <p style={{ color: growthColor }}>{growth}% this week</p>
    </div>
  );
};

export default StatCard;
