import React from 'react';

import Year from './Year';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Heart, Bootstrap } from 'react-bootstrap-icons';


function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0 justify-content-end" md={6}>
                        This site was made by Fanny Perret with  
                        {' '}
                        <img 
                        alt="Black icon React"
                        src={require('../assets/img/React_Icon.png')} 
                        width="15"
                        />, <Bootstrap size={15} /> and <Heart size={15} />.
                    </Col>
                    <Col className="p-0 justify-content-end" md={6}>
                        © <Year />
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;