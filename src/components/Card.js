import React from 'react';

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

function Card(props) {

    return(
        <div className="d-inline-block css-card">
            <img className="css-card-img" src={props.item.imgSrc} alt={props.item.imgSrc} />
            <div className="div-card">
                <p className="css-card-title">{props.item.title}</p>
                <p className="css-card-subtitle">{props.item.subTitle}</p>
                <span className="rating-card">
                    <BsStarFill size={20} style={{ fill: 'yellow' }} /> <BsStarFill size={20} style={{ fill: 'yellow' }} /> <BsStarFill size={20} style={{ fill: 'yellow' }} /> <BsStarHalf size={20} style={{ fill: 'yellow' }} /> <BsStar size={20} style={{ fill: 'yellow' }} />
                </span>
            </div>
        </div>
    )
}

export default Card;