import React, {useState, useEffect} from "react";
import BackButton from "../components/BackButton";
import NewsCard from "../components/NewsCard";
import NavBar from "../components/NavBar";
import Filters from "../components/Filters";
import SortSelector from '../components/SortSelector';

function Home(){
    const [articles, setArticles] = useState([]);
    const [pageTitle, setPageTitle] = useState("");

    const handleUpdate = async ()=>{
        const RESPONSE = await fetch("http://localhost:5000/landingPage");
        const DATA = await RESPONSE.json();
        setArticles(DATA);
        setPageTitle("Top Headlines");
    }

    const handleSearchSubmit = async (input)=>{
        const RESPONSE = await fetch("http://localhost:5000/searchResult", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({input})
        });

        const DATA = await RESPONSE.json();
        setArticles(DATA);
        
        setPageTitle(`Search Results for: ${input}`);
    };

    const handleSort = async (option)=>{
        const RESPONSE = await fetch("http://localhost:5000/sortArticles", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({option})
        });

        const DATA = await RESPONSE.json();

        setArticles(DATA);
    };

    useEffect(() => {
        handleUpdate();
    }, []);

    return(
        <div>
          <div className="sticky-top"><NavBar handleSubmit = {handleSearchSubmit} handleHomeClick={handleUpdate} /></div>
          <div className="container-fluid position-relative pt-4 pb-4">
            <div className="row">
                <div className="col-4">
                    <div className="d-flex justify-content-start">
                        {pageTitle}
                    </div>
                </div>
                <div className="col-4">
                    <div className="d-flex justify-content-center">
                        <Filters filters={["Source", "Date"]}/>
                    </div>
                </div>
                <div className="col-4">
                    <div className="d-flex justify-content-end">
                        <SortSelector titleText="Sort by" options={["Most recent", "Source", "Alphabetical"]} handleSort={handleSort}/>
                    </div>
                </div>
            </div>
          </div>
          <div className="back-to-top-button"><BackButton text="Back To Top" /></div>
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

export default Home;