import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import SubmitButton from "./buttons/submitButton.component";
import CancelButton from "./buttons/cancelButton.compnent";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import DeleteItemDialog from "./dialogs/deleteItemDialog.component";
import API from "../utils/API";
import Button from "@material-ui/core/Button";

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
    API.getBucketListItemForEdit(this.props.match.params.id)
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

  onChangeBucketListItemCompleted = bucketListItem_completed => e => {
    this.setState({
      bucketListItem_completed: e.target.checked
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const updatedObj = {
      bucketListItem_name: this.state.bucketListItem_name,
      bucketListItem_comment: this.state.bucketListItem_comment,
      bucketListItem_completed: this.state.bucketListItem_completed
    };

    API.submitItemEdits(this.props.match.params.id, updatedObj)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

      this.props.history.push("/");
  };

  handleDelete = id => {
    API.deleteItemFromList(this.props.match.params.id)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h3>Edit your Bucket List Item!</h3>

        <form onSubmit={this.onSubmit}>
          <TextField
            type="text"
            className="form-control"
            value={this.state.bucketListItem_name}
            onChange={this.onChangeBucketListItemName}
          />

          <TextField
            type="text"
            className="form-control"
            value={this.state.bucketListItem_comment}
            onChange={this.onChangeBucketListItemComment}
          />

          <FormControlLabel
            control={
              <Switch
                className="form-control"
                color="primary"
                checked={this.state.bucketListItem_completed}
                value={this.state.bucketListItem_completed}
                onChange={this.onChangeBucketListItemCompleted(
                  "bucketListItem_completed"
                )}
              />
            }
            label="Completed?"
          />

          <SubmitButton />

          <CancelButton />

          <hr />

          {/* <DeleteItemDialog /> */}
          <Button onClick={this.handleDelete}>Delete</Button>
        </form>
      </div>
    );
  }
}
