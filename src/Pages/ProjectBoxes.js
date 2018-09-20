import React, { Component } from 'react';
import './box.css';

class ProjectBoxes extends Component {
    render() {
        return (

            <div className='Boxes'>

                <div className='Project' >
                    <h3>One Project</h3>
                </div>
                <div className='Project2' >
                    <h3>Two Project</h3>
                </div>
                <div className='Project3' >
                    <h3>Three Project</h3>
                </div>
                <div className='Project4' >
                    <h3>Four Project</h3>
                </div>

            </div>

        );
    }
}

export default ProjectBoxes;
