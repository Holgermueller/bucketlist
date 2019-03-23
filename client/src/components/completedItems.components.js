import React, { Component } from "react";
import Card from "@material-ui/core/Card";

export default class completedItems extends Component {
  render() {
    return (
      <div>
        <Card>
          <h1>Your Completed Items!</h1>

          <div>
            <h2>Better get going on that list!</h2>
          </div>
        </Card>
      </div>
    );
  }
}
