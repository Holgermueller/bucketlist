const mongoose = require('mongoose');
const AllItems = require('../models/bucketListItemModel');

module.exports = {
  load_all_items: (req, res) => {
    AllItems.findAll({
      _id: req.params.itemid
    }).sort({date: -1})
    .then(dbModel => res.json(dbModel))
    .catch( err => res.status(422).json(err));
  }
};