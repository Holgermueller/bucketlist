const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let bucketListItem = new Schema({
  bucketListItem_name: { type: String },
  bucketListItem_comment: { type: String, default: "Added to list!" },
  date: { type: Date, default: Date.now },
  bucketListItem_completed: { type: Boolean, default: false }
});

module.exports = mongoose.model("bucketListItem", bucketListItem);
