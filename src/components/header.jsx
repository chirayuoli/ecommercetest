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
        <div class="sidebar">
          <ul class="sidebar-bar">
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-home"></i>
                <span>Home</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-store"></i>
                <span>Market</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-pen"></i>
                <span>Blog</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-paw"></i>
                <span>Profile</span>
              </a>{" "}
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-globe"></i>
                <span>Discover</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-sliders-h"></i>
                <span>Services</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="far fa-envelope"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
