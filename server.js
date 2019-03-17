const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const blRoutes = express.Router();
const app = express();
const PORT = process.env.PORT || 3001;

//Import Models
let BucketListItem = require("./models/bucketListItemModel");

app.use(morgan("tiny"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build/index.html"));
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/bucketListDatabase",
  { useNewUrlParser: true }
);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("db connection!");
});

//Routes
blRoutes.route("/").get(function(req, res) {
  BucketListItem.find(function(err, items) {
    if (err) {
      console.log(err);
    } else {
      res.json(items);
    }
  });
});

blRoutes.route("/:id").get(function(req, res) {
  let id = req.params.id;
  BucketListItem.findById(id, function(err, blItem) {
    res.json(blItem);
  });
});

blRoutes.route("/add").post(function(req, res) {
  let bucketListItem = new BucketListItem(req.body);
  bucketListItem
    .save()
    .then(BucketListItem => {
      res.status(200).json({ bucketListItem: "Item addition successful." });
    })
    .catch(err => {
      res.status(400).send("Addition failure.");
      console.log(err)
    });
});

blRoutes.route("/update/:id").post(function(req, res) {
  BucketListItem.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  })
    .then(bucketListItem => res.json(bucketListItem))
    .catch(err => res.status(404).send(err));
});

app.use("/bucketList", blRoutes);

app.listen(PORT, () => {
  console.log(`==> API Server now listening on PORT ${PORT}`);
});
