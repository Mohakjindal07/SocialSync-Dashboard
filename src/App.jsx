// ⚡ src/App.jsx – Optimized Layout for SociaSync
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🔹 Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// 🔹 Pages
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Campaigns from "./pages/Campaigns";
import Settings from "./pages/Settings";
import Help from "./pages/Help";

// 🔹 Styles
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Sidebar — fixed on the left */}
        <Sidebar />

        {/* Main Area */}
        <div className="main">
          {/* Navbar — stays on top */}
          <Navbar />

          {/* Scrollable content area */}
          <div className="page-container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
