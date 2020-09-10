import React from 'react'

function Card(props) {
    return (

        <div className="Card">
            <div className="row">
                <div className="col 1 of 6"></div>
                <div className="col 2 of 6">
                    <img src={props.picture} alt={props.alt} />
                </div>
                <div className="col 3 of 6">
                    {props.lastName + ", " + props.firstName}
                </div>
                <div className="col 4 of 6">
                    {props.email}
                </div>
                <div className="col 5 of 6">
                    DOB: {props.dob}
                </div>
                <div className="col 6 of 6"></div>
            </div>
        </div>
    )
};

export default Card;