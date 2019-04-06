import React, { Component } from "react";

const footerStyles = {
  display: "inline-flex"
};

const linkStyles = {
  textDecoration: "none",
  color: "black"
};

export default class Footer extends Component {
  render() {
    return (
      <footer style={footerStyles}>
        <div>&copy; 2019 Holger Mueller |</div>
        <a
          href="https://github.com/Holgermueller/bucketlist"
          style={linkStyles}
        >
          {" "}
          Repo
        </a>
      </footer>
    );
  }
}
