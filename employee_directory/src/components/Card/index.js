import React from 'react';

//Card component for each employee rendered to the DOM =======
function Card(props) {
    return (
        <div className="Card">
            <div className="row">
                {/* <div className="col 1 of 6"></div> */}
                <div className="col 1 of 4" id='info'>
                    <img src={props.picture} alt={props.alt} />
                </div>
                <div className="col 2 of 4" id='info'>
                    {props.lastName + ", " + props.firstName}
                </div>
                <div className="col 3 of 4" id='info-email'>
                    {props.email}
                </div>
                <div className="col 4 of 4" id='info-dob'>
                    DOB: {props.dob}
                </div>
                {/* <div className="col 6 of 6"></div> */}
            </div>
        </div>
    )
};

export default Card;