//Component for filters

//Component takes filters (arr) for all available filters, filterUpdate (func) to send updated filter to home.jsx, currentFilters (arr) to display current filters' states
function Filters({filters, filterUpdate, currentFilters}){

    //Sends updated filter to home.jsx
    const handleFilterChange = (event)=>{
        filterUpdate(event);
    }

    return(
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle filter-button" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filters
            </button>

            <ul className="dropdown-menu filter-menu w-100 p-3">
                <div className="container-fluid">
                    <div className="row">
                        {filters.map((filter, index)=>(
                            <div className="col-4" key={index}>
                                <div className="form-check form-switch form-check-inline">
                                    <input className="form-check-input" type="checkbox" role="switch" id={filter} checked={currentFilters[filter]} onChange={handleFilterChange}/>
                                    <label className="form-check-label" htmlFor={`${index}`}>{filter}</label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ul>
        </div>
    );
}

export default Filters;