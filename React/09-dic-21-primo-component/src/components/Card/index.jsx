import React from "react";
import './style.css';
import CardImg from "../CardImg/";
import CardContent from "../CardContent";


const Card = ({imgBg, imgSrc, productTitle, productPrice, productDescription, ColorTitle, SizeTitle, ButtonName}) => (
    <div className="card">
        <CardImg bg={imgBg} src={imgSrc} alt={productTitle}/>
        <CardContent 
            productTitle={productTitle} 
            productPrice={productPrice} 
            productDescription={productDescription} 
            ColorTitle={ColorTitle}
            SizeTitle={SizeTitle}
            ButtonName={ButtonName}
        />
    </div>
)

export default Card