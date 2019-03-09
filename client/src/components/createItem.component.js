import React, { Component } from "react";

export default class createItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemOnList: "",
      status: "",
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
