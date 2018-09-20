import React, { Component } from 'react';
import './Main.css';
import ProjectBoxes from './ProjectBoxes'

class Projects extends Component {
    render() {
        return (
            <div>
            <div className="App">

                <h3><a href='https://www.reactivemanifesto.org/' target='_blank' className='link' rel='noopener'>Projects</a></h3>

                <div className="Intro">
                    <h1>NEIL HAFFENDEN</h1>
                    <h1>Web Project Manager and Developer</h1>
                </div>
            </div>

                <ProjectBoxes />

            </div>

        );
    }
}

export default Projects;
