const express = require("express");
const router = express.Router();

const newsApi = require("../scripts/newsApi");

router.post("/", async (req, res) => {
    const {input} = req.body;
    console.log(`Getting results for ${input}`);

    const results = await newsApi.getFromKeyword(input);
    res.json(results);
})

module.exports = router;