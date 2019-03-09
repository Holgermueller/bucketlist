import axios from 'axios';

export default {

  getBucketListItems: function() {
    return axios.get("/")
  }

};