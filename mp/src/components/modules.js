import React from "react";
import Sidebar from "./courses_sidebar.js";
import NavBar2 from "./nav_bar2.js";
import Avatar from "../assets/Mod_avatar.svg";


const Modules = () => {
    return(
        <main>
        <NavBar2 />
            <section>
                <Sidebar />
            </section>
        </main>
    )
}

export default Modules