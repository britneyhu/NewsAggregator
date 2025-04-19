const express = require("express");
const router = express.Router();

const mongo = require("../scripts/mongo");

router.post("/", async (req, res) => {
    let {filters, sortOption} = req.body;

    filters = Object.entries(filters).filter(([key,value])=>value).map(([key])=>key);

    const results = await mongo.queryMongo(sortOption, filters);
    // console.log(str, sortOption);
    // console.log(results);
    res.json(results);
})

module.exports = router;