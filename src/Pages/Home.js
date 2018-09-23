import React, { Component } from 'react';
import './Main.css';

class Home extends Component {
    render() {
        return (

            <div className="App">

                    <h3><a href='./projects' target='_self' className='link' rel='noopener'>Projects</a></h3>


                <div className="Intro">
                    <h1>NEIL HAFFENDEN</h1>
                    <h1>Web Project Manager and Developer</h1>
                </div>
                <div style={{marginTop: 50}}>
                <h2 >
                    Interested in hearing about web or mobile apps as a developer, or short term project/product manager roles.
                </h2>
                </div>
                <div className='logos'>
                    <a href="https://uk.linkedin.com/in/neil-haffenden-1949b614" target='_blank' className='link' rel='noopener' ><img src='../../assets/linkedinwhite.png' className='icon'/></a>
                    <a href="https://github.com/NeilHaff" target='_blank' className='link' rel='noopener' ><img src='../../assets/github.png' className='icon'/></a>
                    <a href="https://twitter.com/neilhaffenden" target='_blank' className='link' rel='noopener' ><img src='../../assets/twitter.png' className='icon'/></a>
                    <a href="mailto:neil@thecode.company?Subject=Hello%20again" target='_blank' className='link' rel='noopener' ><img src='../../assets/email-open.png' className='icon'/></a>
                </div>

                <div className='para'>
                    <div className="col1">
                        <h4>Main Tech Skills-</h4>
                    </div>
                        <p> Javascript, CSS, React JS, React Native, Redux,  Enzyme + Jest </p>
                </div>

                <div className='para'>
                    <div className="col1">
                        <h4>Decent grasp of-</h4>
                    </div>
                    <p> Graph QL, Vue JS, Python, PHP, Firebase, AWS </p>
                </div>

                <div className='para'>
                    <div className="col1">
                        <h4> Experienced User of-</h4>
                    </div>
                        <p> Magento, WordPress, Google Adwords suite, Google Analytics, Google Webmaster Tools, Photoshop, Adobe XD, Github.</p>
                </div>

                <div className='para'>
                    <div className="col1">
                        <h4>Skills and Certifications- </h4>
                    </div>
                        <p>Certified Scrummaster, Google Adwords qualified , Magento Certified, Business Analysis, Business Development, e-commerce / online retail, SEO.
                        </p>
                 </div>

                <div className='SecondPara'>

               <h2>About Me</h2>

                    <p> A subscriber of the <a href='https://www.reactivemanifesto.org/' target='_blank' className='link' rel='noopener'>Reactive Manifesto</a> and a lean, scrum advocate. Scrum master and front end developer, fairly obsessive about bleeding edge tech like Redux.
                </p>
                 <p> Formerly, ran a web and software company, specialising in ecommerce and bespoke software, that successfully delivered projects for PLCs and innovative start-ups. Managed an in-house team until I got fed up with agency life.
                    </p>
                    <p> Live in Brighton, flexible on location for short term, and like to work on cool projects.
                    </p>

                </div>
                <div className='footer'>
                    <h3><a href='mailto:neil@thecode.company?Subject=Hello%20again' target='_top' className='link' rel='noopener'>Contact Me</a></h3>
                </div>

            </div>

        );
    }
}

export default Home;
