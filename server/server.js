const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
const landingPage = require("./routes/landingPage");
const searchResult = require("./routes/searchResult");
const sortArticles = require("./routes/sortArticles");

app.use(express.json());
app.use(cors());

app.use("/landingPage", landingPage);
app.use("/searchResult", searchResult);
app.use("/sortArticles", sortArticles);


//starts express server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});