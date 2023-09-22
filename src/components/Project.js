import React, { Component } from 'react'
import project1 from '../files/project1.jpg'
import project2 from '../files/project2.jpg'
import project3 from '../files/project3.jpg'
import project4 from '../files/project4.jpg'
import project5 from '../files/project5.jpg'
import project6 from '../files/project6.jpg'
import '../styles/Project.css'

export class Project extends Component {
    render() {
        return (
            <div>
                <section className="project" id="project-section">
                    <h2 className="heading">Project<span className="highlight">s</span></h2>
                    <p className="sub-heading">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="seperator"></div>
                    <div className="project-container">
                        <div className="project-card">
                            <img src={project1} className='project-img' alt="" />
                            <div className="content">
                                <h1 className="project-name">#Project 1</h1>
                                <a href='/' className='visit-link' target='_blank'>Visit</a>
                                <a href='/' className='btn project-link' target='_blank'>Github link</a>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src={project2} className='project-img' alt="" />
                            <div className="content">
                                <h1 className="project-name">#Project 2</h1>
                                <a href='/' className='visit-link' target='_blank'>Visit</a>
                                <a href='/' className='btn project-link' target='_blank'>Github link</a>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src={project3} className='project-img' alt="" />
                            <div className="content">
                                <h1 className="project-name">#Project 3</h1>
                                <a href='/' className='btn project-link' target='_blank'>Github link</a>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src={project4} className='project-img' alt="" />
                            <div className="content">
                                <h1 className="project-name">#Project 4</h1>
                                <a href='/' className='visit-link' target='_blank'>Visit</a>
                                <a href='/' className='btn project-link' target='_blank'>Github link</a>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src={project5} className='project-img' alt="" />
                            <div className="content">
                                <h1 className="project-name">#Project 5</h1>
                                <a href='/' className='visit-link' target='_blank'>Visit</a>
                                <a href='/' className='btn project-link' target='_blank'>Github link</a>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src={project6} className='project-img' alt="" />
                            <div className="content">
                                <h1 className="project-name">#Project 6</h1>
                                <a href='/' className='visit-link' target='_blank'>Visit</a>
                                <a href='/' className='btn project-link' target='_blank'>Github link</a>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        )
    }
}

export default Project
