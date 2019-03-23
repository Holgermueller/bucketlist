import axios from "axios";

const API = {
  enterBucketListItem: function(newBucketListItem) {
    return axios.post(
      "http://localhost:3001/bucketList/add",
      newBucketListItem
    );
  },

  loadBucketList: function() {
    return axios.get("/bucketList");
  }
};

export default API;
