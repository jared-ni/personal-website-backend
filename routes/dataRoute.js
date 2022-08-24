const express = require("express");
const router = express.Router();
const Data = require("../models/dataModel");

// 
router.route("/create").post((req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const newNote = new Data({
        title,
        content
    });
    newNote.save();
})

router.route("/datas").get((req, res) => {
    Data.find().then(foundData => res.json(foundData))
});

module.exports = router;