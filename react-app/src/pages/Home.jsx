import React, {useState, useEffect} from "react";
import BackButton from "../components/BackButton";
import NewsCard from "../components/NewsCard";
import NavBar from "../components/NavBar";
import Filters from "../components/Filters";
import SortSelector from '../components/SortSelector';

function Home(){
    const [articles, setArticles] = useState([]);
    const [pageTitle, setPageTitle] = useState("Latest News");
    const [filters, setFilters] = useState({"ABC News":true,"ABC News (AU)":true,"Al Jazeera English":true,"Ars Technica":true,"Associated Press":true,"Australian Financial Review":true,"Axios":true,"BBC News":true,"BBC Sport":true,"Bleacher Report":true,"Bloomberg":true,"Breitbart News":true,"Business Insider":true,"Buzzfeed":true,"CBC News":true,"CBS News":true,"CNN":true,"Crypto Coins News":true,"Engadget":true,"Entertainment Weekly":true,"ESPN":true,"ESPN Cric Info":true,"Financial Post":true,"Football Italia":true,"Fortune":true,"FourFourTwo":true,"Fox News":true,"Fox Sports":true,"Google News":true,"Google News (Australia)":true,"Google News (Canada)":true,"Google News (India)":true,"Google News (UK)":true,"Hacker News":true,"IGN":true,"Independent":true,"Mashable":true,"Medical News Today":true,"MSNBC":true,"MTV News":true,"MTV News (UK)":true,"National Geographic":true,"National Review":true,"NBC News":true,"News24":true,"New Scientist":true,"News.com.au":true,"Newsweek":true,"New York Magazine":true,"Next Big Future":true,"NFL News":true,"NHL News":true,"Politico":true,"Polygon":true,"Recode":true,"Reddit /r/all":true,"Reuters":true,"RTE":true,"TalkSport":true,"TechCrunch":true,"TechRadar":true,"The American Conservative":true,"The Globe And Mail":true,"The Hill":true,"The Hindu":true,"The Huffington Post":true,"The Irish Times":true,"The Jerusalem Post":true,"The Lad Bible":true,"The Next Web":true,"The Sport Bible":true,"The Times of India":true,"The Verge":true,"The Wall Street Journal":true,"The Washington Post":true,"The Washington Times":true,"Time":true,"USA Today":true,"Vice News":true,"Wired":true});
    const [sortOption, setSortOption] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    const sources = [
        'ABC News','ABC News (AU)','Al Jazeera English','Ars Technica','Associated Press','Australian Financial Review',
        'Axios','BBC News','BBC Sport','Bleacher Report','Bloomberg','Breitbart News','Business Insider','Buzzfeed','CBC News',
        'CBS News','CNN','Crypto Coins News','Engadget','Entertainment Weekly','ESPN','ESPN Cric Info','Financial Post',
        'Football Italia','Fortune','FourFourTwo','Fox News','Fox Sports','Google News','Google News (Australia)',
        'Google News (Canada)','Google News (India)','Google News (UK)','Hacker News','IGN','Independent','Mashable',
        'Medical News Today','MSNBC','MTV News','MTV News (UK)','National Geographic','National Review','NBC News',
        'News24','New Scientist','News.com.au','Newsweek','New York Magazine','Next Big Future','NFL News','NHL News','Politico',
        'Polygon','Recode','Reddit /r/all','Reuters','RTE','TalkSport','TechCrunch','TechRadar','The American Conservative',
        'The Globe And Mail','The Hill','The Hindu','The Huffington Post','The Irish Times','The Jerusalem Post','The Lad Bible',
        'The Next Web','The Sport Bible','The Times of India','The Verge','The Wall Street Journal','The Washington Post',
        'The Washington Times','Time','USA Today','Vice News','Wired'
    ];

    const handleHomeClick = async ()=>{
        console.log("From: React, sending home click request to server");

        const RESPONSE = await fetch("http://localhost:5000/landingPage");
        const DATA = await RESPONSE.json();

        console.log(`From: React, received top headlines from server (Data=${DATA.length}`);

        setArticles(DATA);
        setPageTitle("Latest News");
    }

    const handleSearchSubmit = async (input, sortOption, filters)=>{
        console.log(`From: React, sending search request to server (keyword=${input}, sortOption=${sortOption}, filters=${filters})`);
        const RESPONSE = await fetch("http://localhost:5000/searchResult", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({keyword: input, sortOption: sortOption, filters: filters})
        });

        const DATA = await RESPONSE.json();
        console.log(`From: React, received searched articles from server (Data=${DATA.length}`);

        setArticles(DATA);
        
        setPageTitle(`Results For: ${input}`);
    };

    const handleSort = async (option)=>{
        setSortOption(option);
    };

    const handleFilterUpdate = (event)=>{
        const {checked, id} = event.target;
        setFilters((prev)=>({
            ...prev,
            [id]: checked
        }));
    }

    // useEffect(() => {
    //     handleUpdate();
    // }, [articles]);
    // useEffect(()=>{
    //     console.log(articles);
    // }, [articles]);

    useEffect(()=>{
        handleHomeClick();
        setIsLoaded(true);
    }, []);

//handle filter and sort updates here because of asyncronous setState
    useEffect(()=>{
        const filterRequestHelper = async (sortOption, filters)=>{
            console.log(`From: React, sending filter request to server (sortOptions=${sortOption}, filters=${filters})`);
            const RESPONSE = await fetch("http://localhost:5000/updateFilter", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({sortOption: sortOption, filters: filters})
            });

            const DATA = await RESPONSE.json();
            console.log(`From: React, received filtered articles from server (Data=${DATA.length})`);

            setArticles(DATA);
        }

        if(isLoaded){
            filterRequestHelper(sortOption, filters);
        }

    }, [filters]);

    useEffect(()=>{
        const sortRequestHelper = async (sortOption, filters)=>{
            console.log(`From: React, sending sort request to server (sortOption=${sortOption}, filters=${filters})`);
    
            const RESPONSE = await fetch("http://localhost:5000/sortArticles", {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({sortOption: sortOption, filters: filters})
            });
    
            const DATA = await RESPONSE.json();

            console.log(`From: React, received sorted articles from server (Data=${DATA.length})`);
    
            setArticles(DATA);
        }

        if(isLoaded){
            sortRequestHelper(sortOption, filters);
        }
        
    }, [sortOption]);

    return(
        <div className="home-body">
          <nav className="sticky-top"><NavBar handleSubmit = {handleSearchSubmit} sortOption={sortOption} filters={filters} handleHomeClick={handleHomeClick} /></nav>
          <div className="container-fluid position-relative pt-4 pb-4">
            <div className="row">
                <div className="col-6">
                    <div className="d-flex justify-content-start">
                        <div className="page-title ps-3">
                            {pageTitle}
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="d-flex justify-content-end">
                        <div className="pe-2">
                            <Filters filters={sources} filterUpdate={handleFilterUpdate} currentFilters={filters}/>
                        </div>
                        <div>
                            <SortSelector titleText="Sort by" options={["Most recent", "Source", "Alphabetical"]} handleSort={handleSort} currentOption={sortOption}/>
                        </div>
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