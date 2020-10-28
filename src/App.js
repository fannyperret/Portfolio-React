import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

import Footer from './components/Footer';

import './App.css';
import avatar from './assets/img/Avatar_Dev.png';

import AppTheme from './themes/AppTheme';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Fanny Perret',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Projects', path: '/projects' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
      title: '< Be Code />',
        subTitle: 'Creating Projects makes the difference',
        text: 'Welcome to my portfolio!',
        textTwo: 'Hi everyone! My name is Fanny. I\'m a French frontend developer! After 5 years studying History of Art and living 3 years in Spain I moved in Lyon. I began learning code for the first time in 2017. Programming is another way to create and have fun in this "Hello World!"',
        textThree: 'Learning a programming language and a foreign language is similar. Every language (whether human or programming) has its rules. So please, feel free to navigate here ;)'
      },
      about: {
        title: 'About me',
        subTitle: 'Check my skills!',
        text: 'Rating cards created and designed by myself: fly over them!'
      },
      projects: {
        title: 'My Projects',
        subTitle: 'Some independents projects',
        text: 'New ideas and challenges in process...'
      },
      contact: {
        title: 'Let\'s Talk!',
        subTitle: 'Do you want to ask me something?',
        text: 'Leave me a message below:'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">

            <Navbar.Brand className="p-0">
              <Nav className="p-0">
                <Link className="p-0 nav-link" to="">
                  <img
                    alt="Author's Avatar for Brand"
                    src={avatar}
                    width="60"
                    height="60"
                    className="d-inline-block align-middle rounded-img"
                  />{' '}
                #Fanny
              </Link>
              </Nav>    
            </Navbar.Brand>

            {/* TOGGLE */}
            <AppTheme />

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">

        

              <Nav className="ml-auto">
                {/* TOGGLE */}
                {/* <AppTheme /> */}
                <Link className="nav-link" to="">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>

          </Navbar>

          <Route path="" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} textTwo={this.state.home.textTwo} textThree={this.state.home.textThree} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text} />} />
          <Route path="/projects" exact render={() => <ProjectsPage title={this.state.projects.title} subTitle={this.state.projects.subTitle} text={this.state.projects.text} />} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} text={this.state.contact.text} />} />
        

          <Footer />

        </Container>
      </Router>
    );
  }
  
}

export default App;
