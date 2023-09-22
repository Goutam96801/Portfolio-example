import React, { Component } from 'react'
import profileImage from '../files/profile.jpeg';
import '../styles/Home.css'

export class Home extends Component {
    handleClick = (event, sectionId) => {
        event.preventDefault(); // Prevent the default anchor link behavior
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
        this.setState({ activeLink: sectionId });
    };
    render() {
        return (
            <div>
                <section className="home">
                    <div className="hero-content">
                        <h1 className="hero-heading">
                            <span className="highlight">hey there!</span
                            ><br />i am your name
                        </h1>
                        <p className="profession">profession</p>
                        <p className="info">
                            <span className="highlight">Hi!</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Qui asperiores nemo hic, explicabo dignissimos a consectetur eius quo molestias,
                            aliquid modi et laudantium odio blanditiis libero alias nulla. Magnam beatae odit
                            rerum? Fuga id sint dolorum, quam sapiente magni. Nulla incidunt accusantium cum
                            obcaecati fuga.
                        </p>
                        <a className="btn" href="#contact" onClick={(e) => this.handleClick(e, "contact")}>Contact Me</a>

                    </div>
                    <div className='profile-card'>
                        <img src={profileImage} className="image" alt="profile-image" />
                        <div className='social-media'>
                            <ul className='list-items'>
                                <li className='item'>
                                    <a href='/' target='_blank'><i className="fa-brands fa-github"></i></a>
                                </li>
                                <li className='item'>
                                    <a href='/' target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                                </li>
                                <li className='item'>
                                    <a href='/' target='_blank'><i className="fa-brands fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Home
