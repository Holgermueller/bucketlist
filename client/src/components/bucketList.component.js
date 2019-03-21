import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, GridCell } from "@rmwc/grid";
import { Card } from "@rmwc/card";
import { Elevation } from "@rmwc/elevation";
import { ListDivider } from "@rmwc/list";
import "@material/list";
import { Typography } from "@rmwc/typography";
import "./bucket-list.component.css";
import API from "../utils/API";

const ItemOnList = props => (
  <GridCell className="bucket-list-item">
    <Elevation>
      <Card className="bucket-list-card">
        <Typography use="headline4">
          <div>{props.itemOnList.bucketListItem_name}</div>
        </Typography>
        <ListDivider />
        <div>
          <Link to={"/edit/" + props.itemOnList._id}>Edit</Link>
        </div>
      </Card>
    </Elevation>
  </GridCell>
);

export default class bucketList extends Component {
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
        <Grid>
          <GridCell>
            <Elevation z={7}>
              <Card>
                <h3>Welcome to your Bucket List</h3>
              </Card>
            </Elevation>
          </GridCell>
        </Grid>

        <div>
          {this.state.itemsOnList ? (
            <Grid className="bucket-list-display">
              {this.loadBucketListItems()}
            </Grid>
          ) : (
            <Grid>
              <GridCell>
                <Elevation>
                  <Card>Enter something already!</Card>
                </Elevation>
              </GridCell>
            </Grid>
          )}
        </div>
      </div>
    );
  }
}
