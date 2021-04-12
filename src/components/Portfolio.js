import React from 'react'
import portfolio1 from '../portfolio-1.png';
import portfolio2 from '../portfolio-2.png';
import portfolio3 from '../portfolio-3.png';
import portfolio4 from '../portfolio-4.jpg';
import portfolio5 from '../portfolio-5.png';
import portfolio6 from '../portfolio-6.png';

const Portfolio = () => {
    return(
        <div className="portfolio" id="portfolio">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Portfolio</p>
                    <h2>My Excellent Portfolio</h2>
                </div>
                <div className="row">
                    <div className="col-12">
                         <ul id="portfolio-filter">
                            <li data-filter="*" class="filter-active">Web Design</li>
                        </ul>
                    </div>
                </div>
                <div className="row portfolio-container">
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src={portfolio1} alt="Portfolio-Iamage" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Personal Portfolio</h3>
                                <a className="btn" href="#" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src={portfolio2} alt="Portfolio-Iamage" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Online House & PG Price Prediction</h3>
                                <a className="btn" href="https://github.com/VishalRajai41/Online-House-and-PG-Price-Prediction" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src={portfolio3} alt="Portfolio-Iamage" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Dream Design</h3>
                                <a className="btn" href="https://github.com/VishalRajai41/Dream-Design" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-4 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src={portfolio4} alt="Portfolio-Iamage" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Sell On Auction</h3>
                                <a className="btn" href="https://github.com/VishalRajai41/Sell-On-Auction-Website" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-5 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src={portfolio5} alt="Portfolio-Iamage" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Amazone-Clone</h3>
                                <a className="btn" href="https://clone-abbb7.web.app/">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-6 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src={portfolio6} alt="Portfolio-Iamage" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Medicine Collection</h3>
                                <a className="btn" href="#" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
