import React, { Component } from "react";
import API from "../utils/API";

export default class bucketList extends Component {
  state = {
    itemsOnList: [],
    bucketListItem_name: "",
    bucketListItem_comment: "",
    date: "",
    bucketListItem_completed: ""
  };

  componentDidMount = () => {
    this.loadBucketListItems();
  };

  loadBucketListItems = () => {
    API.getBucketListItems(
      this.state.bucketListItem_name,
      this.state.bucketListItem_comment,
      this.state.date,
      this.state.bucketListItem_completed
    )
      .then(res => {
        this.setState({
          itemsOnList: res.data.response,
          bucketListItem_name: "",
          bucketListItem_comment: "",
          date: "",
          bucketListItem_completed: ""
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
