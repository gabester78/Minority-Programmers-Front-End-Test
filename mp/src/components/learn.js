import React from "react";
import NavBar2 from "./nav_bar2.js"
import Learn_hero from "../assets/Learn_Hero.svg"
import LearnData from "../learn_data.json"
import { NavLink } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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

const Learn = () => {
    return(
        <main>
            <NavBar2 />
            <section>
                <img src={Learn_hero} alt="Graphic of a globe" />
                <div>
                    <h2>Learn high in demand IT Skills &#38; Get Crypto</h2>
                    <p>powered by <span>KoinStreet</span></p>
                </div>
            </section>
            <section>
                <article>
                    <div>
                        <label>
                            <input type="text" placeholder="What event are you looking for?" FontAwesomeIcon icon={faSearch} />
                        </label>
                        <input type="submit" value="Filter search" />
                    </div>
                </article>
            </section>
            <section>
                <article>
                    <h3>My Courses</h3>
                    <div className="line"></div>    
                </article>
                <article>
                    <div>
                        <Carousel className="carousel_container" responsive={responsive} >
                            {LearnData.map((cardDetail, index)=>{
                                return  <div className="course_cards">
                                            <div className="greenBTN">
                                                <div className="dot"></div>
                                                <p>{cardDetail.topBTN}</p>
                                            </div>
                                            <div className="title">                        
                                                <h5>{cardDetail.title}</h5>
                                                <p className="description">{cardDetail.description}</p>
                                            </div>         
                                            <NavLink to="/my_courses">                       
                                                <button className="blueBTN">{cardDetail.button}</button>
                                            </NavLink>    
                                            <p>{cardDetail.modules}</p>
                                            <img src={cardDetail.bar} alt="Progress bar graphic"/>
                                            <p>{cardDetail.completed}</p>
                                        </div>
                            })}
                        </Carousel>;
                    </div>
                </article>
            </section>
            <section>
                <article>
                    <h3>Featured Courses</h3>
                    <div className="line"></div>    
                </article>
                <article>
                    <div>
                        <Carousel className="carousel_container" responsive={responsive} >
                            {LearnData.map((cardDetail, index)=>{
                                return  <div className="course_cards">
                                            <div className="greenBTN">
                                                <div className="dot"></div>
                                                <p>{cardDetail.topBTN}</p>
                                            </div>
                                            <div className="title">                        
                                                <h5>{cardDetail.title}</h5>
                                                <p className="description">{cardDetail.description}</p>
                                            </div>         
                                            <NavLink to="/my_courses">                       
                                                <button className="blueBTN">{cardDetail.button}</button>
                                            </NavLink>    
                                            <p>{cardDetail.modules}</p>
                                            <img src={cardDetail.bar} alt="Progress bar graphic"/>
                                            <p>{cardDetail.completed}</p>
                                        </div>
                            })}
                        </Carousel>;
                    </div>
                </article>
                <button className="load_more">Load More</button>
            </section>
        </main>
    )
}

export default Learn;