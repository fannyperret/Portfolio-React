import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="css-card-info" style={style}>
            <p className="css-card-title">{props.title}</p>
            <p className="css-card-subtitle">{props.subTitle}</p>
        </animated.div>
    )
}

export default CardInfo;