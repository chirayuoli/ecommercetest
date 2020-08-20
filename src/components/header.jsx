import React from "react";

class Header extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/a076d05399.js";
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return (
      <div className="header">
        <input type="checkbox" id="check" />
        <label for="check">
          <i class="fas fa-bars" id="btn"></i>
          <i class="fas fa-times" id="cancel"></i>
        </label>
        <div class="sidebar">
          <header>My Menu</header>
          <a href="#" class="active">
            <i class="fas fa-qrcode"></i>
            <span>Dashboard</span>
          </a>
          <a href="#">
            <i class="fas fa-link"></i>
            <span>Shortcuts</span>
          </a>
          <a href="#">
            <i class="fas fa-stream"></i>
            <span>Overview</span>
          </a>
          <a href="#">
            <i class="fas fa-calendar"></i>
            <span>Events</span>
          </a>
          <a href="#">
            <i class="far fa-question-circle"></i>
            <span>About</span>
          </a>
          <a href="#">
            <i class="fas fa-sliders-h"></i>
            <span>Services</span>
          </a>
          <a href="#">
            <i class="far fa-envelope"></i>
            <span>Contact</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
