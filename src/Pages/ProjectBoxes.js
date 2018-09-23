import React, { Component } from 'react';
import './box.css';
import Fade from 'react-reveal/Fade';
import YouTube from 'react-youtube';

class ProjectBoxes extends Component {

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render() {
        const opts = {
            height: '290',
            width: '440',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return (

            <div className='ProjectBox'>
                <h2>
                   First three below are recent projects (last 8 months) where all development was done by myself. Previously managed the Workroom where I project managed and ran the dev team.
                </h2>


                <Fade>
                <div className='Project' >
                    <h3>Two Recent Dev Projects</h3>
                        <div className='Content'>
                            <p>Trump Top Trumps </p>
                            <li>Task 1</li>
                            <li>Task listed here</li>
                            <li>Task here too </li>
                            <li>Task long tasks list here1</li>
                            <li>Task 1</li>
                            <h3><a href='/' target='_self' className='link' rel='noopener'>Trump Top Trumps</a></h3>


                        </div>
                    <div className='Content'>
                        <p>Reprocad </p>
                        <li>Task 1</li>
                        <li>Task listed here</li>
                        <li>Task here too </li>
                        <li>Task long tasks list here1</li>
                        <li>Task 1</li>
                        <h3><a href='/' target='_self' className='link' rel='noopener'>Reprocad</a></h3>
                    </div>
                </div>
                <div className='Project2' >
                    <h3>Meatex Mobile Apps</h3>
                    <div className='Content'>
                        <p>Meat industry news, events and deals.</p>
                        <li>All development using React Native</li>
                        <li>Using Redux for state management</li>
                        <li>Connecting with WordPress for authorisation and content. </li>
                        <li>Push notifications for special alerts</li>
                        <li>Tests written using Enzyme and Jest.</li>

                    </div>
                    <div className='Content'>
                        <YouTube
                            videoId="2g811Eo7K8U"
                            opts={opts}
                            onReady={this._onReady}
                        />
                    </div>

                </div>


                <div className='Project3' >
                    <h3>Sport Society App</h3>
                    <div className='Content'>
                        <YouTube
                            videoId="2g811Eo7K8U"
                            opts={opts}
                            onReady={this._onReady}
                        />
                    </div>
                    <div className='Content'>
                        <p>Sports society consisting of 1000 members, this application allows users to respond on with their attendance to events.</p>
                        <li>All development using React Native</li>
                        <li>Using Redux for state management</li>
                        <li>Connecting with WordPress for authorisation and content. </li>
                        <li>Push notifications for special alerts</li>
                        <li>Tests written using Enzyme and Jest.</li>

                    </div>


                </div>


                <div className='Project4' >
                    <h3>eCommerce Workroom</h3>
                    <p>Scrum master and project management whilst the founder of the Workroom on a range of projects. Some front end development, all planning, prototyping, and client relationship management. </p>
                    <p>Worked with projects in Magento, WordPress, React Native, Laravel and Meteor for small start-ups and large brands. </p>

                    <div className='logos'>
                        <a href="https://uk.linkedin.com/in/neil-haffenden-1949b614" target='_blank' className='link' rel='noopener' ><img src='../../assets/workroom.png' className='icon'/></a>
                        <a href="https://github.com/NeilHaff" target='_blank' className='link' rel='noopener' ><img src='../../assets/smb.png' className='icon'/></a>
                        <a href="https://twitter.com/neilhaffenden" target='_blank' className='link' rel='noopener' ><img src='../../assets/techexpress.png' className='icon'/></a>
                        <a href="mailto:neil@thecode.company?Subject=Hello%20again" target='_blank' className='link' rel='noopener' ><img src='../../assets/cruiseo.png' className='icon'/></a>
                        <a href="mailto:neil@thecode.company?Subject=Hello%20again" target='_blank' className='link' rel='noopener' ><img src='../../assets/ASI.png' className='icon'/></a>
                    </div>

                </div>
                </Fade>
            </div>

        );
    }
}




export default ProjectBoxes;
