import React from 'react';
import ProDeck from '../components/ProDeck';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Deck extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    id: 0,
                    title: 'Portfolio',
                    description: 'Create my first Portfolio responsive, creative and colorful with React and Bootstrap! I added a theme Light/Dark to this!',
                    imgSrc: '',
                    year: 'October 2020',
                    link: 'https://fannyperret.fr',
                },
                {
                    id: 1,
                    title: 'Wild Circus',
                    description: 'This is my first time learning how to create a dynamic page with HTML5, CSS3 and JS. It\'s really old but I\'m kind really proud off it.',
                    imgSrc: '',
                    year: 'June 2017',
                    link: 'https://jsfiddle.net/FunnyRose/n0yoxs0j/show/',
                }
            ]
        }
    }

    makeProjects = (projects) => {
        return projects.map(project => {
            return <ProDeck item={project} key={project.id} />
        });
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-center">
                    {this.makeProjects(this.state.projects)}
                </Row>
            </Container>
        )
    }
}

export default Deck;