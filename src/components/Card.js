import React from 'react';

import CardInfo from '../components/CardInfo';

function Card(props) {

    return(
        <div className="d-inline-block css-card" onClick={(e) => props.click(props.item)}>

            <img className="css-card-img" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} /> }
            
        </div>
    )
}

export default Card;