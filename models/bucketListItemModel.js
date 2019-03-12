const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let bucketListItem = new Schema({
  itemOnList: { type: String },
  status: { type: String },
  dateCreated: { type: Date },
  completed: { type: Boolean }
});

module.exports = mongoose.model("bucketListItem", bucketListItem);
