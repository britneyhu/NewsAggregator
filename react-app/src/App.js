import './App.css';
import React, {useState, useEffect} from "react";
import Button from "./components/Button";
import NewsCard from "./components/NewsCard";
import NavBar from "./components/NavBar";


function App() {
  const [articles, setArticles] = useState([]);

  //fetches articles from mongodb
  const handleUpdate = async ()=>{
    const RESULT = await fetch("http://localhost:5000/news/update");
    const DATA = await RESULT.json();
    setArticles(DATA);
  }

  const handleSearchSubmit = (input)=>{
    console.log("Input:", input);
  };

  useEffect(() =>{
    handleUpdate();
  }, []);

  return(
    <div>
      <div><NavBar handleSubmit = {handleSearchSubmit} /></div>
      <div><Button text="Update" onSelect = {handleUpdate} /></div>
      <div><NewsCard articles = {articles} /></div>
    </div>
  );
}

export default App;
