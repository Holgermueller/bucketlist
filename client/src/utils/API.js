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

  submitItemEdits: function(id, updatedBucketListObject) {
    return axios.post("/api/bucketList/" + id, updatedBucketListObject);
  },

  deleteItemFromList: function(id) {
    return axios.delete("/api/bucketList/" + id);
  }
};

export default API;
