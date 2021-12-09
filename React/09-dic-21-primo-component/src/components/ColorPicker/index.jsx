import React from "react";
import './style.css';

const ColorPicker = (props) => (
    <div className="card__img-picker">
        <h3>{props.title}</h3>
        <div className="picker-wrapper">
            <div className="picker-wrapper-circle black"></div>
            <div className="picker-wrapper-circle violet"></div>
            <div className="picker-wrapper-circle yellow"></div>
            <div className="picker-wrapper-circle gray"></div>
        </div>
    </div>
)

export default ColorPicker