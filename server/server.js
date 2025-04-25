//Main entry point for Express server

const express = require("express");
const cors = require("cors");
const cron = require('node-cron');
const newsApi = require("./scripts/newsApi");

const landingPage = require("./routes/landingPage");
const searchResult = require("./routes/searchResult");
const sortAndFilter = require("./routes/sortAndFilter");
const ping = require("./routes/ping");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

//Defines API routes
app.use("/landingPage", landingPage);
app.use("/searchResult", searchResult);
app.use("/sortAndFilter", sortAndFilter);
app.use("/ping", ping);

//Runs scheduled cron job to fetch daily top headlines at 6:00am
cron.schedule('0 6 * * *', async()=>{
    console.log("Getting today's top headlines");
    try{
        newsApi.getTopHeadlines();
    }
    catch(error){
        console.log(error);
    }
}, {
    timezone: "America/Los_Angeles"
});


//starts express server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});