import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import API from "../utils/API";

const completedListDisplay = {};

const headerStyle = { textAlign: "center" };

const completedListItem = { textAlign: "center", marginBottom: "5px" };

const CompletedItem = props => (
  <Card style={completedListItem}>
    <Typography variant="h3" gutterBottom>
      {props.completedItemOnList.bucketListItem_name}!
    </Typography>
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
    API.loadBucketList()
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
        <Card z={7}>
          <Typography variant="h6" style={headerStyle}>
            Your Completed Items!!
          </Typography>
        </Card>
        <br />

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
