const express = require("express");
const router = express.Router();

const newsScraper = require("../scripts/NewsScraper");

router.get("/", async (req, res) => {
    await newsScraper.updateMongo();
    const results = await newsScraper.queryMongo();
    res.json(results);
})

module.exports = router;