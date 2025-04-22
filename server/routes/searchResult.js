const express = require("express");
const router = express.Router();

const newsApi = require("../scripts/newsApi");
const mongo = require("../scripts/mongo");

router.post("/", async (req, res) => {
    let {keyword, sortOption, filters} = req.body;
    console.log(`From: Server, Received search request from react (keyword=${keyword} sortOption=${sortOption}, filters=${filters})`)

    if(sortOption === "Most recent") sortOption = "publishedAt";
    else if(sortOption === "Source") sortOption = "source.name";
    else if(sortOption == "Alphabetical") sortOption = "title";
    else sortOption = "";

    if(filters) filters = Object.entries(filters).filter(([key,value])=>value).map(([key])=>key);

    await newsApi.getFromKeyword(keyword);
    results = await mongo.queryMongo("Articles", sortOption, filters);
    console.log(`From: Server, Search request completed (searchedArticles=${results.length})`);

    res.json(results);
})

module.exports = router;