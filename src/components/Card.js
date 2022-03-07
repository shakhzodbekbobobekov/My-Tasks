import React from "react";


const Card = (props) => {
    return (
        <div>
            <h2>{props.names}</h2>
            <img src={props.img} alt="" />
            <p>{props.liked}</p>
        </div>
    )
}

export default Card;