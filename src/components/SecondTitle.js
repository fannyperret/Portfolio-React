import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  

function SecondTitle(props) {

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col className="" lg={{span: 5}} md={{span: 8}} sm={12} xs={{span: 12}}>
                        { props.title && <h1 className="display-2 font-weight-bolder">{props.title}</h1> }
                        { props.subTitle && <h2 className="display-6 font-weight-light">{props.subTitle}</h2> }
                        { props.text && <h3 className="lead font-weight-light">{props.text}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

}

export default SecondTitle;