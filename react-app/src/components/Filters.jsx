function Filters({filters}){
    return(
        <div className="dropdown">
            <button className="btn btn-lg btn-secondary dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filter Sources
            </button>

            <ul className="dropdown-menu">
                {filters.map((filter, index)=>(
                    <li key={index}>
                        <div className="form-check form-switch form-check-inline">
                            <input className="form-check-input" type="checkbox" role="switch" id={`switch-${index}`}/>
                            <label className="form-check-label" htmlFor={`switch-${index}`}>{filter}</label>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Filters;