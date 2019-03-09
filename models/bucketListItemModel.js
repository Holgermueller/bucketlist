const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bucketListItems = new Schema({
  itemOnList: { type: String, required: true },
  status: { type: String, required: true },
  dateCreated: { type: Date, required: true },
  completed: { type: Boolean, required: true }
});

module.exports = mongoose.model("bucketListItems", bucketListItemsSchema);
