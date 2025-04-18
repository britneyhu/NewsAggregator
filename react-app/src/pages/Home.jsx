import React, {useState, useEffect} from "react";
import BackButton from "../components/BackButton";
import NewsCard from "../components/NewsCard";
import NavBar from "../components/NavBar";
import Filters from "../components/Filters";
import SortSelector from '../components/SortSelector';

function Home(){
    const [articles, setArticles] = useState([]);
    const [pageTitle, setPageTitle] = useState("");
    const [filters, setFilters] = useState({'BBC News': true, 'ABC News': true});

    const sources = ["BBC News", "ABC News"];

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

    const handleFilterUpdate = (event)=>{
        const {checked, id} = event.target;
        setFilters((prev)=>({
            ...prev,
            [id]: checked
        }));
    }

    useEffect(() => {
        handleUpdate();
    }, []);

//handle filter updates here because of asyncronous setState
    useEffect(()=>{
        const filterRequestHelper = async (filters)=>{
            const RESPONSE = await fetch("http://localhost:5000/updateFilter", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({filters})
            });

            const DATA = await RESPONSE.json();
            setArticles(DATA);
        }

        console.log(filters);
        filterRequestHelper(filters);

    }, [filters]);

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
                        <Filters filters={sources} filterUpdate={handleFilterUpdate} currentFilters={filters}/>
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