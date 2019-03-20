import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <Link to="/" className="navbar-brand">
            Bucket List
          </Link>
          <div className="collapse nav-collapse">
            <ul>
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  The List
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create Item
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/completed" className="nav-link">
                  Completed Items!
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
