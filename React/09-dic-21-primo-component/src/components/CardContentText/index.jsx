import React from "react";
import './style.css';

const CardContentText = (props) => (
    <div className="card-content-text">
        <div className="card-content-text__header">
         <div className="card-content-text__header__title"><h3>{props.title}</h3></div>
         <div className="card-content-text__header__price"><h3>{props.price}$</h3></div>
        </div>
        <div className="card-content-text__description">
            <p>{props.description}</p>
        </div>
    </div>
)

export default CardContentText