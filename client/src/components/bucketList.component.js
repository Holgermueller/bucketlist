import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import "./bucket-list.component.css";
import API from "../utils/API";

const headerStyle = {
  textAlign: "center"
};

const bucketListItem = {
  textAlign: "center",
  marginBottom: "5px"
}

const editLink = {
  textDecoration: "none",
  float: "right",
  padding: "4px"
}

const ItemOnList = props => (

    <Card className="bucket-list-card" style={bucketListItem}>
      <Typography variant="h4">
        {props.itemOnList.bucketListItem_name}
      </Typography>
      <Divider />
      Status: <Typography>{props.itemOnList.bucketListItem_comment}</Typography>
      <Link to={"/edit/" + props.itemOnList._id} style={editLink}>Edit</Link>
    </Card>
 
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
              <Grid className="bucket-list-display">
                {this.loadBucketListItems()}
              </Grid>
          ) : (
            <Grid>
                  <Card>Enter something already!</Card>
            </Grid>
          )}
        </div>
      </div>
    );
  }
}
