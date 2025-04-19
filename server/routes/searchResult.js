const express = require("express");
const router = express.Router();

const newsApi = require("../scripts/newsApi");
const mongo = require("../scripts/mongo");

router.post("/", async (req, res) => {
    const {keyword, sortOption, filters} = req.body;
    console.log(`From: Server, Received search request from react (keyword=${keyword} sortOption=${sortOption}, filters=${filters})`)

    if(filters) filters = Object.entries(filters).filter(([key,value])=>value).map(([key])=>key);

    await newsApi.getFromKeyword(keyword);
    results = await mongo.queryMongo(sortOption, filters);
    console.log(`From: Server, Search request completed (searchedArticles=${results.length})`);

    res.json(results);
})

module.exports = router;