import React from "react";
import "../styles.css";

const Settings = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Settings</h1>
        <p className="page-subtitle">
          Manage your profile, theme, and connected platforms.
        </p>
      </div>

      <div className="settings-section">
        <h2>Profile Information</h2>
        <div className="settings-card">
          <label>Full Name</label>
          <input type="text" placeholder="Enter Your Username" />

          <label>Email Address</label>
          <input type="email" placeholder="Enter your Email" />
        </div>
      </div>

      <div className="settings-section">
        <h2>Theme Preferences</h2>
        <div className="settings-card theme-options">
          <button>Light Mode</button>
          <button>Dark Mode</button>
          <button>Sunset Mode</button>
        </div>
      </div>

      <div className="settings-section">
        <h2>Connected Platforms</h2>
        <div className="settings-card platform-list">
          <label>
            <input type="checkbox" /> Instagram
          </label>
          <label>
            <input type="checkbox" /> Twitter
          </label>
          <label>
            <input type="checkbox" /> LinkedIn
          </label>
          <button className="save-btn">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
