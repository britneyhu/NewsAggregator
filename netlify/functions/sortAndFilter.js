//Handles API endpoints related to sorting and filtering
const mongo = require("../scripts/mongo");

//Takes sort option string and converts it to mongodb sort option
const sortOptionName = (sortOptionStr) =>{
    let sortOption = "";

    if(sortOptionStr === "Most recent") sortOption = "publishedAt";
    else if(sortOptionStr === "Source") sortOption = "source.name";
    else if(sortOptionStr === "Alphabetical") sortOption = "title";
    else sortOption = "";

    return sortOption;
}

//Takes sortOption and filters sent from frontend and uses them to query mongo and returns queried articles
exports.handler = async (event, context) =>{
    try {
        let {collection, sortOption, filters} = JSON.parse(event.body);

        console.log(`From: Netlify Function, Received sort/filter request from React (collection=${collection}, sortOption=${sortOption}, filters=${filters})`);

        sortOption = sortOptionName(sortOption);
        
        if(filters) filters = Object.entries(filters).filter(([key,value])=>value).map(([key])=>key);

        const results = await mongo.queryMongo(collection, sortOption, filters);

        console.log(`From: Netlify Function, Sort/filter request completed (sortedArticles=${results.length}`);

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