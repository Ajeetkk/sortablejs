import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  var clk;
  // const ClockCotext = React.createContext(clk);
  // alert(ClockCotext);
  const handleClick = () => {
    clk = localStorage.getItem("clockShowHide") === "1" ? "0" : "1";
    localStorage.setItem("clockShowHide", clk);
    // window.location.reload();
  };
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          to={"/"}
          className="sidebar-brand d-flex align-items-center justify-content-center"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">Admin</div>
        </Link>

        <li className="nav-item active">
          <Link to={"/"} className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </Link>
        </li>

        <div className="sidebar-heading">Pages</div>

        <li className="nav-item">
          <Link to={"/about-us"} className="nav-link">
            <i className="fas fa-fw fa-cog" />
            <span>About US</span>
          </Link>
        </li>
        <li className="nav-item" onClick={handleClick}>
          <Link className="nav-link">
            <i className="fas fa-fw fa-cog" />
            {/* <ClockCotext.Provider> */}
            <span className="nav-link">Clock</span>
            {/* </ClockCotext.Provider> */}
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/packery"} className="nav-link">
            <i className="fas fa-fw fa-wrench" />
            <span>Packery Demo</span>
          </Link>
        </li>

        <div className="sidebar-heading">Addons</div>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#utilities"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench" />
            <span>Utilities</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <a className="collapse-item" href="utilities-color.html">
                Colors
              </a>
              <a className="collapse-item" href="utilities-border.html">
                Borders
              </a>
              <a className="collapse-item" href="utilities-animation.html">
                Animations
              </a>
              <a className="collapse-item" href="utilities-other.html">
                Other
              </a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#pages"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder" />
            <span>Widgets</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <a className="collapse-item" href="login.html">
                Login
              </a>
              <a className="collapse-item" href="register.html">
                Register
              </a>
              <a className="collapse-item" href="forgot-password.html">
                Forgot Password
              </a>
              <div className="collapse-divider" />
              <h6 className="collapse-header">Other Pages:</h6>
              <a className="collapse-item" href="404.html">
                404 Page
              </a>
              <a className="collapse-item" href="blank.html">
                Blank Page
              </a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#contactus"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder" />
            <span>Contact us</span>
          </a>
        </li>
        <div className="text-center d-none d-md-inline">
          <br />
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
      </ul>
    </>
  );
}

export default Navbar;
