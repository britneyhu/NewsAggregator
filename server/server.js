const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
const newsRoute = require("./routes/news");

app.use(express.json());
app.use(cors());

app.use("/news/update", newsRoute);

//starts express server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});