//Component for sort selector

//Component takes a titleText (str) for the default button text, options (arr) for all options to display, handleSort (func) to pass sort option to home.jsx, currentOption(str) to display currently selected option
function SortSelector({titleText, options, handleSort, currentOption}){
    //Sends option to handleSort function in home.jsx
    const handleChange = (option)=>{
        if(option === "Sort by") return;
        handleSort(option);
    }

    return(
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle sort-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {currentOption || titleText}
            </button>
            <ul className="dropdown-menu">
                    {options.map((option, index)=>(
                        <li className="dropdown-item" href="#!" key={index} onClick={()=> handleChange(option)}>
                            {option}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default SortSelector;