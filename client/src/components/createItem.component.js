import React, { Component } from "react";
import API from "../utils/API";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import SubmitButton from "./buttons/submitButton.component";
import CancelButton from "./buttons/cancelButton.compnent";

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

const error = {
  color: "red"
};

export default class createItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bucketListItem_name: "",
      error: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ bucketListItem_name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let bucketListItemName =
      this.state.bucketListItem_name.charAt(0).toUpperCase() +
      this.state.bucketListItem_name.slice(1).toLowerCase();

    if (bucketListItemName === "") {
      this.setState({ error: "You must enter something." });
    } else {
      API.enterBucketListItem({
        bucketListItem_name: bucketListItemName
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));

      this.setState({
        bucketListItem_name: ""
      });

      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div>
        <Card style={cardStyles}>
          <h3>Add an item to your Bucket List!</h3>
          <hr />
          <form onSubmit={this.handleSubmit} style={formStyles}>
            <h2 style={error}>{this.state.error}</h2>
            <TextField
              style={textField}
              name="bucketListItem_name"
              placeholder="What would you like to do?"
              value={this.state.bucketListItem_name}
              onChange={this.handleChange}
              margin="normal"
            />
            <SubmitButton />

            <CancelButton />
          </form>
        </Card>
      </div>
    );
  }
}
