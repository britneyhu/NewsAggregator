import './App.css';
import Button from "./components/Button";
import NewsCard from "./components/NewsCard";

const testArticles = [
  {
    source: { id: 'bbc-news', name: 'BBC News' },
    author: 'BBC News',
    title: 'Saturday Night Live UK: Can the legendary US comedy show make Brits laugh?',
    description: 'A planned UK version of the legendary US comedy show is described as a "difficult proposition".',
    url: 'https://www.bbc.co.uk/news/articles/c3dk4r5j487o',
    urlToImage: 'https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/625f/live/c73ee7a0-17ea-11f0-8a1e-3ff815141b98.jpg',
    publishedAt: '2025-04-13T01:07:29.0083871Z',
    content: `"If Sky get this right, they'll create new stars and from that they can spin-off other shows with those performers," he explains. "These shows can be fantastic, they can go on for years, and they can… [+995 chars]`
  },
  {
    source: { id: 'bbc-news', name: 'BBC News' },
    author: 'BBC News',
    title: 'Rail minister admits using phone while driving vintage bus in London',
    description: 'Lord Hendy has apologised in full for the "error of judgement" and will reportedly accept the sanctions.',
    url: 'https://www.bbc.co.uk/news/articles/c24qv74nzq2o',
    urlToImage: 'https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/d872/live/09153d40-17e2-11f0-8a1e-3ff815141b98.jpg',
    publishedAt: '2025-04-13T01:07:27.5063739Z',
    content: 'The incident took place on 28 March during the evening rush hour. Lord Hendy was texting a friend about a prostate cancer test.\r\n' +
      'He had been giving a tour in the bus, which he owns, as part of a fund… [+1191 chars]'
  },
  {
    source: { id: 'cnn', name: 'CNN' },
    author: 'Jacob Lev, Don Riddell',
    title: '‘He’s out of his mind right now’: Rory McIlroy blazes to historic third round lead at the Masters',
    description: 'Rory McIlroy’s historic quick start pulled him into the lead early and he did not look back. However, a showdown with Bryson DeChambeau looms on Sunday with a first career Masters win on the line.',
    url: 'https://www.cnn.com/2025/04/12/sport/rory-mcilroy-bryson-dechambeau-masters-spt/index.html',
    urlToImage: 'https://media.cnn.com/api/v1/images/stellar/prod/masters-gettyimages-2209960027.jpg?c=16x9&q=w_800,c_fill',
    publishedAt: '2025-04-13T00:16:17Z',
    content: 'As CBS commentator Jim Nantz rightly stated during Saturdays third round coverage of the Masters from Augusta National, Rory McIlroywas playing out of his mind as he quickly jumped into sole possessi… [+4875 chars]'
  },
  {
    source: { id: 'google-news', name: 'Google News' },
    author: null,
    title: 'Google News',
    description: 'Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.',
    url: 'https://news.google.com/rss/articles/CBMiWkFVX3lxTE41Z2E4VjdVZzdGUjd3cThsLXhvdzdvc2R0ZXZvOVdBbHdoT0E0bmhqUHV0SGVqbmdfOExHWEQyMWFIUmF6T1ZWVGx3Um4yQ3pibUEza2EwUC1Ud9IBX0FVX3lxTE9pcWlVcU1GMHMzQXgxb3JTTVBtUl8ybUt6ZWlscWZ1Q1FNODRITWk2cGJQQVVtS1ZsREVqd0IwMWU1R1FhZUVkVnlpa0NaNG5DV3BrQ00yYmJmMVBWLWc4',
    urlToImage: 'https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw',
    publishedAt: '2025-04-13T00:12:16+00:00',
    content: 'Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.'
  },
  {
    source: { id: 'bbc-news', name: 'BBC News' },
    author: 'BBC News',
    title: 'Chris Mason: As British Steel law rushed by ministers, officials waited in Scunthorpe hotel',
    description: "For all of Saturday's drama, the government's intervention so far is just a stop gap, writes our political editor.",
    url: 'https://www.bbc.co.uk/news/articles/c230g09lvv9o',
    urlToImage: 'https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/31e6/live/a1878b10-17f0-11f0-a455-cf1d5f751d2f.jpg',
    publishedAt: '2025-04-13T00:07:21.3345369Z',
    content: "If the Chinese parent company don't quibble with this desire, if it comes about, it could happen without further legislation.\r\n" +
      'But if they did, another new law would be needed.\r\n' +
      'The prime minister ha… [+675 chars]'
  },
  {
    source: { id: 'bbc-news', name: 'BBC News' },
    author: 'BBC News',
    title: 'Worksop explosion: Major incident after house destroyed and people evacuated',
    description: 'Nottinghamshire Police, the fire service and ambulances will be at the scene overnight.',
    url: 'https://www.bbc.co.uk/news/articles/ce3q700xnw5o',
    urlToImage: 'https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/3542/live/d9b19520-17ec-11f0-a455-cf1d5f751d2f.jpg',
    publishedAt: '2025-04-12T23:37:22.7563074Z',
    content: 'Fire crews from Warsop, Worksop and Mansfield Fire Station as well as Clowne Fire Station are also in attendance.\r\n' +
      'Ch Insp Neil Humphris said: "This is a major incident and emergency services will re… [+440 chars]'
  },
  {
    source: { id: 'bbc-news', name: 'BBC News' },
    author: 'BBC News',
    title: "Newspaper headlines: 'Ring of steel' and 'King will not slow down'",
    description: "An emergency law handing control of British Steel to the government dominates Sunday's front pages.",
    url: 'https://www.bbc.co.uk/news/articles/c9verymw39zo',
    urlToImage: 'https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/c515/live/92bb0990-17eb-11f0-b1b3-7358f8d35a35.jpg',
    publishedAt: '2025-04-12T23:37:19.0228611Z',
    content: `Image caption, "Ring of steel" is how the Sunday Mirror characterises an emergency law passed on Saturday giving the UK government control of British Steel's Scunthorpe plant, and saving it from clos… [+235 chars]`
  },
  {
    source: { id: 'cnn', name: 'CNN' },
    author: 'Alaa Elassar',
    title: '2 US-bound flights from Mexico stuck on tarmac for hours after being diverted to Alabama airport without customs staff',
    description: 'Nearly 300 passengers on board two international flights heading to Atlanta on Thursday were stuck for hours on an Alabama tarmac after their flights were diverted, amid severe weather, to a small airport without Customs and Border Protection staffing.',
    url: 'https://www.cnn.com/2025/04/12/us/alabama-mexico-delta-flight-passengers/index.html',
    urlToImage: 'https://media.cnn.com/api/v1/images/stellar/prod/screen-shot-2025-04-12-at-5-59-27-pm.jpg?c=16x9&q=w_800,c_fill',
    publishedAt: '2025-04-12T23:02:30Z',
    content: 'Nearly 300 passengers on board two international flights heading to Atlanta on Thursday were stuck for hours on an Alabama tarmac after their flights were diverted, amid severe weather, to a small ai… [+3172 chars]'
  },
  {
    source: { id: 'bbc-news', name: 'BBC News' },
    author: 'BBC News',
    title: 'Liberal Democrat MP Wera Hobhouse refused entry to Hong Kong',
    description: 'Party leader Sir Ed Davey urges the foreign secretary to summon the Chinese ambassador for an explanation.',
    url: 'https://www.bbc.co.uk/news/articles/cj6817zlglwo',
    urlToImage: 'https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/d64d/live/872941b0-17db-11f0-a28f-15438e6eef16.jpg',
    publishedAt: '2025-04-12T22:52:21.4752129Z',
    content: '"We are sure you will agree that this is a deeply concerning situation," Sir Ed wrote in the letter seen by BBC News. \r\n' +
      '"The UK cannot allow the Chinese government to attempt to undermine our democra… [+1471 chars]'
  },
  {
    source: { id: 'bbc-news', name: 'BBC News' },
    author: 'BBC News',
    title: "Celebrity Big Brother: Mickey Rourke leaves over 'unacceptable behaviour'",
    description: 'The Hollywood actor was formally warned by the show earlier this week over "offensive" language he had used.',
    url: 'https://www.bbc.co.uk/news/articles/cwynegdv09eo',
    urlToImage: 'https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/a026/live/33224940-17e5-11f0-8a1e-3ff815141b98.jpg',
    publishedAt: '2025-04-12T22:52:20.6785368Z',
    content: 'The Oscar-nominated star entered the ITV reality show on Monday alongside TV and social media personality Siwa, Hughes and 10 other celebrities.\r\n' +
      'According to a transcript released by ITV ahead of We… [+630 chars]'
  },
  {
    source: { id: 'google-news', name: 'Google News' },
    author: null,
    title: 'Google News',
    description: 'Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.',
    url: 'https://news.google.com/rss/articles/CBMimAFBVV95cUxQcWstanJjdjBTcVMwV0gweXRkdHJ0SzNuakF1ZGRPM1NmOGR6cmhMZEF5dFpLZElqWUNNMEstdHFKUTBvX1A2YWhqU0tscHRDVzFyQVVqd0xIR2J2WUVyUGZHMXpxN0RzdHRGQS1IelFJX3NVTXJhTjlkVHVja2pid1o4R1hJQW1WLWlwcGJHcGRiWl96NUY5Uw',
    urlToImage: 'https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300',
    publishedAt: '2025-04-12T22:47:00+00:00',
    content: 'Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.'
  },
  {
    source: { id: 'google-news', name: 'Google News' },
    author: null,
    title: 'Google News',
    description: 'Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.',
    url: 'https://news.google.com/rss/articles/CBMiwwFBVV95cUxPV3RUcEUyUHJzN292WERxUFVtVm00aU0zeHBKUUZaWFZiQ3VQS3gtZEstVmJHLXlJSXQ1cVdTYk5DUjZXYVBuc05ZWHU0Z2RTTTltNkxnTXFSd1V3ZXE5aXctUkRmSzF5LTk5aFdRdEM2eEQ1YVR6NHl3bVU2MFh0akJuc2E4b1dUWkNZY3R5WTFvRDk4TGZDVXljZlNzSnlkNlZvd2FkZjFyRmZSWFRQbno2NVhvb2tYd0s5ZzBEQTRPLUk',
    urlToImage: 'https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw',
    publishedAt: '2025-04-12T22:17:19+00:00',
    content: 'Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.'
  },
  {
    source: { id: 'bbc-news', name: 'BBC News' },
    author: 'BBC News',
    title: 'Ambassador does not deny Russia is tracking UK nuclear subs with sensors',
    description: "Andrei Kelin tells the BBC's Laura Kuenssberg he does not deny accusations of attempting to spy on UK nuclear submarine fleet.",
    url: 'https://www.bbc.co.uk/news/articles/c5yl2729nmjo',
    urlToImage: 'https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/7092/live/536b8180-17d6-11f0-a9cc-953c9ac9dfec.jpg',
    publishedAt: '2025-04-12T21:37:23.0706628Z',
    content: 'The British military discovered the existence of the devices and deemed them a potential threat to national security, the paper reported.\r\n' +
      'The devices have been characterised as being part of a hybri… [+2052 chars]'
  },
  {
    source: { id: 'cnn', name: 'CNN' },
    author: null,
    title: 'Autistic teen shot by Idaho police dies after being removed from life support',
    description: 'An autistic, nonverbal teenage boy who was shot repeatedly by Idaho police from the other side of a chain-link fence while he was holding a knife died Saturday after being removed from life support, his family said.',
    url: 'https://www.cnn.com/2025/04/12/us/autistic-teen-idaho-police-shooting-dies/index.html',
    urlToImage: 'https://media.cnn.com/api/v1/images/stellar/prod/xap25098811205085.jpg?c=16x9&q=w_800,c_fill',
    publishedAt: '2025-04-12T21:07:28Z',
    content: 'An autistic, nonverbal teenage boy who was shot repeatedly by Idaho police from the other side of a chain-link fence while he was holding a knife died Saturday after being removed from life support, … [+2661 chars]'
  },
  {
    source: { id: 'google-news', name: 'Google News' },
    author: null,
    title: 'Google News',
    description: 'Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.',
    url: 'https://news.google.com/rss/articles/CBMikAFBVV95cUxQY3RaWl9ndzFEYjZVNmpld1R1Sl9vZjZ6ZjdwSW1zTHQ4THg0NTJBdTJUS2tScUxWMEhZMXU2QU1VRzktR2FiOVFkb3c1OGVjd2pIT1Z0TkRydWw1NkNLb3c3M2g2MnVUSzVjeXJ1UU9zSC03dWdoY29vcXB6QzJQbHctMUxOaEhCRk1VNDNLNkU',
    urlToImage: 'https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw',
    publishedAt: '2025-04-12T21:06:00+00:00',
    content: 'Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.'
  },
  {
    source: { id: 'nbc-news', name: 'NBC News' },
    author: 'Maya Eaglin, Rebecca Cohen',
    title: "'They left together': Family member of Hudson River helicopter crash victims speaks out",
    description: 'The brother of Merce Camprubi Montal, the young wife and mother who died in this week’s New York City helicopter crash along with four other family members and the pilot, threw flowers into the mist-covered Hudson River on Saturday to honor the victims.',
    url: 'https://www.nbcnews.com/news/us-news/hudson-river-helicopter-crash-family-members-rcna201007',
    urlToImage: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-04/250412-helicopter-ch-1514-14d4ed.jpg',
    publishedAt: '2025-04-12T21:00:26Z',
    content: 'The brother of Merce Camprubi Montal, the young wife and mother who died in this weeks New York City helicopter crash along with four other family members and the pilot, threw flowers into the mist-c… [+2867 chars]'
  },
  {
    source: { id: 'nbc-news', name: 'NBC News' },
    author: 'Matt Lavietes',
    title: 'North Carolina flu-related deaths at all-time high',
    description: 'North Carolina has reported a record number of flu deaths this respiratory virus season, health officials said this week.',
    url: 'https://www.nbcnews.com/news/us-news/north-carolina-flu-related-deaths-all-time-high-rcna201003',
    urlToImage: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-09/240803-flu-shot-ch-1255-e66ad1.jpg',
    publishedAt: '2025-04-12T20:26:42Z',
    content: 'North Carolina has reported a record number of flu deaths this respiratory virus season, health officials said this week.\r\n' +
      'More than 500 flu-related deaths were reported for the 2024-25 respiratory v… [+2051 chars]'
  },
  {
    source: { id: 'nbc-news', name: 'NBC News' },
    author: 'Viola Flowers',
    title: "Patsy Cline's 'Lost Recordings' released 60 years after her death",
    description: 'More than 60 years after her tragic death, country music legend Patsy Cline still has more to share with the world after never-before-released recordings of the iconic star were discovered in a basement.',
    url: 'https://www.nbcnews.com/pop-culture/pop-culture-news/patsy-clines-lost-recordings-released-rcna200997',
    urlToImage: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-04/250412-Patsy-Cline-ch-1354-a86a69.jpg',
    publishedAt: '2025-04-12T19:54:17Z',
    content: 'More than 60 years after her tragic death, country music legend Patsy Cline still has more to share with the world after never-before-released recordings of the iconic star were discovered in a basem… [+2581 chars]'
  },
  {
    source: { id: 'google-news', name: 'Google News' },
    author: null,
    title: 'Google News',
    description: 'Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.',
    url: 'https://news.google.com/rss/articles/CBMiggJBVV95cUxNLURMZmFUejhnUUdWV1gwaExla1FlYk56UV8yTS1Qc3d2OTk1VnJLeWxJQTEwWVRrWV9pUE54VWE3U0xpOFBaNFRvY2JoRU9ONTktWDdoUHVZYTEyTFNBSEFqN2lsanA5RnpkR3RMTmlmbURGeDhOaUctaWNGM2ZtX2dqZEszODVXeTZqWnhMM3AyakEtdGh3QzZrT0Y5b0lGX0ZBbXpMYlMwTTB3d0xjSzEwU2ZLYUxySjlUN3RfQUZ1THA2aU9ZX1JlZ0VObnFodlFGbGNkeTlXTDZQbzNmY0pTRGVmZUVoT0k1cC1hcTBkVnY4akZSOXkwOTQ1ODJWbnfSAYcCQVVfeXFMUFpzY29Kano3Ui1SWlZxcHRZSHc4MTAwdnRRM1BEQUViLTVXMHp4aWp3TEhVNFlPUE1hMVFudEU5NXpMMUpsZW9MTUhhOFo1SVpNV1E0OG9JYTJBX3IwZUhUbW0wNklIVlVKWC1xMVZtNnFNYjZkMkxMYk8wOEJNN3hvbUZHTDJKZE80Ny1URTJfa3diWTFJR0pMM0UxSV8yaXExUWo0dm1OUWVOS1YzM2dyZXZXcEIwaEVUbnJadTd4cnFISFEtUGxrNi1ITWIxMFNQY1hnYS1Ud08yLVZYVC1pdE1OazRiZ1pCd3NkTTlTeWZhN2tGTDUyMzE2bXYxUUxGTi1XNTg',
    urlToImage: 'https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw',
    publishedAt: '2025-04-12T19:10:00+00:00',
    content: 'Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.'
  },
  {
    source: { id: 'nbc-news', name: 'NBC News' },
    author: 'Michael Wayland, CNBC',
    title: 'Trump’s ongoing 25% auto tariffs expected to cut sales by millions, cost $100 billion',
    description: 'DETROIT — As President Donald Trump’s 25% tariffs on imported vehicles remain in effect despite a pullback this week on other country-based levies, analysts are expecting massive global implications for the automotive industry due to the policies.',
    url: 'https://www.nbcnews.com/news/us-news/trump-tariffs-auto-industry-costs-rising-rcna201005',
    urlToImage: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-04/250412-vehicle-assembly-ch-1446-6e7c8d.jpg',
    publishedAt: '2025-04-12T18:51:53Z',
    content: 'DETROIT As President Donald Trumps 25% tariffs on imported vehicles remain in effect despite a pullback this week on other country-based levies, analysts are expecting massive global implications for… [+4636 chars]'
  }
];


function App() {
  const handleUpdate = async ()=>{
    const res = await fetch("http://localhost:5000/news/update");
    const data = await res.json();
    console.log(data);
  }

  return(
    <div>
      <div><Button Text="Button" onSelect = {handleUpdate} /></div>
      <div><NewsCard articles = {testArticles} /></div>
    </div>
  );
}

export default App;
