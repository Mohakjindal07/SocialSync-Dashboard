import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <h1 className="brand">SocialSync Dashboard</h1>
        <input className="search" type="text" placeholder="Search..." />
      </div>
      <div className="nav-right">
        <button className="btn">+ Create Post</button>
        <div className="avatar">SS</div>
      </div>
    </div>
  );
};

export default Navbar;
