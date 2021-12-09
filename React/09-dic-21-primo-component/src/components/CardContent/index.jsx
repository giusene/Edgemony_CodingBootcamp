import React from "react";
import './style.css';
import CardContentText from "../CardContentText";
import ColorPicker from "../ColorPicker";
import SizePicker from "../SizePicker";
import Button from "../Button";

const CardContent = ({productTitle, productPrice, productDescription, ColorTitle, SizeTitle, ButtonName}) => (
    <div className="card-content">
        <CardContentText title={productTitle} price={productPrice} description={productDescription} />
        <ColorPicker title={ColorTitle} />
        <SizePicker title={SizeTitle} />
        <Button name={ButtonName} />
    </div>
)

export default CardContent