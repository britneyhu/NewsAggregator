//Handles API endpoints related to search results
const newsApi = require("../scripts/newsApi");
const mongo = require("../scripts/mongo");

//Takes sort option string and converts it to mongodb sort option
const sortOptionName = (sortOptionStr) =>{
    let sortOption = "";

    if(sortOptionStr === "Most recent") sortOption = "publishedAt";
    else if(sortOptionStr === "Source") sortOption = "source.name";
    else if(sortOptionStr == "Alphabetical") sortOption = "title";
    else sortOption = "";

    return sortOption;
}

exports.handler = async(event, context) =>{
    try {
        const { keyword, sortOption, filters } = JSON.parse(event.body);
        console.log(`From: Netlify Function, Received search request from React (keyword=${keyword} sortOption=${sortOption}, filters=${filters})`);

        sortOption = sortOptionName(sortOption);

        if(filters) filters = Object.entries(filters).filter(([key, value]) => value).map(([key]) => key);

        await newsApi.getFromKeyword(keyword);
        results = await mongo.queryMongo("Articles", sortOption, filters);
        console.log(`From: Netlify Function, Search request completed (searchedArticles=${results.length})`);

        return {
            statusCode: 200,
            body: JSON.stringify(results),
        }

    }
    catch(err) {
        console.error(err);

        return{
            statusCode: 500,
            body: JSON.stringify({ error: err.message }),
        }
    }
}