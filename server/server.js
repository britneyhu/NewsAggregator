const express = require("express");
const cors = require("cors");
const cron = require('node-cron');
const newsApi = require("./scripts/newsApi");

const landingPage = require("./routes/landingPage");
const searchResult = require("./routes/searchResult");
const sortArticles = require("./routes/sortArticles");
const updateFilter = require("./routes/updateFilter");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use("/landingPage", landingPage);
app.use("/searchResult", searchResult);
app.use("/sortArticles", sortArticles);
app.use("/updateFilter", updateFilter);

cron.schedule('0 6 * * *', async()=>{
    try{
        newsApi.getTopHeadlines();
    }
    catch(error){
        console.log(error);
    }
});


//starts express server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});