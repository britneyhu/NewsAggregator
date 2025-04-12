const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('80a19c30b708487baab04dcaa502d3e4');

// To query top headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
    sources: 'bbc-news, nbc-news, cnn, google-news, abc-news',
    language: 'en',
    pageSize: 20
  }).then(response => {
    console.log(response);

    //push each object into database
  });