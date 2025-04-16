const express = require("express");
const router = express.Router();

const newsScraper = require("../scripts/NewsScraper");

router.post("/", async (req, res) => {
    const {input} = req.body;
    const results = await newsScraper.getFromKeyword(input);
    res.json(results);
})

module.exports = router;