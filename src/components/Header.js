import React from "react";
import "../styles/style.css"
import { Link } from "react-router-dom";


const styles = {
    header: {
        fontFamily: "'Montserrat', sans- serif",
        margin: 0,
        background: "#748fa0",
        minHeight: 50,
        textAlign: "center",
        borderBottom: "4px solid #b3c0c9",
        color: "#ffe1cc",
        textDecorationLine: "none",
    },


};

function Header() {
    return (

        <header style={styles.header} >
            <div className="conatiner-fluid">
                <div className="row">

                    <h1 className="col-md-12">Welcome to My Portfolio</h1>
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
        </header >
    );

}


export default Header;