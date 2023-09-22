import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Skill from './Skill';
import Project from './Project';
import ContactUs from './ContactUs';
import '../styles/Navbar.css';

class Navbar extends Component {

    handleClick = (event, sectionId) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };


    render() {

        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#home"><span className="highlight">G</span>outam</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#home" onClick={(e) => this.handleClick(e, "home")}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about" onClick={(e) => this.handleClick(e, "about")}>About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#skills" onClick={(e) => this.handleClick(e, "skills")}>Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#projects" onClick={(e) => this.handleClick(e, "projects")}>Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact" onClick={(e) => this.handleClick(e, "contact")}>Contact</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>

                <div id="home">
                    <Home />
                </div>

                <div id="about">
                    <About />
                </div>

                <div id="skills">
                    <Skill />
                </div>

                <div id="projects">
                    <Project />
                </div>

                <div id="contact">
                    <ContactUs />
                </div>

            </div>
        );
    }
}

export default Navbar;




