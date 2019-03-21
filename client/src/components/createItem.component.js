import React, { Component } from "react";
import API from "../utils/API";

export default class createItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bucketListItem_name: "",
      bucketListItem_comment: "Added to list.",
      date: "",
      bucketListItem_completed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ bucketListItem_name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(
      "You entered: " +
        this.state.bucketListItem_name +
        " " +
        this.state.bucketListItem_completed
    );

    API.enterBucketListItem({
        bucketListItem_name: this.state.bucketListItem_name,
        bucketListItem_comment: this.state.bucketListItem_comment,
        date: this.state.date,
        bucketListItem_completed: this.state.bucketListItem_completed
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));

    this.setState({
      bucketListItem_name: "",
      bucketListItem_comment: "Added to list.",
      date: "",
      completed: false
    });
  };

  render() {
    return (
      <div>
        <h3>Add an item to your Bucket List</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="bucketListItem_name"
            placeholder="What would you like to do?"
            value={this.state.bucketListItem_name}
            onChange={this.handleChange}
          />
          <input type="submit" value="SUBMIT" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}
