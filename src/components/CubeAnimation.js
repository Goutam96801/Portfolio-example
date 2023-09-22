import React, { Component } from 'react'
import '../styles/CubeAnimation.css'

export class CubeAnimation extends Component {

    render() {
        return (
            <div>
                <div className="cube">
                    <div className="face front"><i className="fa-brands fa-square-js"></i></div>
                    <div className="face back"><i className="fa-brands fa-react"></i></div>
                    <div className="face top"><i className="fa-brands fa-node-js"></i></div>
                    <div className="face bottom"><i className="fa-brands fa-html5"></i></div>
                    <div className="face left"><i className="fa-brands fa-css3-alt"></i></div>
                    <div className="face right"><i className="fa-solid fa-database"></i></div>
                </div>
            </div>
        )
    }
}
export default CubeAnimation
