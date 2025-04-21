import {useState} from "react";

function SortSelector({titleText, options, handleSort, currentOption}){
    const [open, setOpen]  = useState(false);

    const handleToggle = () => setOpen((prev)=> !prev);

    const handleChange = (option)=>{
        if(option == "Sort by") return;
        setOpen(false);
        handleSort(option);
    }

    return(
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle sort-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {currentOption || titleText}
            </button>
            <ul class="dropdown-menu">
                    {options.map((option, index)=>(
                        <li className="dropdown-item" href="#!" key={index} onClick={()=> handleChange(option)}>
                            {option}
                        </li>
                    ))}
            </ul>
        </div>

        // <select className="form-select w-auto sort-button" onChange={handleChange} value={currentOption}>
        //     <option>{titleText}</option>
        //     {options.map((option, index)=>(
        //         <option key={index}>{option}</option>
        //     ))}
        // </select>
    );
}

export default SortSelector;