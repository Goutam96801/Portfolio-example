import React, { Component } from 'react';
import '../styles/Skill.css';

export class Skill extends Component {
    render() {
        return (
            <div>
                <h2 className="heading">Languages and framework i<span className='highlight'> know</span></h2>
                <div className="seperator"></div>
                <div className="skill-container">
                    <div className="skill-card card1">
                        <p className="skill">HTML</p>
                    </div>
                    <div className="skill-card card2">
                        <p className="skill">CSS</p>
                    </div>
                    <div className="skill-card card3" >
                        <p className="skill">JavaScript</p>
                    </div>
                    <div className="skill-card card4">
                        <p className="skill">MongoDB</p>
                    </div>
                    <div className="skill-card large card5">
                        <p className="skill">ReactJS</p>
                    </div>
                    <div className="skill-card large card6">
                        <p className="skill">NodeJS</p>
                    </div>
                    <div className="skill-card large card7">
                        <p className="skill">ExpressJS</p>
                    </div>
                    <div className="skill-card card8">
                        <p className="skill">Java</p>
                    </div>
                    <div className="skill-card card9">
                        <p className="skill">C++</p>
                    </div>
                    <div className="skill-card card10">
                        <p className="skill">Python</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skill
