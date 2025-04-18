const express = require("express");
const router = express.Router();

const mongo = require("../scripts/mongo");

router.post("/", async (req, res) => {
    let {filters, sortOption} = req.body;

    str = Object.entries(filters).filter(([key,value])=>value).map(([key])=>key);

    const results = await mongo.filterMongo(str, sortOption);
    // console.log(str, sortOption);
    // console.log(results);
    res.json(results);
})

module.exports = router;