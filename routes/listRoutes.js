const blRoutes = require("express").Router();
let BucketListItem = require("../models/bucketListItemModel");

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

blRoutes.route("/delete/:id").post(function(req, res) {
  BucketListItem.deleteOne({_id: req.params.id}, function(err, blItem){
    if (err) res.send(err);
    else res.json("Removal success.");
  })
})

module.exports = blRoutes;