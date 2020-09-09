import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import Card from '../components/Card/index';

function EmployeeDirectory() {
    const [userState, setUserState] = useState([]);

    useEffect(() => {
        API.getEmployees()
            .then((res) => {
                setUserState(res.data.results)
            });
    }, []);

    function loadEmployees() {
        return userState.map(user => {
            return <Card    key={user.login.uuid}
                            thumbnail={user.picture.thumbnail}
                            alt={user.name.first + " " + user.name.last}
                            firstName={user.name.first}
                            lastName={user.name.last}
                            email={user.email}
                            dob={user.dob.date}/> 
            
        })
    }
    return (
        <div>
            {loadEmployees()}
        </div>
    )

    //you've taken the code below to a child card component

}


export default EmployeeDirectory;