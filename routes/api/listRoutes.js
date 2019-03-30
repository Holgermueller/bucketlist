const router = require("express").Router();
const listController = require("../../controllers/bucketListController");

router.route("/").get(function(req, res) {
  BucketListItem.find(function(err, items) {
    if (err) {
      console.log(err);
    } else {
      res.json(items);
    }
  });
});

router.route("/:id").get(function(req, res) {
  let id = req.params.id;
  BucketListItem.findById(id, function(err, blItem) {
    res.json(blItem);
  });
});

router.route("/add").post(function(req, res) {
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

router.route("/update/:id").post(function(req, res) {
  BucketListItem.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  })
    .then(bucketListItem => res.json(bucketListItem))
    .catch(err => res.status(404).send(err));
});

router.route("/delete/:id").post(function(req, res) {
  BucketListItem.findOneAndRemove({_id: req.params.id}, function(err, blItem){
    if (err) res.send(err);
    else res.json("Removal success.");
  })
})

module.exports = router;