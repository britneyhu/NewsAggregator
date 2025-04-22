const express = require("express");
const router = express.Router();

const mongo = require("../scripts/mongo");

router.post("/", async (req, res) => {
    let {sortOption, filters} = req.body;
    console.log(`From: Server, Received filter request from react (sortOption=${sortOption}, filters=${filters})`);

    if(sortOption === "Most recent") sortOption = "publishedAt";
    else if(sortOption === "Source") sortOption = "source.name";
    else if(sortOption == "Alphabetical") sortOption = "title";
    else sortOption = "";

    if(filters) filters = Object.entries(filters).filter(([key,value])=>value).map(([key])=>key);

    const results = await mongo.queryMongo("Articles", sortOption, filters);
    console.log(`From: Server, Filter request completed (filteredArticles=${results.length}`)

    res.json(results);
})

module.exports = router;