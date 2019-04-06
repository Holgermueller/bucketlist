import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Paper, Tabs, Tab } from "@material-ui/core";

const navbar = {
  borderRadius: "15px"
};

const allNavLinks = {
  display: "inline-flex"
};

const navbarItem = {
  listStyle: "none",
  padding: "2px"
};

export default class Navbar extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <header>
        <Paper style={navbar}>
          <div className="collapse nav-collapse">
            <Tabs
              style={allNavLinks}
              value={this.state.value}
              indicatorColor={"primary"}
              onChange={this.handleChange}
              centered
            >
              <Tab style={navbarItem} label="MY LIST" to="/" component={Link} />
              <Tab
                style={navbarItem}
                label="CREATE ITEM"
                to="/create"
                component={Link}
              />
              <Tab
                style={navbarItem}
                label="COMPLETED ITEMS!"
                to="/completed"
                component={Link}
              />
            </Tabs>
          </div>
        </Paper>
      </header>
    );
  }
}
