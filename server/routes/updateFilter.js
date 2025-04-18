const express = require("express");
const router = express.Router();

const mongo = require("../scripts/mongo");

router.post("/", async (req, res) => {
    let {filters} = req.body;

    str = Object.entries(filters).filter(([key,value])=>value).map(([key])=>key);

    const results = await mongo.filterMongo(str);
    console.log(str);
    console.log(results);
    res.json(results);
})

module.exports = router;