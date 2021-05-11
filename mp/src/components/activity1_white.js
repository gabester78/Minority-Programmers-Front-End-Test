import React, {useEffect, useState} from "react";
import Sidebar from "./courses_sidebar.js";
import NavBar2 from "./nav_bar2.js";
import LeftArrow from "../assets/Left_arrow.svg";
import RightArrow from "../assets/Right_arrow.svg";
import Activity1_hero_white from "../assets/Activity1_hero_white.png";
import Clock from "../assets/Clock_icon.svg";
import Activity1_background from "../assets/Activity1_background.svg";
import Modal_white from "./modal_white.js"

const Activity1 = () =>{
    useEffect(()=> {
        window.scrollTo(0, 0);
    });

    const[show, setShow] = useState(false);
    
    return(
        <main>
            <NavBar2 />
            <section className="activity1_container">
                <Sidebar />
                <section className="activity1_content">
                <Modal_white trigger={show} setTrigger={setShow}/>
                    <div className="activity1_hero" onClick={() => setShow(true)}>
                        <img src={Activity1_hero_white} alt="Graphic of a video" />
                    </div>
                    <div className="arrow_container">
                        <img src={LeftArrow} alt="Left arrow graphic" />
                        <img src={RightArrow} alt="Left arrow graphic" />
                    </div>
                    <div className="activity1_card" style={{ backgroundImage: `url(${Activity1_background})`, backgroundRepeat: 'no-repeat'}}>
                        <div className="button">
                            <p>In Progress</p>
                        </div>
                        <h1 className="title">Activity 1 - Join Clickup</h1>
                        <div className="time">
                            <img src={Clock} alt="Clock Icon" />
                            <h6>12 minutes</h6>
                        </div>
                        <h1>Header</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus curabitur id consectetur fringilla. Sed eget hendrerit convallis erat. Sit diam, tincidunt ultricies et mauris morbi. Morbi dolor semper proin eu aenean nunc egestas quam id. Feugiat elit sed erat purus faucibus risus. Elementum velit lorem ullamcorper ultricies velit, massa eu eget. Eget id libero tempus faucibus arcu ullamcorper purus tellus. Vulputate urna cras consectetur cras tellus imperdiet massa lacus at. Facilisis mollis eleifend aenean eget consectetur nisl arcu. Aenean fringilla velit malesuada et non pharetra tristique. Arcu consequat vitae nulla lacus, mattis. Ante diam in dapibus arcu, mauris arcu. Non ultricies nec volutpat dictum. Viverra gravida in egestas congue at vestibulum quis in. Nibh suspendisse mauris volutpat est ultrices mi. Lectus cursus euismod id dictum et eget pharetra in. Purus ullamcorper laoreet mauris pretium lacus ridiculus. Pulvinar vitae elit dignissim vel. Et commodo amet mi, sed vitae enim etiam rutrum bibendum.</p>
                        <h1>Header</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus curabitur id consectetur fringilla. Sed eget hendrerit convallis erat. Sit diam, tincidunt ultricies et mauris morbi. Morbi dolor semper proin eu aenean nunc egestas quam id. Feugiat elit sed erat purus faucibus risus. Elementum velit lorem ullamcorper ultricies velit, massa eu eget. Eget id libero tempus faucibus arcu ullamcorper purus tellus. Vulputate urna cras consectetur cras tellus imperdiet massa lacus at. Facilisis mollis eleifend aenean eget consectetur nisl arcu. Aenean fringilla velit malesuada et non pharetra tristique. Arcu consequat vitae nulla lacus, mattis. Ante diam in dapibus arcu, mauris arcu. Non ultricies nec volutpat dictum. Viverra gravida in egestas congue at vestibulum quis in. Nibh suspendisse mauris volutpat est ultrices mi. Lectus cursus euismod id dictum et eget pharetra in. Purus ullamcorper laoreet mauris pretium lacus ridiculus. Pulvinar vitae elit dignissim vel. Et commodo amet mi, sed vitae enim etiam rutrum bibendum.</p>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Activity1