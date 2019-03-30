import axios from "axios";

const API = {
  editBucketListItem: function(id) {
    return axios.get(
      "api/bucketList/" + id
    );
  },

  enterBucketListItem: function(newBucketListItem) {
    return axios.post(
      "/api/bucketList",
      newBucketListItem
    );
  },

  loadBucketList: function() {
    return axios.get("/api/bucketList");
  }
};

export default API;
