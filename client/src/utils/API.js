import axios from "axios";

const API = {
  enterBucketListItem: function(newBucketListItem) {
    return axios
      .post("http://localhost:3001/bucketList/add", newBucketListItem)
      .then(res => console.log(res.data));
  },

  getBucketListItems: function() {
    return axios.get("/");
  }
};

export default API;
