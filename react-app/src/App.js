import './App.css';
import React, {useState, useEffect} from "react";
import Button from "./components/Button";
import NewsCard from "./components/NewsCard";
import NavBar from "./components/NavBar";
import Filters from "./components/Filters";
import SortSelector from './components/SortSelector';


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
      <div className="sticky-top"><NavBar handleSubmit = {handleSearchSubmit} handleHomeClick={handleUpdate} /></div>
      <div className="position-relative pt-4 pb-4">
        <div className="position-absolute start-50 translate-middle-x" style={{ top: '35%' }}>
          <Filters/>
        </div>
        <div className="position-absolute end-0 translate-middle-y me-4">
          <SortSelector titleText="Sort by"/>
        </div>
      </div>
      <div className="container px-4 text-center">
        <div className="row gx-5">
          <div className="col">
            <div><NewsCard articles = {articles} /></div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default App;
