import React from 'react';

import Year from './Year';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Heart, Bootstrap } from 'react-bootstrap-icons';

import { FaReact, FaLinkedin } from 'react-icons/fa';
import { GoMarkGithub as GithubIcon } from "react-icons/go";


function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top p-3">
                    <Col className="p-0" md={6} sm={12} xs={12}>
                        This site was made by Fanny Perret with  
                        {' '}
                        <FaReact />, <Bootstrap size={15} /> and <Heart size={15} />.
                    </Col>
                    <Col className="p-0" md={3} sm={6} xs={3}>
                        © <Year />
                    </Col>
                    <Col className="p-0" md={3} sm={6} xs={8}>
                        <a href="https://github.com/fannyperret">
                            <GithubIcon />
                            <span className="social-media">Github</span>
                        </a>
                        {' '}
                        <a href="https://www.linkedin.com/in/perretfanny/">
                            <FaLinkedin />
                            <span className="social-media">Linkedin</span>
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;