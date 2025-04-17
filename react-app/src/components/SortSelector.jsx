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
            <option selected>{titleText}</option>
            {options.map((option)=>(
                <option>{option}</option>
            ))}
        </select>
    );
}

export default SortSelector;