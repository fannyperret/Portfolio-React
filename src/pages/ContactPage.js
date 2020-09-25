import React from 'react';

import Axios from 'axios';

import SecondTitle from '../components/SecondTitle';
import Content from '../components/Content';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }


    handleChange = (event) => {
        console.log(event);

        const target = event.target;
        const val = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: val
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true
        });

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if (res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                this.setState({
                    disabled: false,
                    emailSent: false
                })
            })

    }


    render() {
        return(
            <div>
                <SecondTitle title={this.props.title} subTitle={this.props.subTitle} text={this.props.text} />
                <Content>
                    <Form onSubmit={this.handleSubmit}>

                        <Form.Group>
                            <Form.Label htmlFor="full-name" className="">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email" className="">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message" className="">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="5" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg">Email sent, awesome!</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Oops, something went wrong. Try again</p>}

                    </Form>
                </Content>
            </div>
        );
    }

}

export default ContactPage;