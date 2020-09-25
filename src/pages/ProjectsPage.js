import React from 'react';

import SecondTitle from '../components/SecondTitle';


function ProjectsPage(props) {

    return(
        <SecondTitle title={props.title} subTitle={props.subTitle} text={props.text} />
    );

}

export default ProjectsPage;