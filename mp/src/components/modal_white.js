import React from "react";
import Modal_avatar from "../assets/Modal_Avatar.svg"
import { NavLink } from "react-router-dom";

const Modal = (props) => {
    return(props.trigger) ? (
        <div className="modal_white">
            <h1>Activity Completed!</h1>
            <img src={Modal_avatar} alt="Cartoon avatar of member" />
            <p>90% Complete</p>
            <h3>You just completed</h3>
            <h3 className="bold">Activity 1: Join Clickup</h3>
            <NavLink to="/activity_white">
                <button>Go to Next Lesson</button>
            </NavLink>
            <p className="cancel" onClick={() => props.setTrigger(false)}>Cancel</p>
        </div>
    ) : "";
}

export default Modal;