import React from 'react';

import Col from 'react-bootstrap/Col';

function DescDeck(props) {

    return(

        <Col lg={3} md={4} className="d-inline-block css-card">
            <img className="deck-img" src={props.item.imgSrc} alt={props.item.imgSrc} />
            <p className="css-card-title">{props.item.title}</p>
            <p className="css-card-subtitle">{props.item.year}</p>
            <p className="css-card-subtitle">{props.item.description}</p>
            <a href={props.item.link}>Visiter la page</a> || <a href={props.item.codeSrc}>Code Source</a>
        </Col>
            
    )
    
}

export default DescDeck;