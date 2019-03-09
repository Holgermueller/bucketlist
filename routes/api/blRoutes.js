const bucketListRouter = require("express").Router();

let BLItem = require("../../models/bucketListItemModel");

bucketListRouter.route("/add").post((req, res) => {
  let blItem = new BLItem(req.body);
  blItem
    .save()
    .then(blItem => {
      res.status(200).json({ item: "item addition successful!" });
    })
    .catch(err => {
      res.status(400).send("Unable to save");
    });
});

module.exports = bucketListRouter;
