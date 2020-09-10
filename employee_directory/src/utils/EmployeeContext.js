//Create the context
//Define the provider
//Define the consumer

import React from 'react';

const EmployeeContext = React.createContext({
        key: "",
        thumbnail:"",
        alt:"",
        firstName:"",
        lastName:"",
        email:"",
        dob:""
    });

export default EmployeeContext;