import React, { Component } from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

const navbar = {
  borderRadius: "15px"
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
        <Paper style={navbar}>
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
        </Paper>
      </header>
    );
  }
}