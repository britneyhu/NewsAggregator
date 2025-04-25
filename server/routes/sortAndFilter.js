//Handles API endpoints related to sorting and filtering

const express = require("express");
const router = express.Router();

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

//Takes sortOption and filters sent from frontend and uses them to query mongo and returns queried articles
router.post("/", async (req, res) => {
    let {collection, sortOption, filters} = req.body;

    console.log(`From: Server, Received sort/filter request from react (collection=${collection}, sortOption=${sortOption}, filters=${filters})`);

    sortOption = sortOptionName(sortOption);
    
    if(filters) filters = Object.entries(filters).filter(([key,value])=>value).map(([key])=>key);

    const results = await mongo.queryMongo(collection, sortOption, filters);

    console.log(`From: Server, Sort/filter request completed (sortedArticles=${results.length}`);

    res.json(results);
})

module.exports = router;