const mongo = require("./mongo");

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('80a19c30b708487baab04dcaa502d3e4');

//retrieves topheadline articles from newsapi, updates mongodb, returns articles from mongodb
async function getTopHeadlines(){
  const articles = await newsapi.v2.topHeadlines({
    language: "en"
  });

  return articles.articles;
} 

//retrieves articles given keyword newsapi, updates mongodb, returns articles from mongodb
async function getFromKeyword(keyword){
  const articles = await newsapi.v2.everything({
    q: keyword,
    language: 'en',
    sortBy: 'relevancy'
  });

  await mongo.updateMongo(articles.articles);
  return articles.articles;
}

// testing
// (async ()=> {
//   const result = await getFromKeyword("trump");
//   console.log(result);
// })();

module.exports = {getTopHeadlines, getFromKeyword};