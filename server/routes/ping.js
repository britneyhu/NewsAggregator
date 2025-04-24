//Handles api endpoints related to pinging the render backend

const express = require("express");
const router = express.Router();


router.get("/", async (req, res) => {
    res.send("Backend Pinged");
});


module.exports = router;