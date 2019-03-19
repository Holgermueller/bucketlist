import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "./bucket-list.component.css";
//import API from "../utils/API";

const ItemOnList = props => (
  <li className="bucket-list-item"> 
    <div>
{props.itemOnList.bucketListItem_name}
    </div>
  <div>
    <Link to={"/edit/"+ props.itemOnList._id}>Edit</Link>
  </div>
  </li>
)

export default class bucketList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsOnList: []
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:3001/bucketList/")
    .then(response => {
      this.setState({itemsOnList: response.data});
    }).catch(err => {
      console.log(err);
    })
  };

  loadBucketListItems = () => {
    return this.state.itemsOnList.map(function(listItem, i){
      return <ItemOnList itemOnList={listItem} key={i}/>;
    })
  };

  render() {
    return (
      <div>
        <h3>Welcome to your Bucket List</h3>

        <div>
          {this.state.itemsOnList ? (
            <ul className="bucket-list-display">
              {this.loadBucketListItems()}
            </ul>
          ) : (
            <ul>
              <li>Enter something already!</li>
            </ul>
          )}
        </div>
      </div>
    );
  }
}
