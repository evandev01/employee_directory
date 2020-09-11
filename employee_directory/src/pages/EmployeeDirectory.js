import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import Card from '../components/Card/index';

function EmployeeDirectory() {
    const [userState, setUserState] = useState([]);
    const [searchState, setSearchState] = useState("");
    const [filterState, setFilterState] = useState([]);

    useEffect(() => {
        API.getEmployees()
            .then((res) => {
                setUserState(res.data.results);
                setFilterState(res.data.results);
                // setSortState("");
            });
    }, []);

    //Search employee by name =======
    function handleSearch(event) {
        event.preventDefault();
        const filteredData = userState.filter((user) => {
            if (user.name.first.includes(searchState) || user.name.last.includes(searchState)) return true;
            else return false;
        })
        setFilterState(filteredData);
    };

    //Function to populate list of employees. Props passed to Card component =======
    function loadEmployees() {
        return filterState.map(user => {
            return <Card key={user.login.uuid}
                picture={user.picture.large}
                alt={user.name.first + " " + user.name.last}
                firstName={user.name.first}
                lastName={user.name.last}
                // order=""
                by={user.name.last}
                email={user.email}
                dob={user.dob.date}
            />
        })
    };

    //Sets list to Ascending =======
    function handleSortAscend(event) {
        event.preventDefault();
        const newUserState = [...userState]
        newUserState.sort((a, b) => a.name.last > b.name.last ? 1 : -1)
        console.log(newUserState);
        setFilterState(newUserState);
    };

    //Sets list to Descending =======
    function handleSortDescend(event) {
        event.preventDefault();
        const newUserState = [...userState]
        newUserState.sort((a, b) => a.name.last < b.name.last ? 1 : -1)
        console.log(newUserState);
        setFilterState(newUserState);
    };

    return (
        <div>
            <form className="searchForm">
                <input type="text" value={searchState} onChange={(event) => setSearchState(event.target.value)} />
                <button className="Search" type="Submit" onKeyDown={handleSearch} onClick={handleSearch}>Search</button>
            </form>

            <button className="up-arrow" type="button" onClick={handleSortAscend}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up-square" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
            </svg></button>

            <button className="down-arrow" type="button" onClick={handleSortDescend}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up-square-fill" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
            </svg></button>

            {loadEmployees()}
        </div>
    )
};

export default EmployeeDirectory;