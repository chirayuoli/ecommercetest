import React from "react";
import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title"> DOGS </h1>
          <span className="subtitle"> SHOP NOW </span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title"> CATS </h1>
          <span className="subtitle"> SHOP NOW </span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title"> FISH </h1>
          <span className="subtitle"> SHOP NOW </span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title"> BIRDS </h1>
          <span className="subtitle"> SHOP NOW </span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title"> RABBITS </h1>
          <span className="subtitle"> SHOP NOW </span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;