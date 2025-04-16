import {useState} from "react";

function NavBar({handleSubmit, handleHomeClick}){
    const [input, setInput] = useState("");

    const handleInputChange = (event)=>{
        setInput(event.target.value);
    };

    const handleSearchSubmit = (event)=>{
        handleSubmit(input);
        setInput("");
    }

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="\logo192.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" onClick = {handleHomeClick}/>
                    News Aggregator
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

export default NavBar;