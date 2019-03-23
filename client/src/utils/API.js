import axios from "axios";

const API = {
  editBucketListItem: function(id) {
    return axios.get(
      "http://localhost:3001/bucketList/" + this.props.match.params.id
    );
  },

  enterBucketListItem: function(newBucketListItem) {
    return axios.post(
      "http://localhost:3001/bucketList/add",
      newBucketListItem
    );
  },

  loadBucketList: function() {
    return axios.get("http://localhost:3001/bucketList");
  }
};

export default API;
