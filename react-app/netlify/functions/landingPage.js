//Handles api endpoints related to loading top headlines
const mongo = require("../scripts/mongo");

//Queries mongodb for top headlines and returns result
exports.handler = async (event, context) => {
    try {
        console.log(`From: Netlify Function, Received home click request from React`);
        const results = await mongo.queryMongo("Top-Headlines", "", false);
        console.log(`From: Netlify Function, home click request completed (topHeadlines=${results.length})`);

        return {
            statusCode: 200,
            body: JSON.stringify(results),
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