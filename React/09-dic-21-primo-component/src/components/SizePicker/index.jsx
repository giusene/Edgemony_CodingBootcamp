import React from "react";
import './style.css';

const SizePicker = (props) => (
    <div className="card__size-picker">
        <h3>{props.title}</h3>
        <div className="picker-wrapper">
            <div className="picker-wrapper-circle active">S</div>
            <div className="picker-wrapper-circle">M</div>
            <div className="picker-wrapper-circle">L</div>
        </div>
    </div>
)

export default SizePicker