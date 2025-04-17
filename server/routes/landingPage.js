const express = require("express");
const router = express.Router();

const newsApi = require("../scripts/newsApi");

router.get("/", async (req, res) => {
    const results = await newsApi.getTopHeadlines();
    res.json(results);
})

module.exports = router;