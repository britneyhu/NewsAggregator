import {useState} from "react";

function SortSelector({titleText, options, handleSort}){
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event)=>{
        const value = event.target.value;
        if(value == "Sort by") return;
        setSelectedOption(value);
        handleSort(value);
    }

    return(
        <select className="form-select w-auto" onChange={handleChange} value={selectedOption}>
            <option>{titleText}</option>
            {options.map((option, index)=>(
                <option key={index}>{option}</option>
            ))}
        </select>
    );
}

export default SortSelector;