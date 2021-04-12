import React from 'react'
import Team1 from "../team-1.JPG";
const Team = () => {
    return(
        <div className="team" id="team">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Team</p>
                    <h2>Expert Team Members</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="team-item">
                            <div className="team-img"> 
                                <img src={Team1} alt="TeamImage"/>
                            </div>
                            <div className="team-text">
                                <h2>Rajai Vishal</h2>
                                <h4>Full Stack Developer</h4>
                                <p>
                                    Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them
                                </p>
                                <div className="team-social">
                                    <a className="btn" href="https://twitter.com/RajaiVishal2"><i className="fab fa-twitter"></i></a>
                                    <a className="btn" href="https://github.com/VishalRajai41"><i className="fab fa-github"></i></a>
                                    <a className="btn" href="https://www.linkedin.com/in/vishalrajai41/"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn" href="https://www.instagram.com/rajai_vish/"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
