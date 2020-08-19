import React from "react";
function Header() {
  return (
    <div className="header">
      <div className="inner-header">
        <a href="" className="logo-container">
          <h1>
            Pets<span>Nepal</span>
          </h1>
        </a>
        <ul className="navigation">
          <a className="active" href="">
            <li>Home</li>
          </a>
          <a href="">
            <li>Market</li>
          </a>
          <a href="">
            <li>Blog</li>
          </a>
          <a href="">
            <li>Profile</li>
          </a>
          <a href="">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Header;
