import React, { Component } from 'react';
import './Main.css';
import ProjectBoxes from './ProjectBoxes'

class Projects extends Component {
    render() {
        return (
            <div>
            <div className="App">

                <h3><a href='/' target='_self' className='link' rel='noopener'>Home</a></h3>

                <div className="Intro">
                    <h1>NEIL HAFFENDEN</h1>
                    <h1>Web Project Manager and Developer</h1>
                </div>
            </div>

                <ProjectBoxes />

                <h3><a href='mailto:neil@thecode.company?Subject=Hello%20again' target='_top' className='link' rel='noopener'>Contact Me</a></h3>
            </div>

        );
    }
}

export default Projects;
