import React, { Component } from "react";
import axios from "axios";

export default class editItem extends Component {
  constructor(props) {
    super(props);

    this.onChangeBucketListItemName = this.onChangeBucketListItemName.bind(
      this
    );
    this.onChangeBucketListItemComment = this.onChangeBucketListItemComment.bind(
      this
    );

    this.onChangeBucketListItemComment = this.onChangeBucketListItemComment.bind(
      this
    );
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      bucketListItem_name: "",
      bucketListItem_comment: "",
      bucketListItem_completed: false
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/bucketList/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          bucketListItem_name: response.data.bucketListItem_name,
          bucketListItem_comment: response.data.bucketListItem_comment,
          bucketListItem_completed: response.data.bucketListItem_completed
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChangeBucketListItemName(e) {
    this.setState({
      bucketListItem_name: e.target.value
    });
  }

  onChangeBucketListItemComment(e) {
    this.setState({
      bucketListItem_comment: e.target.value
    });
  }

  onChangeBucketListItemCompleted(e) {
    this.setState({
      bucketListItem_completed: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const updateObj = {
      bucketListItem_name: this.state.bucketListItem_name,
      bucketListItem_comment: this.state.bucketListItem_comment,
      bucketListItem_completed: this.state.bucketListItem_completed
    };
    axios
      .post(
        "http://localHost:3001/bucketList/update/" + this.props.match.params.id,
        updateObj
      )
      .then(res => console.log(res.data));

    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h3>Edit your Bucket List Item!</h3>

        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control"
            value={this.state.bucketListItem_name}
            onChange={this.onChangeBucketListItemName}
          />

          <input
            type="text"
            className="form-control"
            value={this.state.bucketListItem_comment}
            onChange={this.onChangeBucketListItemComment}
          />

          <input
            type="text"
            className="form-control"
            value={this.state.bucketListItem_completed}
            onChange={this.onChangeBucketListItemCompleted}
          />

          <input type="submit" value="UPDATE" className="submit" />
        </form>
      </div>
    );
  }
}
