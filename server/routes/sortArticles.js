const express = require("express");
const router = express.Router();

const mongo = require("../scripts/mongo");

router.post("/", async (req, res) => {
    let {sortOption, filters} = req.body;
    console.log(`From: Server, Received sort request from react (sortOption=${sortOption}, filters=${filters})`);

    if(filters) filters = Object.entries(filters).filter(([key,value])=>value).map(([key])=>key);

    const results = await mongo.queryMongo(sortOption, filters);
    console.log(`From: Server, Sort request completed (sortedArticles=${results.length}`);
    res.json(results);
})

module.exports = router;