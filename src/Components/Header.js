import React from "react";

function Header() {
  return (
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">
        Dynamic Dashboard
        {/* <a href="#">
            <span className="fas fa-edit" />
          </a> */}
      </h1>
      <a
        href="#report"
        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
      >
        <i className="fas fa-download fa-sm text-white-50" /> Generate Report
      </a>
    </div>
  );
}

export default Header;
