import React, { Component } from 'react'
import CubeAnimation from './CubeAnimation'
import '../styles/About.css';
export class About extends Component {
    render() {
        return (
            <>
                <section className="about" id="about-section">
                    <h2 className="heading">about <span className="highlight">me</span></h2>
                    <p className="sub-heading">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="seperator"></div>

                    <div className="about-me-container">
                        <div className="left-col">
                            <div className="about-para">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Name:</td>
                                            <td><span className='highlight'>Your Good Name</span></td>
                                        </tr>
                                        <tr>
                                            <td>Date of Birth:</td>
                                            <td><span className='highlight'>Jan 1, 2001</span></td>
                                        </tr>
                                        <tr>
                                            <td>Address:</td>
                                            <td><span className='highlight'>Lorem ipsum dolor sit.</span></td>
                                        </tr>
                                        <tr>
                                            <td>Postal Code:</td>
                                            <td><span className='highlight'>12345</span></td>
                                        </tr>
                                        <tr>
                                            <td>Email:</td>
                                            <td><span className='highlight'>xyz@gmail.com</span></td>
                                        </tr>
                                        <tr>
                                            <td>Phone:</td>
                                            <td><span className='highlight'>1234567890</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <a href='' className="btn" download>download cv</a>
                        </div>

                        <div className="right-col">
                            <CubeAnimation />
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default About
