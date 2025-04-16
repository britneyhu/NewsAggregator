const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
const landingPage = require("./routes/landingPage");

app.use(express.json());
app.use(cors());

app.use("/landingPage", landingPage);

//starts express server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});