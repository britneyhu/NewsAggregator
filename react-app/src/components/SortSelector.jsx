function SortSelector({titleText}){
    return(
        <select class="form-select w-auto" aria-label="Sort Selector">
            <option selected>{titleText}</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    );
}

export default SortSelector;