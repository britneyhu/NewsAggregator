const express = require("express");
const router = express.Router();

const newsApi = require("../scripts/newsApi");

router.post("/", async (req, res) => {
    const {input} = req.body;

    const results = await newsApi.getFromKeyword(input);
    res.json(results);
})

module.exports = router;