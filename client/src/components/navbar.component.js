import React, { Component } from "react";
import { Link } from "react-router-dom";

const navbar = {
  backgroundColor: "ghostwhite",
  borderRadius: "15px",
  border: "1px solid black"
}

const allNavLinks = {
  display: "inline-flex"
}

const navbarItem = {
  listStyle: "none"
}

const navLink = {
  textDecoration: "none",
  padding: "2px"
}

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <nav style={navbar}>
          <div className="collapse nav-collapse">
            <ul style={allNavLinks}>
              <li style={navbarItem}>
                <Link to="/" style={navLink}>
                  My List
                </Link>
              </li>
              <li style={navbarItem}>
                <Link to="/create" style={navLink}>
                  Create Item
                </Link>
              </li>
              <li style={navbarItem}>
                <Link to="/completed" style={navLink}>
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
