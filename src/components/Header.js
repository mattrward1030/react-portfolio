import React from "react";
import "../styles/style.css"
import { Link } from "react-router-dom";
import profile from "../images/profile-picture.jpeg";


const styles = {
    header: {
        fontFamily: "'Montserrat', sans- serif",
        margin: 0,
        minHeight: 50,
        textAlign: "center",
        // borderBottom: "10px solid #b3c0c9",
        color: "#54302b",
        textDecorationLine: "none",
        padding: "5px"
    },


};

function Header() {
    return (

        <div className="intro-left">
            <div className="container-fluid full-height">
                <div className="row align-items-center text-center full-height">
                    <div className="col">
                        <img src={profile} alt="profile" class="avatar" />
                        <p className="display-5">Matthew Ward</p>
                        <p className="display-6">Computer Programmer</p>
                        <Link to="/">
                            <a style={styles.header}>
                                HOME
                        </a>
                        </Link>
                        <Link to="/about">
                            <a style={styles.header}>
                                ABOUT ME
                        </a>
                        </Link>
                        <Link to="/resume">
                            <a style={styles.header}>
                                RESUME
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default Header;