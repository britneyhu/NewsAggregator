//Handles API endpoints related to search results

const express = require("express");
const router = express.Router();
const newsApi = require("../scripts/newsApi");
const mongo = require("../scripts/mongo");

//Takes sort option string and converts it to mongodb sort option
const sortOptionName = (sortOptionStr) =>{
    let sortOption = "";

    if(sortOptionStr === "Most recent") sortOption = "publishedAt";
    else if(sortOptionStr === "Source") sortOption = "source.name";
    else if(sortOptionStr == "Alphabetical") sortOption = "title";
    else sortOption = "";

    return sortOption;
}

router.post("/", async (req, res) => {
    let {collection, keyword, sortOption, filters} = req.body;
    console.log(`From: Server, Received search request from react (collection=${collection}, keyword=${keyword} sortOption=${sortOption}, filters=${filters})`)

    sortOption = sortOptionName(sortOption);

    if(filters) filters = Object.entries(filters).filter(([key,value])=>value).map(([key])=>key);

    await newsApi.getFromKeyword(keyword);
    results = await mongo.queryMongo(collection, sortOption, filters);
    console.log(`From: Server, Search request completed (searchedArticles=${results.length})`);

    res.json(results);
})

module.exports = router;