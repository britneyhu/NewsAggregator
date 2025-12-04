//fetches topheadlines from news api
const newsApi = require("../scripts/newsApi");

//Queries mongodb for top headlines and returns result
exports.handler = async (event, context) => {
    try {
        await newsApi.getTopHeadlines();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "News fetched successfully" })
        }

    }
    catch(err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err.message }),
        }
    }
}