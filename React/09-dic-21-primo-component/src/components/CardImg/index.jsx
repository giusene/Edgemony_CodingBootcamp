import React from "react";
import './style.css';

const CardImg = (img) => (
    <div className="card-img" style={{backgroundImage: "url(" + img.bg + ")"}}>
        <img src={img.src} alt={img.alt} />
    </div>
)

export default CardImg