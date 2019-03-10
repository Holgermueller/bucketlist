const mongoose = require("mongoose");
const db = require("../models/bucketListItemModel");

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/bucketListDatabase",
  { useNewUrlParser: true }
);

const bucketListSeed = [
  {
    itemOnList: "Jog on Great Wall",
    status: "",
    dateCreated: new Date(Date.now()),
    completed: false
  },
  {
    itemOnList: "Learn Japanese",
    status: "",
    dateCreated: new Date(Date.now()),
    completed: false
  },
  {
    itemOnList: "Climb Mt. Kilimanjaro",
    status: "",
    dateCreated: new Date(Date.now()),
    completed: false
  },
  {
    itemOnList: "Visit Galapagos Islands",
    status: "",
    dateCreated: new Date(Date.now()),
    completed: false
  }
];

db.bucketListItems
  .remove()
  .then(() => db.bucketListItems.collection.insertMany(bucketListSeed))
  .then(data => {
    console.log("Items inserted");
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
