import React from 'react';

import SecondTitle from '../components/SecondTitle';
import Gallery from '../components/Gallery';

function AboutPage(props) {

    return(
        <div>
            <SecondTitle title={props.title} subTitle={props.subTitle} text={props.text} />
            <Gallery />
        </div>
    );

}

export default AboutPage;