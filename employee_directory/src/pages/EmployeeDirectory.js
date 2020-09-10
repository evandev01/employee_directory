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
            });
    }, []);

    function handleSearch(event) {
        event.preventDefault();
        const filteredData = userState.filter((user) => {
            if (user.name.first.includes(searchState) || user.name.last.includes(searchState)) return true;
            else return false;
        })
        setFilterState(filteredData);
    }

    function loadEmployees() {
        return filterState.map(user => {
            return <Card key={user.login.uuid}
                picture={user.picture.large}
                alt={user.name.first + " " + user.name.last}
                firstName={user.name.first}
                lastName={user.name.last}
                email={user.email}
                dob={user.dob.date}
            />
        })
    }
    return (
        <div>
            <input type="text" value={searchState} onChange={(event) => setSearchState(event.target.value)}/>
            <input type="button" value="Search" onKeyDown={handleSearch} onClick={handleSearch} />
            {loadEmployees()}
        </div>
    )
    //you've taken the code below to a child card component
}

export default EmployeeDirectory;