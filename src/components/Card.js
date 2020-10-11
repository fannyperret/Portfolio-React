import React from 'react';
import StarRating from '../components/StarRating';

function Card(props) {

    return(
        <div className="d-inline-block css-card">
            <img className="css-card-img" src={props.item.imgSrc} alt={props.item.imgSrc} />
            <div className="div-card">
                <p className="css-card-title">{props.item.title}</p>
                <p className="css-card-subtitle">{props.item.subTitle}</p>
                <span className="rating-card"> 
                    <StarRating rating={props.item.rating} />
                </span>
            </div>
        </div>
    )
}

export default Card;