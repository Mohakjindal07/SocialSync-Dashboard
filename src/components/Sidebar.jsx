import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaChartPie,
  FaHome,
  FaFileAlt,
  FaBullhorn,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";
import "../styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar bg-black text-white h-screen w-64 flex flex-col justify-between p-6 shadow-lg">
      {/* Logo */}
      <div>
        <h2 className="logo text-2xl font-bold text-orange-500 mb-8 tracking-wide">
          SociaSync
        </h2>

        {/* Navigation Menu */}
        <ul className="sidebar-menu space-y-4">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-orange-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-orange-500 hover:text-white"
                }`
              }
            >
              <FaHome className="icon text-lg" /> Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-orange-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-orange-500 hover:text-white"
                }`
              }
            >
              <FaChartPie className="icon text-lg" /> Analytics
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-orange-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-orange-500 hover:text-white"
                }`
              }
            >
              <FaFileAlt className="icon text-lg" /> Reports
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/campaigns"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-orange-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-orange-500 hover:text-white"
                }`
              }
            >
              <FaBullhorn className="icon text-lg" /> Campaigns
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-orange-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-orange-500 hover:text-white"
                }`
              }
            >
              <FaCog className="icon text-lg" /> Settings
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-orange-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-orange-500 hover:text-white"
                }`
              }
            >
              <FaQuestionCircle className="icon text-lg" /> Help
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-500 text-center mt-10">
        © {new Date().getFullYear()} SociaSync
      </div>
    </div>
  );
};

export default Sidebar;
