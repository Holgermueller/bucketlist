import React, { Component } from "react";
import API from "../utils/API";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import SubmitButton from "./buttons/submitButton.component";

const cardStyles = {
  textAlign: "center"
};

const formStyles = {
  padding: "5%",
  display: "inline-grid"
};

const textField = {
  width: "200"
};

export default class createItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bucketListItem_name: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ bucketListItem_name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("You entered: " + this.state.bucketListItem_name);

    API.enterBucketListItem({
      bucketListItem_name: this.state.bucketListItem_name
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));

    this.setState({
      bucketListItem_name: ""
    });
  };

  render() {
    return (
      <div>
        <Card style={cardStyles}>
          <h3>Add an item to your Bucket List!</h3>
          <hr />
          <form onSubmit={this.handleSubmit} style={formStyles}>
            <TextField
              style={textField}
              name="bucketListItem_name"
              placeholder="What would you like to do?"
              value={this.state.bucketListItem_name}
              onChange={this.handleChange}
              margin="normal"
            />
            <SubmitButton />
          </form>
        </Card>
      </div>
    );
  }
}
