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
                    <BsStarFill style={{ fill: 'yellow' }} /> <BsStarFill style={{ fill: 'yellow' }} /> <BsStarFill style={{ fill: 'yellow' }} /> <BsStarHalf style={{ fill: 'yellow' }} /> <BsStar style={{ fill: 'yellow' }} />
                </span>
            </div>
        </div>
    )
}

export default Card;