import React from 'react'
import HeroImg from '../hero.png';
import "bootstrap/dist/css/bootstrap.min.css";
import Typed from 'react-typed';

const Hero = () => {
    return(
        <div className="hero" id="home">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <div className="hero-content">
                            <div className="hero-text">
                                <p>I'm</p>
                                <h1>Rajai Vishal</h1>

                                    <Typed 
                                        className="typed-text"
                                        strings={["Full Stack Developer", "Codder","Learner"]}  
                                        typeSpeed={40}
                                        backSpeed={60}
                                        loop
                                    />
                            </div>
                            <div className="hero-btn">
                                <a className="btn" href="">Hire ME</a>
                                <a className="btn" href="">Download CV</a>
                            </div>
                        </div>
                    </div>
                        <div className="col-sm-12 col-md-6 d-none d-md-block">
                            <div className="hero-image">
                                <img src={HeroImg} alt="Hero-image" />
                            </div>
                        </div>

                </div>
            </div>

        </div>
    );
};
export default Hero
