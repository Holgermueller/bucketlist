import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

const completedListDisplay = {};

const CompletedItem = props => (
  <Card>
    <p>{props.completedItemOnList.bucketListItem_name}</p>
  </Card>
);

export default class completedItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completedItemsOnList: []
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:3001/bucketList")
      .then(response => {
        let completedItems = [];
        response.data.forEach(completedItem => {
          if (completedItem.bucketListItem_completed === true) {
            completedItems.push(completedItem);
          }
        });
        this.setState({ completedItemsOnList: completedItems });
      })
      .catch(err => {
        console.log(err);
      });
  };

  loadCompletedBucketListItems = () => {
    return this.state.completedItemsOnList.map(function(listItem, i) {
      return <CompletedItem completedItemOnList={listItem} key={i} />;
    });
  };

  render() {
    return (
      <div>
        <Card>
          <h1>Your Completed Items!</h1>
        </Card>

        <div>
          {this.state.completedItemsOnList ? (
            <Grid style={completedListDisplay}>
              {this.loadCompletedBucketListItems()}
            </Grid>
          ) : (
            <Grid>
              <Card>Better get going on that list!</Card>
            </Grid>
          )}
        </div>
      </div>
    );
  }
}
