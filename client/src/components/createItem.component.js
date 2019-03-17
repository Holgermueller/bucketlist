import React, { Component } from "react";
import axios from "axios";

export default class createItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      comment: "Added to list.",
      date: "",
      completed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ description: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(
      "You entered: " + this.state.description + " " + this.state.completed
    );

    const newBucketListItem = {
      description: this.state.description,
      comment: this.state.comment,
      date: this.state.date,
      completed: this.state.completed
    };

    axios
      .post("http://localhost:3001/bucketList/add", newBucketListItem)
      .then(res => console.log(res.data));

    this.setState({
      description: "",
      comment: "Added to list.",
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
            name="description"
            placeholder="What would you like to do?"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <input type="submit" value="SUBMIT" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}
