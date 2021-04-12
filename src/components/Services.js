import React from 'react'

const Services = () => {
    return(
        <div className="service" id="service">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>What I do</p>
                    <h2>Awesome Quality Services</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-laptop"></i>
                            </div>
                            <div className="service-text">
                                <h3>Web Design</h3>
                                <p>
                                    Web design is the visual aesthetics and page layout of a website.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-laptop-code"></i>
                            </div>
                            <div className="service-text">
                                <h3>Web Development</h3>
                                <p>
                                    A Web programming, is the creation of dynamic web applications.like Amazon.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fab fa-android"></i>
                            </div>
                            <div className="service-text">
                                <h3>Apps Development</h3>
                                <p>
                                    We can access the hardware components like Camera, GPS, and Accelerometer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-desktop"></i>
                            </div>
                            <div className="service-text">
                                <h3>Software Development</h3>
                                <p>
                                    Software development is the practice of organising the design and construction of software.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services
