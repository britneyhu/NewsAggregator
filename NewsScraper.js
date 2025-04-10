const { chromium } = require("playwright");

async function scrape(page) {
    console.log("hello world");
}

async function newsScraper() {
    let urls = ["https://www.reuters.com/", "https://www.bbc.com/"];

    let tasks = urls.map(async (url)=>{
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(url);
        scrape(page);
        await browser.close();
    });

    await Promise.all(tasks);

}

(async () => {
  await newsScraper();
})();