import React from 'react';

import SecondTitle from '../components/SecondTitle';
import Deck from '../components/Deck';


function ProjectsPage(props) {

    return(
        <div>
            <SecondTitle title={props.title} subTitle={props.subTitle} text={props.text} />
            <Deck />
        </div>
    );

}

export default ProjectsPage;