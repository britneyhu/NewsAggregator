import './App.css';
import React, {useState, useEffect} from "react";
import Button from "./components/Button";
import NewsCard from "./components/NewsCard";
import NavBar from "./components/NavBar";


function App() {
  const [articles, setArticles] = useState([]);

  //fetches articles from mongodb
  const handleUpdate = async ()=>{
    const res = await fetch("http://localhost:5000/news/update");
    const data = await res.json();
    setArticles(data);
  }

  const handleSearchSubmit = (Input)=>{
    console.log("Input:", Input);
  };

  useEffect(() =>{
    handleUpdate();
  }, []);

  return(
    <div>
      <div><NavBar handleSubmit = {handleSearchSubmit} /></div>
      <div><Button Text="Update" onSelect = {handleUpdate} /></div>
      <div><NewsCard articles = {articles} /></div>
    </div>
  );
}

export default App;
