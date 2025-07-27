import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../Styles/SideBarLayout.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SidebarLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/admin/logout",
        {},
        {
          withCredentials: true, // Needed to send cookies
        }
      );
      navigate("/"); // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="dashboard-layout">
      <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <div>
          <h3>Aaryaa Network</h3>
        </div>
        <nav className="sidebar-links">
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/view-plans">View Plans</Link>
          <Link to="/admin/add-plans">Add Plans</Link>
          <Link to="/admin/update-gst">Update GST</Link>
          <Link to="/admin/settings">Settings</Link>
          <Link className="logout-link" onClick={handleLogout}>
            Logout
          </Link>
        </nav>
      </div>
      <div className="main-content">
        <Outlet /> {/* Render nested routes */}
      </div>
    </div>
  );
};

export default SidebarLayout;
