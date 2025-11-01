// ⚡ src/pages/Campaigns.jsx
import React from "react";
import { Calendar, TrendingUp, Target } from "lucide-react";

const campaigns = [
  {
    title: "Diwali Promo",
    status: "Active",
    platform: "Instagram",
    reach: "12.3K",
    growth: "+18%",
    color: "#ff6b00",
  },
  {
    title: "Festive Ads",
    status: "Scheduled",
    platform: "Facebook",
    reach: "8.9K",
    growth: "+9%",
    color: "#ffaa00",
  },
  {
    title: "Brand Awareness",
    status: "Completed",
    platform: "LinkedIn",
    reach: "15.7K",
    growth: "+24%",
    color: "#ffcc66",
  },
];

const Campaigns = () => {
  return (
    <div className="campaigns-page">
      <h2 className="page-title">🎯 Campaigns</h2>
      <p className="page-subtitle">
        Manage, track, and analyze marketing campaigns across platforms.
      </p>

      <div className="campaign-grid">
        {campaigns.map((item, i) => (
          <div key={i} className="campaign-card">
            <div className="campaign-header">
              <Target color={item.color} size={22} />
              <h3 style={{ color: item.color }}>{item.title}</h3>
            </div>
            <p className="campaign-status">{item.status}</p>
            <p className="campaign-platform">{item.platform}</p>

            <div className="campaign-metrics">
              <div className="metric">
                <Calendar size={16} />
                <span>{item.reach} reach</span>
              </div>
              <div className="metric growth">
                <TrendingUp size={16} />
                <span>{item.growth}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
