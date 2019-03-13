import React, { Component } from "react";
import axios from "axios";

export default class createItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemOnList: "",
      status: "Added to list.",
      dateCreated: "",
      completed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ itemOnList: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(
      "You entered: " + this.state.itemOnList + " " + this.state.completed
    );

    const newBucketListItem = {
      itemOnList: this.state.itemOnList,
      status: this.state.status,
      dateCreated: this.state.dateCreated,
      completed: this.state.completed
    };

    axios
      .post("http://localhost:3001/routes/add", newBucketListItem)
      .then(res => console.log(res.data));

    this.setState({
      itemOnList: "",
      status: "Added to list.",
      dateCreated: "",
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
            name="itemOnList"
            placeholder="What would you like to do?"
            value={this.state.itemOnList}
            onChange={this.handleChange}
          />
          <input type="submit" value="SUBMIT" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}
