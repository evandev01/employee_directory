import React, {useState, useEffect} from 'react';
import API from '../utils/API';

function EmployeeDirectory(){
    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState({});
    const [employeeIndex, setEmployeeIndex] = useState(0);

useEffect(() => {
    loadEmployees();
}, []);

}

export default EmployeeDirectory;