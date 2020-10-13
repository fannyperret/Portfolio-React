import React from 'react';

import { BsStarFill, BsStar } from "react-icons/bs";

function StarRating(props) {

    if (props.rating === 5) {
        return(
            <div>
                <BsStarFill size={20} style={{ fill: 'yellow' }} /> <BsStarFill size={20} style={{ fill: 'yellow' }} /> <BsStarFill size={20} style={{ fill: 'yellow' }} /> <BsStarFill size={20} style={{ fill: 'yellow' }} /> <BsStarFill size={20} style={{ fill: 'yellow' }} />
            </div>
        );
    } else if (props.rating === 4) {
        return(
            <div>
                <BsStarFill size={20} style={{ fill: 'yellow' }} /> <BsStarFill size={20} style={{ fill: 'yellow' }} /> <BsStarFill size={20} style={{ fill: 'yellow' }} /> <BsStarFill size={20} style={{ fill: 'yellow' }} /> <BsStar size={20} style={{ fill: 'yellow' }} />
            </div>
        );
    } else if (props.rating === 3) {
        return(
            <div>
                <BsStarFill size={20} style={{ fill: 'yellow' }} /> <BsStarFill size={20} style={{ fill: 'yellow' }} /> <BsStarFill size={20} style={{ fill: 'yellow' }} /> <BsStar size={20} style={{ fill: 'yellow' }} /> <BsStar size={20} style={{ fill: 'yellow' }} />
            </div>
        );
    } else if (props.rating === 2) {
        return(
            <div>
                <BsStarFill size={20} style={{ fill: 'yellow' }} /> <BsStarFill size={20} style={{ fill: 'yellow' }} /> <BsStar size={20} style={{ fill: 'yellow' }} /> <BsStar size={20} style={{ fill: 'yellow' }} /> <BsStar size={20} style={{ fill: 'yellow' }} />
            </div>
        );
    } else if (props.rating === 1) {
        return(
            <div>
                <BsStarFill size={20} style={{ fill: 'yellow' }} /> <BsStar size={20} style={{ fill: 'yellow' }} /> <BsStar size={20} style={{ fill: 'yellow' }} /> <BsStar size={20} style={{ fill: 'yellow' }} /> <BsStar size={20} style={{ fill: 'yellow' }} />
            </div>
        );
    } else {
        return(
            <div>
                <BsStar size={20} style={{ fill: 'yellow' }} /> <BsStar size={20} style={{ fill: 'yellow' }} /> <BsStar size={20} style={{ fill: 'yellow' }} /> <BsStar size={20} style={{ fill: 'yellow' }} /> <BsStar size={20} style={{ fill: 'yellow' }} />
            </div>
        );
    }


}

export default StarRating;