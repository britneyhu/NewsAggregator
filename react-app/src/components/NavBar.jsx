//Component for nav bar

import {useState} from "react";

//Component takes handleSubmit (func) to pass search input to home.jsx, handleHomeClick (func) to send load top headlines request to home.jsx, sortOption (arr) for current sortOption, and filters (arr) for current filters
function NavBar({handleSubmit, handleHomeClick, sortOption, filters}){
    const [input, setInput] = useState("");

    //changes input to what is currently in the search bar
    const handleInputChange = (event)=>{
        setInput(event.target.value);
    };

    //sends current input, sortOption, and filters to home.jsx and sets input to empty string
    const handleSearchSubmit = (event)=>{
        event.preventDefault();
        if(input.trim().length === 0){
            setInput("");
            return;
        }
        handleSubmit(input, sortOption, filters);
        setInput("");
    }

    return (
        <nav className="navbar bg-body-tertiary custom-navbar pb-2 pt-2">
            <div className="container-fluid d-flex">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src="\newspaperIcon.png" alt="Logo" width="100" height="100" className="d-inline-block me-4" onClick = {handleHomeClick}/>
                    <div className="ms-3 d-flex flex-column justify-content-center">
                        <span className="logo-title">News</span>
                        <span className="logo-title">Aggregator</span>
                    </div>
                    
                </a>
                <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
                    <input 
                        className="form-control search-box me-2" 
                        type="search" 
                        placeholder="Search a topic..." 
                        aria-label="Search"
                        value = {input}
                        onChange = {handleInputChange}
                    />
                    <button 
                        className="btn btn-outline-success search-button" 
                        type="submit" 
                        >Search</button>
                </form>
            </div>
        </nav>
    ); 
}


//<span className="text-center fw-medium" style = {{fontFamily: "Courier New", fontSize: "3rem"}}>News Aggregator</span>
export default NavBar;