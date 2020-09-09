import React from 'react';

function SearchForm(props) {
    return (
    <form className="search">
        <div className="form-group">
            <label for="employeeSearchForm">Search Employees</label>
            <input 
            value={props.search}
            onChange={props.handleInputChange}
            type="text" 
            class="form-control" 
            id="employeeSearch" 
            placeholder="Employee Name" />
        </div>
        <button type="submit" class="btn btn-primary">Search</button>
    </form>
    )
}

export default SearchForm;