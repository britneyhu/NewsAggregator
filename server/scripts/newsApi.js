//Scripts for interacting with NewsAPI

const mongo = require("./mongo");
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('80a19c30b708487baab04dcaa502d3e4');

//Fetches top headlines from NewsAPI, updates mongodb
async function getTopHeadlines(){
  const articles = await newsapi.v2.topHeadlines({
    language: "en"
  });

  await mongo.updateMongo("Top-Headlines", articles.articles);
} 

//Fetches articles given a keyword from NewsAPI, updates mongodb, returns articles
async function getFromKeyword(keyword){
  const articles = await newsapi.v2.everything({
    q: keyword,
    language: 'en',
    sortBy: 'relevancy'
  });

  await mongo.updateMongo("Articles", articles.articles);
  return articles.articles;
}

// testing function
// (async ()=> {
// //   const result = await getFromKeyword("trump");
// //   console.log(result);
//     const result = await newsapi.v2.sources({language:'en'});
//     const sourceNames = result.sources.map((source) => source.name);
//     console.log(sourceNames);
// })();

module.exports = {getTopHeadlines, getFromKeyword};