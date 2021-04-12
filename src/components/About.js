import React from 'react'
import AboutImg from "../about.jpg";
import {Animated} from "react-animated-css";
import ProgressBar from 'react-bootstrap/ProgressBar';

const About = () => {
    return(
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={AboutImg} alt="About Image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-header text-left">
                                <p>Learn About Me</p>
                                
                            </div>
                            <div className="about-text">
                                <p>
                                Hi there! I am Rajai Vishal. A passionate programmer, born and brought up in India. I am a Full Stack Web Developer with React.js, Redux, Express.js, and Node.js  as my tech stack.
                                Recenly I am Persuing  my Master of Computer Application in Brindavan College, Bangalore.
                                </p>
                                <p>I have completed 6 projects.Using internet is fun but using it in good sense can develop our mind so i decided to use it in proper way by developing the websites.</p>
                                <p>Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.</p>
                            </div>
                            <div className="skills">
                                <div className="skill-name">
                                    <p>Web Design</p><p>85%</p>
                                </div>
                                    <ProgressBar animated max={100} min={0} now={85}  />
                                <div className="skill-name">
                                    <p>HTML</p><p>95%</p>
                                </div>
                                
                                    <ProgressBar animated max={100} min={0} now={95}  />
                                
                                <div className="skill-name">
                                    <p>CSS</p><p>90%</p>
                                </div>
                                    <ProgressBar animated max={100} min={0} now={90}  />
                                <div className="skill-name">
                                    <p>JavaScript</p><p>80%</p>
                                </div>
                                    <ProgressBar animated max={100} min={0} now={80}  />
                            </div>
                            <a className="btn" href="">Learn More</a>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
        </Animated>
    )
}

export default About
