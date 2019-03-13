const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let bucketListItem = new Schema({
  itemOnList: { type: String, required: true },
  status: { type: String, required: true},
  dateCreated: { type: Date, default: Date.now() },
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model("bucketListItem", bucketListItem);
