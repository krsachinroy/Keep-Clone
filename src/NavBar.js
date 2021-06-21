import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <div id="navbar1">
      <nav className="navbar navbar-default">
        <div className="container" id="navbar3">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              Sachin Web
            </a>
          </div>
          <div className="navbar2">
            <a href="/">
              <span>Sachin Keep </span>
            </a>
            <a href="/ap">
              <span> Ap</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
