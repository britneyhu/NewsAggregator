const express = require("express");
const router = express.Router();

const mongo = require("../scripts/mongo");

router.post("/", async (req, res) => {
    let {option} = req.body;
    if(option === "Most recent") option = "publishedAt";
    else if(option === "Source") option = "source.name";
    else if(option == "Alphabetical") option = "title";
    else return;

    const results = await mongo.sortMongo(option);
    res.json(results);
})

module.exports = router;