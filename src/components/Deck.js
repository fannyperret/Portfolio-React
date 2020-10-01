import React from 'react';
import DescDeck from '../components/DescDeck';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import catcircusimg from '../assets/img/cat_circus.jpg';
import portfolioimg from '../assets/img/portfolio.png';

class Deck extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Portfolio',
                    description: 'I wanted to have a Portfolio responvie, creative and colorful with React and Bootstrap! I added a theme Light/Dark to this!',
                    imgSrc: portfolioimg,
                    year: 'October 2020',
                    link: 'https://fannyperret.fr',
                    codeSrc: 'https://github.com/fannyperret/Portfolio-React',
                },
                {
                    id: 1,
                    title: 'Wild Circus',
                    description: 'This is my first time learning how to create a static page with HTML5, CSS3 and JS. It\'s really old but I\'m very proud of it.',
                    imgSrc: catcircusimg,
                    year: 'June 2017',
                    link: 'https://jsfiddle.net/FunnyRose/n0yoxs0j/show/',
                    codeSrc: 'https://jsfiddle.net/FunnyRose/n0yoxs0j',
                }
            ]
        }
    }

    makeProjects = (items) => {
        return items.map(item => {
            return <DescDeck item={item} key={item.id} />
        });
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-center">
                    {this.makeProjects(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Deck;