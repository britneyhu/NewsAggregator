const axios = require('axios');

const apiKey = '80a19c30b708487baab04dcaa502d3e4';
const url = `https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`;


async function getNewsArticles(){
    const response = await axios.get(url);
    const articles = response.data.sources;

    for(let article of articles){
        console.log(article.name);
        console.log(article.description);
        console.log(article.url);
    }
}

(async()=>{
    await getNewsArticles();
})();