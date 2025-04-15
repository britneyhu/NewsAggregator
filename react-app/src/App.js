import './App.css';
import React, {useState, useEffect} from "react";
import Button from "./components/Button";
import NewsCard from "./components/NewsCard";


function App() {
  const [articles, setArticles] = useState([]);

  //fetches articles from mongodb
  const handleUpdate = async ()=>{
    const res = await fetch("http://localhost:5000/news/update");
    const data = await res.json();
    setArticles(data);
  }

  useEffect(() =>{
    handleUpdate();
  }, []);

  return(
    <div>
      <div><Button Text="Button" onSelect = {handleUpdate} /></div>
      <div><NewsCard articles = {articles} /></div>
    </div>
  );
}

export default App;
