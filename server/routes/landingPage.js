const express = require("express");
const router = express.Router();

const newsScraper = require("../scripts/NewsScraper");

router.get("/", async (req, res) => {
    const results = await newsScraper.getTopHeadlines();
    res.json(results);
})

module.exports = router;