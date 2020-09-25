import React from 'react';

import BigTitle from '../components/BigTitle';


function HomePage(props) {

    return(
        <BigTitle title={props.title} subTitle={props.subTitle} text={props.text}  textTwo={props.textTwo} textThree={props.textThree} />
    );

}

export default HomePage;