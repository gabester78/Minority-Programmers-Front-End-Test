import React, { useEffect } from "react";
import NavBar from "./nav_bar.js"
import Left_arrow from "../assets/Arrow left.svg"
import Data from "../data.json"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Incubator_details = () => {
    useEffect(()=> {
        window.scrollTo(0, 0);
    });
    return (
        <main className="inc_details">
            <NavBar />
            <section className="header">
                <div className="header_details">
                    <NavLink to="/incubator">
                        <img src={Left_arrow} alt="back to incubator main arrow" />
                    </NavLink>
                    <div className="title">                        
                        <img src={Data[0].logo} alt="Mangoswap logo" />
                        <h5>{Data[0].title}</h5>
                    </div>
                </div>
                <div className="funds_container">
                    <div className="funds">
                        <div>
                            <h6>{Data[0].funds}</h6>
                            <p>{Data[0].completed}</p>
                        </div>
                        <p className="dollars">{Data[0].dollars}</p>
                    </div>
                    <div>
                        <img src={Data[0].bar} alt="Progress bar graphic"/>
                    </div>
                </div>
                <button className="header_button">Fund Startup</button>
            </section>
            <section className="content_container">
                <article class="sidebar">
                    <div className="divider">
                        <h4>Founded 17th May, 2015</h4>
                    </div>
                    <div className="team_details">
                        <div>
                            <p className="tags">Website</p>
                            <div className="social_container">
                                <h4>mangoswap.com</h4>
                                <a href="https://twitter.com/minorityprogram"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="https://www.facebook.com/MinorityProgrammers"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="https://twitter.com/minorityprogram"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                            </div>
                        </div>
                        <div className="other_details">
                            <p className="tags">Location</p>
                            <h4>San Francisco, California</h4>
                        </div>
                        <div className="other_details">
                            <p className="tags">Team Size</p>
                            <h4>100 - 500 people</h4>
                        </div>
                    </div>
                    <div className="team">
                        <h3>Meet the team</h3>
                        <div className="bio">
                            <div className="avatar"></div>
                            <div>
                                <h5>Edmund Kitan</h5>
                                <p className="tags">Founder</p>
                            </div>
                        </div>
                        <div className="bio">
                            <div className="avatar"></div>
                            <div>
                                <h5>Olarenwaju Cesar</h5>
                                <p className="tags">Co-Founder</p>
                            </div>
                        </div>
                        <div className="bio">
                            <div className="avatar"></div>
                            <div>
                                <h5>Uzo Amanda</h5>
                                <p className="tags">Head of Growth</p>
                            </div>
                        </div>
                        <div className="bio">
                            <div className="avatar"></div>
                            <div>
                                <h5>Donald Duke</h5>
                                <p className="tags">Head of Product</p>
                            </div>
                        </div>
                    </div>
                    <div className="tags_content_container">
                        <h3>Tags</h3>
                        <div className="tag_button_container">
                            <p>Crypto</p>
                            <p>Exchanges</p>
                            <p>NFT</p>
                            <p>Blockchain</p>
                        </div>
                    </div>
                </article>
                <section className="right_column">
                    <article className="about">
                        <div>
                            <h3>About startup</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
                        </div>
                        <div>
                            <h3>Vision</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
                        </div>
                    </article>    
                    <article className="startups">
                        <div>
                            <h3>Related startups</h3>
                        </div>
                        <div>
                            <Carousel className="carousel_container" responsive={responsive} >
                                {Data.map((cardDetail, index)=>{
                                    return  <div className="top_cards" key={`details-card-${index}`}>
                                                <div className="title">                        
                                                    <img src={cardDetail.logo} alt="Mangoswap logo" />
                                                    <h5>{cardDetail.title}</h5>
                                                </div>
                                            
                                                <div className="funds_container">
                                                    <h6>{cardDetail.funds}</h6>
                                                    <p>{cardDetail.completed}</p>
                                                </div>
                                                <p className="dollars">{cardDetail.dollars}</p>
                                                <img src={cardDetail.bar} alt="Progress bar graphic"/>
                                            </div>
                                })}
                            </Carousel>;
                        </div>
                    </article>
                </section>
            </section>
        </main>
    )
}

export default Incubator_details;