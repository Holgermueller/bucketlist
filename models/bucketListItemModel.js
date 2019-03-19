const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let bucketListItem = new Schema({
  bucketListItem_name: { type: String },
  bucketListItem_comment: { type: String },
  date: { type: Date, default: Date.now },
  bucketListItem_completed: { type: Boolean }
});

module.exports = mongoose.model("bucketListItem", bucketListItem);
