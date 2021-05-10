import React from "react";
import Chevron from "../assets/Back_Chevron.svg";
import Green_check from "../assets/Green_checkmark.svg";
import White_check from "../assets/White_checkmark.svg"

const Courses_sidebar = () => {
    return(
        <main>
            <section>
                <div>                
                    <img src={Chevron} alt="Icon of a chevron back button" />
                    <p>Courses</p>
                </div>
                <h5>Intro to Blockchain</h5>
            </section>
            <section>
                <h5>Week 1</h5>
                <div>
                    <img src={Green_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
                <div>
                    <img src={Green_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
                <div>
                    <img src={White_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
            </section>
            <section>
                <h5>Week 2</h5>
                <div>
                    <img src={Green_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
                <div>
                    <img src={Green_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
                <div>
                    <img src={White_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
            </section>
            <section>
                <h5>Week 3</h5>
                <div>
                    <img src={Green_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
                <div>
                    <img src={Green_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
                <div>
                    <img src={White_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
            </section>
            <section>
                <h5>Week 4</h5>
                <div>
                    <img src={Green_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
                <div>
                    <img src={Green_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
                <div>
                    <img src={White_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
            </section>
            <section>
                <h5>Week 5</h5>
                <div>
                    <img src={Green_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
                <div>
                    <img src={Green_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
                <div>
                    <img src={White_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
            </section>
        </main>
    )
}

export default Courses_sidebar;