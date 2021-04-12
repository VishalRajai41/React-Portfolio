import React from 'react'
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
    return(
        <div className="experience" id="experience">
            <div className="container">
                <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Resume</p>
                    <h2>Working Experience</h2>
                </header>          
                <div className="timeline">
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div timeline-text>
                            <div className="timeline-date">Oct-2017-Dec-2021</div>
                            <h2>Medicine Collection</h2>
                            <h4>Bhavnagar, Gujarat, IN</h4>
                            <p>
                                The best way to dispose of most types of unused or expired medicines (both prescription and over the counter) is to drop off the medicine at a drug Bank, location, or program immediately.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div timeline-text>
                            <div className="timeline-date">Oct-2018-Dec-2018</div>
                            <h2>Sell On Auction</h2>
                            <h4>Bhavnagar, Gujarat, IN</h4>
                            <p>
                                Nearly a thousand shops dotting the main road sell used goods. There is no guarantee, but there is a bargain to be driven at every store.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div timeline-text>
                            <div className="timeline-date">Dec-2018-Mar-2019</div>
                            <h2>Dream Design</h2>
                            <h4>Bhavnagar, Gujarat, IN</h4>
                            <p>
                                Becoming a freelancer is a fast and affordable way to start earning an income from home. Especially if you freelance a skill you already have, you can get started offering your services today.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div timeline-text>
                            <div className="timeline-date">Oct-2020-Jan-2021</div>
                            <h2>Online House and PG Price Predicaiton</h2>
                            <h4>Bangalore, Karnataka, In</h4>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div timeline-text>
                            <div className="timeline-date">2021</div>
                            <h2>Amazon-Clone</h2>
                            <h4>Bangalore, Karnataka, IN</h4>
                            <p>
                                Amazon-Clone Using ReactJs, NodeJs, ExpressJs,Mern-Stack.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div timeline-text>
                            <div className="timeline-date">2021</div>
                            <h2>Personal Portfolio</h2>
                            <h4>Bangalore, Karnataka, IN</h4>
                            <p>
                                Personal Portfolio Using  ReactJs, NodeJs, ExpressJs.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Experience
