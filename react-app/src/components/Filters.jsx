import {useState, useEffect} from 'react';

function Filters({filters, filterUpdate, currentFilters}){

    const handleFilterChange = (event)=>{
        filterUpdate(event);
    }

    return(
        <div className="dropdown">
            <button className="btn btn-lg btn-secondary dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filter Sources
            </button>

            <ul className="dropdown-menu w-100 p-3">
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