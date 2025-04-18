const {MongoClient, ServerApiVersion} = require('mongodb');
const url = "mongodb+srv://britneyhu:88888888@newsaggregator.9dqaloe.mongodb.net/?retryWrites=true&w=majority&appName=NewsAggregator";

//connects to mongodb
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

//delete previous articles updates database with new articles
async function updateMongo(articles){
  const client = await connectMongo();

  try{
    const db = client.db("News");
    const col = db.collection("Articles");

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

async function sortMongo(option){
    const client = await connectMongo();

    try{
        const db = client.db("News");
        const col = db.collection("Articles");

        if(await col.countDocuments() === 0) throw new Error("No articles to sort");

        let result = [];

        if(option == "publishedAt") result = await col.find({}).sort({[option]: -1}).toArray();
        else result = await col.find({}).sort({[option]: 1}).toArray();

        return result;
    }
    catch(error){
        console.log(error);
    }
    finally{
        await client.close();
    }
}

//returns query results from mongo
async function filterMongo(filters, sortOption){
    const client = await connectMongo();
    let result;

    try{
    const db = client.db("News");
    const col = db.collection("Articles");

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

    return result;
    }
    catch(err){
        console.log(err);
    }
    finally{
    await client.close();
    }
}

// testing
// (async ()=> {
//   const result = await sortMongo("source.name");
//   console.log(result);
// })();

module.exports = {updateMongo, sortMongo, filterMongo};