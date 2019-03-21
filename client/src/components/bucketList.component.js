import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import "./bucket-list.component.css";
import API from "../utils/API";

const headerStyle = {
  textAlign: "center"
};

const ItemOnList = props => (
  <GridList className="bucket-list-item">
    <Card className="bucket-list-card">
      <Typography variant="h4">
        {props.itemOnList.bucketListItem_name}
      </Typography>
      <Divider />
      Status: <Typography>{props.itemOnList.bucketListItem_comment}</Typography>
      <Link to={"/edit/" + props.itemOnList._id}>Edit</Link>
    </Card>
  </GridList>
);

export default class BucketList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsOnList: []
    };
  }

  componentDidMount = () => {
    API.loadBucketList()
      .then(response => {
        this.setState({ itemsOnList: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  loadBucketListItems = () => {
    return this.state.itemsOnList.map(function(listItem, i) {
      return <ItemOnList itemOnList={listItem} key={i} />;
    });
  };

  render() {
    return (
      <div>
        <Card z={7}>
          <Typography variant="h6" style={headerStyle}>
            Welcome to your Bucket List
          </Typography>
        </Card>
        <br />

        <div>
          {this.state.itemsOnList ? (
            <Paper>
              {" "}
              <Grid className="bucket-list-display">
                {this.loadBucketListItems()}
              </Grid>
            </Paper>
          ) : (
            <Grid>
              <GridList>
                <Paper>
                  <Card>Enter something already!</Card>
                </Paper>
              </GridList>
            </Grid>
          )}
        </div>
      </div>
    );
  }
}
