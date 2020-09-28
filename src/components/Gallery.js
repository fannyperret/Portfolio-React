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
                    subTitle: 'The squelette for website',
                    imgSrc: html5img,
                    rating: 4.5,
                },
                {
                    id: 1,
                    title: 'CSS3',
                    subTitle: 'The decoration for website',
                    imgSrc: css3img,
                    rating: 4,
                },
                {
                    id: 2,
                    title: 'JavaScript',
                    subTitle: 'The fun for website',
                    imgSrc: jsimg,
                    rating: 3,
                },
                {
                    id: 3,
                    title: 'Git',
                    subTitle: 'The best tool for my projects and community',
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
                    subTitle: 'JavaScript Object Notation: really useful',
                    imgSrc: jsonimg,
                    rating: 4,
                },
                {
                    id: 6,
                    title: 'React',
                    subTitle: 'Library developed by Facebook in 2013',
                    imgSrc: reactimg,
                    rating: 1,
                },
                {
                    id: 7,
                    title: 'Bootstrap',
                    subTitle: 'Still using Jquery but not for long time thanks to Bootstrap 5 (coming soon)',
                    imgSrc: bootstrapimg,
                    rating: 4,
                },
                {
                    id: 8,
                    title: 'Php',
                    subTitle: 'Still using Jquery but not for long time thanks to Bootstrap 5 (coming soon)',
                    imgSrc: phpimg,
                    rating: 2,
                },
                {
                    id: 9,
                    title: 'Leaflet',
                    subTitle: 'Still using Jquery but not for long time thanks to Bootstrap 5 (coming soon)',
                    imgSrc: leafletimg,
                    rating: 4,
                }
            ]
        }
    }

    // handleCardClick = (id, card) => {
    //     console.log(id);

    //     let items = [...this.state.items];

    //     items[id].selected = items[id].selected ? false : true;

    //     items.forEach(item => {
    //         if (item.id !== id) {
    //             item.selected = false;
    //         }
    //     });

    //     this.setState({
    //         items
    //     });
    // }

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