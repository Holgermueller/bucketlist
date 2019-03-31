import axios from "axios";

const API = {
  getBucketListItemForEdit: function(id) {
    return axios.get("/api/bucketList/" + id);
  },

  enterBucketListItem: function(newBucketListItem) {
    return axios.post("/api/bucketList", newBucketListItem);
  },

  loadBucketList: function() {
    return axios.get("/api/bucketList");
  },

  submitItemEdits: function(updatedObj) {
    return axios.put("/api/bucketList/", updatedObj);
  }
};

export default API;
