const express = require("express");
const router = express.Router();

const mongo = require("../scripts/mongo");

router.get("/", async (req, res) => {
    console.log(`From: Server, Received home click request from react`);
    const results = await mongo.queryMongo("Top-Headlines", "", false);
    console.log(`From: Server, home click request completed (topHeadlines=${results})`);

    res.json(results);
})

module.exports = router;