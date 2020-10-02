import React from 'react';

import Col from 'react-bootstrap/Col';

function DescDeck(props) {

    return(

        <Col lg={3} md={4} className="d-inline-block css-card">
            <img className="deck-img" src={props.item.imgSrc} alt={props.item.imgSrc} />
            <p className="deck-title">{props.item.title}</p>
            <p className="deck-year">{props.item.year}</p>
            <p className="deck-desc">{props.item.description}</p>
            <div className="text-center">
                <a href={props.item.link}>Visit the page</a> || <a href={props.item.codeSrc}>Source Code</a>
            </div>
            
        </Col>
            
    )
    
}

export default DescDeck;