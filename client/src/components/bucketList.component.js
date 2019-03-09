import React, { Component } from "react";
import API from "../utils/API";

export default class bucketList extends Component {
  state = {
    itemsOnList: [],
    itemDescription: "",
    status: "",
    dateCreated: "",
    completed: ""
  };

  componentDidMount = () => {
    this.loadBucketListItems();
  };

  loadBucketListItems = () => {
    API.getBucketListItems(
      this.state.itemDescription,
      this.state.status,
      this.state.dateCreated,
      this.state.completed
    )
      .then(res => {
        this.setState({
          itemsOnList: res.data.response,
          itemDescription: "",
          status: "",
          dateCreated: "",
          completed: ""
        });
      })
      .catch(err => {});
  };

  render() {
    return (
      <div>
        <h3>Welcome to your Bucket List</h3>

        <div>
          {this.state.itemsOnList ? (
            <ul>
              this.state.itemsOnList.map(itemOnList => (
                <li>List Item goes here!</li>
              ))
            </ul>
          ):(
            <ul>
              <li>Enter something already!</li>
            </ul>
          )}
        </div>
      </div>
    );
  }
}
