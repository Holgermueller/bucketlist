const bucketListRouter = require("express").Router();
const bucketListController = "../controllers/bucketlist.js";

bucketListRouter.route("/").get(function(req, res) {
  bucketListController.find(function(err, listItem) {
    err ? console.log(err) : res.json(listItem);
  });
});

bucketListRouter.route("/:id").get(function(req, res) {
  let id = req.params.id;
  bucketListController.findById(id, function(err, listItem) {
    res.json(listItem);
  });
});

bucketListRouter.route("/update/:id").post(function(req, res) {
  bucketListController.findById(req.params.id, function(err, listItem) {
    !listItem
      ? res.status(404).send("No data found.")
      : (listItem.description = req.body.description);

    listItem
      .save()
      .then(listItem => {
        res.json("Updated!");
      })
      .catch(err => {
        res.status(400).send("Update not possible.");
      });
  });
});

bucketListRouter.route('/add').post( function(req, res) {
  let listItem = new listItem(req.body);
  listItem.save()
  .then(listItem => {
    res.status(200).json({'listItem': "Item addition successfual"});
  }).catch(err => {
    res.status(400).send("Addition failure.");
  });
});

module.exports = bucketListRouter;
