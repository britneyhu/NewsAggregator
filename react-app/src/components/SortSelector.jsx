import {useState} from "react";

function SortSelector({titleText, options, handleSort, currentOption}){
    const handleChange = (event)=>{
        const value = event.target.value;
        if(value == "Sort by") return;
        handleSort(value);
    }

    return(
        <select className="form-select w-auto" onChange={handleChange} value={currentOption}>
            <option>{titleText}</option>
            {options.map((option, index)=>(
                <option key={index}>{option}</option>
            ))}
        </select>
    );
}

export default SortSelector;