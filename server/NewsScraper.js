const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('80a19c30b708487baab04dcaa502d3e4');

const {MongoClient, ServerApiVersion} = require('mongodb');
const url = "mongodb+srv://britneyhu:88888888@newsaggregator.9dqaloe.mongodb.net/?retryWrites=true&w=majority&appName=NewsAggregator";

async function getArticles(){
  // To query top headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
  const articles = await newsapi.v2.topHeadlines({
    sources: 'bbc-news, nbc-news, cnn, google-news, abc-news',
    language: 'en',
    pageSize: 20
  });

  return articles.articles;
} 

// async function main() {
//   const articles = await getArticles();
//   console.log(articles);
// }

// main();

const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function updateMongo(){
  try{
    await client.connect();

    const db = client.db("News");
    const col = db.collection("Articles");

    const articles = await getArticles();
    await col.insertMany(articles);
  }
  catch(err){
    console.log(err);
  }
  finally{
    await client.close();
  }
}

updateMongo();