import React from 'react';

function ProDeck(props) {

    return(
        <div className="d-inline-block css-card">
            <div className="div-card">
                <p className="css-card-title">{props.project.title}</p>
                <p className="css-card-subtitle">{props.project.description}</p>
            </div>
            
        </div>
    )
}

export default ProDeck;