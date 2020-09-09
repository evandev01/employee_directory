import React from 'react'

function Card(props){
return (
    <div className="Card">
        <div>
            <img src={props.thumbnail} alt={props.alt} />
        </div>
        <div>
            Name: {props.lastName + " " + props.firstName}
        </div>
        <div>
            Email: {props.email}
        </div>
        <div>
            DOB: {props.dob}
        </div>
    </div>
)
};

export default Card;