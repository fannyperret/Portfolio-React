import React from 'react';

import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import html5img from '../assets/img/html5_logo.png';
import css3img from '../assets/img/css3_logo.png';
import jsimg from '../assets/img/js_logo.png';
import gitimg from '../assets/img/git_logo.png';
import jqueryimg from '../assets/img/jquery_logo.png';
import jsonimg from '../assets/img/json_logo.png';
import reactimg from '../assets/img/react_logo.png';
import bootstrapimg from '../assets/img/bootstrap_logo.png';
import phpimg from '../assets/img/php_logo.png';
import leafletimg from '../assets/img/leaflet_logo.png';

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'HTML5',
                    subTitle: 'Hypertext Markup Language. IT IS NOT A PROGRAMMING LANGUAGE.',
                    imgSrc: html5img,
                    rating: 4.5,
                },
                {
                    id: 1,
                    title: 'CSS3',
                    subTitle: 'Cascading Style Sheets, helps build a beautiful Internet!',
                    imgSrc: css3img,
                    rating: 4,
                },
                {
                    id: 2,
                    title: 'JavaScript',
                    subTitle: 'The Programming Language for the Web. Please don\'t call it Java!',
                    imgSrc: jsimg,
                    rating: 3,
                },
                {
                    id: 3,
                    title: 'Git',
                    subTitle: 'A free and open source version control system to handle projects!',
                    imgSrc: gitimg,
                    rating: 4,
                },
                {
                    id: 4,
                    title: 'Jquery',
                    subTitle: 'Library who will die soon?',
                    imgSrc: jqueryimg,
                    rating: 4,
                },
                {
                    id: 5,
                    title: 'Json',
                    subTitle: 'JavaScript Object Notation: a lightweight format for storing and transporting data.',
                    imgSrc: jsonimg,
                    rating: 4,
                },
                {
                    id: 6,
                    title: 'React',
                    subTitle: 'Library developed by Facebook in 2013. I started React and is awesome!',
                    imgSrc: reactimg,
                    rating: 1,
                },
                {
                    id: 7,
                    title: 'Bootstrap',
                    subTitle: 'The good old front-end framework because you can use it for React too!',
                    imgSrc: bootstrapimg,
                    rating: 4,
                },
                {
                    id: 8,
                    title: 'Php',
                    subTitle: 'My first programming language (7.2)! Php 8 Beta is now available!',
                    imgSrc: phpimg,
                    rating: 2,
                },
                {
                    id: 9,
                    title: 'Leaflet',
                    subTitle: 'I used this library to create interactive maps!',
                    imgSrc: leafletimg,
                    rating: 4,
                }
            ]
        }
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} key={item.id} />
        }); 
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-center">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Gallery;