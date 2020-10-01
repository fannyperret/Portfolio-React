import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import hello from '../assets/img/Hello_World.png';


function BigTitle(props) {

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col className="py-5"  xl={4} lg={6} md={12} sm={12} xs={{span: 12, order: 2 }}>
                        { props.title && <h1 className="display-2 font-weight-bolder">{props.title}</h1> }
                        { props.subTitle && <h2 className="display-6 font-weight-light">{props.subTitle}</h2> }
                        { props.text && <h3 className="lead font-weight-light">{props.text}</h3> }
                        { props.textTwo && <p className="py-5 lead font-weight-light">{props.textTwo}</p> }
                        { props.textThree && <p className="lead font-weight-light">{props.textThree}</p> }
                    </Col>
                    <Col className="p-0" xl={8} lg={6} md={12} sm={12} xs={{span: 12, order: 1 }}>
                        <Image src={hello} fluid />
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

}

export default BigTitle;