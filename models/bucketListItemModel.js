const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let bucketListItem = new Schema({
  description: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
  completed: Boolean
});

module.exports = mongoose.model("bucketListItem", bucketListItem);
