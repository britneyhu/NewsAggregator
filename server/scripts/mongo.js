//Scripts for interacting with MongoDB

const {MongoClient, ServerApiVersion} = require('mongodb');
const url = "mongodb+srv://britneyhu:88888888@newsaggregator.9dqaloe.mongodb.net/?retryWrites=true&w=majority&appName=NewsAggregator";

//Connects to MongoDB
async function connectMongo(){
  const client = new MongoClient(url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try{
    await client.connect();
    return client;
  }
  catch(err){
    console.log(err);
  }
}

//Deletes previous articles in given collection and updates database with new given articles
async function updateMongo(collection, articles){
  const client = await connectMongo();

  try{
    const db = client.db("News");
    const col = db.collection(collection);

    await col.deleteMany({});
    await col.insertMany(articles);

  }
  catch(err){
    console.log(err);
  }
  finally{
    await client.close();
  }
}

//Queries mongo for articles in a given collection, given sort option, and given filters
async function queryMongo(collection, sortOption, filters){
    const client = await connectMongo();
    let result = [];

    try{
        const db = client.db("News");
        const col = db.collection(collection);

        if(!filters){
            if(sortOption == ""){
                result = await col.find({}).toArray();
            }
            else if(sortOption == "publishedAt"){
                result = await col.find({}).sort({[sortOption]: -1}).toArray();
            }
            else{
                result = await col.find({}).sort({[sortOption]: 1}).toArray();
            }
        }
        else{
            if(sortOption == ""){
                result = await col.find({
                    "source.name": {$in: filters}
                }).toArray();
            }
            else if(sortOption == "publishedAt"){
                result = await col.find({
                    "source.name": {$in: filters}
                }).sort({[sortOption]: -1}).toArray();
            }
            else{
                result = await col.find({
                    "source.name": {$in: filters}
                }).sort({[sortOption]: 1}).toArray();
            }
        }

        return result;
    }
    catch(err){
        console.log(err);
    }
    finally{
    await client.close();
    }
}

// testing function
// (async ()=> {
//   const result = await sortMongo("source.name");
//   console.log(result);
// })();

module.exports = {updateMongo, queryMongo};