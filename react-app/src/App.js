import './App.css';
import React, {useState, useEffect} from "react";
import Button from "./components/Button";
import NewsCard from "./components/NewsCard";
import NavBar from "./components/NavBar";


function App() {
  const [articles, setArticles] = useState([]);

  const handleUpdate = async ()=>{
    const RESPONSE = await fetch("http://localhost:5000/landingPage");
    const DATA = await RESPONSE.json();
    setArticles(DATA);
  }

  const handleSearchSubmit = async (input)=>{
    const RESPONSE = await fetch("http://localhost:5000/searchResult", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({input})
    });

    input = "";

    const DATA = await RESPONSE.json();
    setArticles(DATA);

  };

  useEffect(() =>{
    handleUpdate();
  }, []);

  return(
    <div>
      <div class="sticky-top"><NavBar handleSubmit = {handleSearchSubmit} handleHomeClick={handleUpdate} /></div>

      <div class="container px-4 text-center">
        <div class="row gx-5">
          <div class="col">
            <div><NewsCard articles = {articles} /></div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default App;
