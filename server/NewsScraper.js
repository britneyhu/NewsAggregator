const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('80a19c30b708487baab04dcaa502d3e4');

const {MongoClient, ServerApiVersion} = require('mongodb');
const url = "mongodb+srv://britneyhu:88888888@newsaggregator.9dqaloe.mongodb.net/?retryWrites=true&w=majority&appName=NewsAggregator";

//retrieves articles from newsapi
async function getArticles(){
  const articles = await newsapi.v2.topHeadlines({
    sources: 'bbc-news, nbc-news, cnn, google-news, abc-news',
    language: 'en',
    pageSize: 20
  });

  return articles.articles;
} 

//creates mongoAtlas client
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

//delete previous articles updates database with new articles
async function updateMongo(){
  try{
    await client.connect();

    const db = client.db("News");
    const col = db.collection("Articles");

    await col.deleteMany({});

    const articles = await getArticles();
    // console.log(articles);
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