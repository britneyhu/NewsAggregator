import {useState} from "react";

function NavBar({handleSubmit, handleHomeClick}){
    const [input, setInput] = useState("");

    const handleInputChange = (event)=>{
        setInput(event.target.value);
    };

    const handleSearchSubmit = (event)=>{
        if(input.trim().length === 0){
            setInput("");
            return;
        }
        handleSubmit(input);
        setInput("");
    }

    return (
        <nav className="navbar bg-body-tertiary pb-2 pt-2">
            <div className="container-fluid d-flex">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src="\newspaperIcon.png" alt="Logo" width="100" height="100" className="d-inline-block me-4" onClick = {handleHomeClick}/>
                    <div className="ms-3 d-flex flex-column justify-content-center">
                        <span style={{ fontSize: "2rem", fontWeight: "bold" }}>News</span>
                        <span style={{ fontSize: "2rem", fontWeight: "bold" }}>Aggregator</span>
                    </div>
                    
                </a>
                <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
                    <input 
                        className="form-control me-2" 
                        type="search" 
                        placeholder="Search a topic..." 
                        aria-label="Search"
                        value = {input}
                        onChange = {handleInputChange}
                    />
                    <button 
                        className="btn btn-outline-success" 
                        type="submit" 
                        >Search</button>
                </form>
            </div>
        </nav>
    ); 
}


//<span className="text-center fw-medium" style = {{fontFamily: "Courier New", fontSize: "3rem"}}>News Aggregator</span>
export default NavBar;