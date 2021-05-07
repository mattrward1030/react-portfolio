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
        color: "#ffe1cc"
    },
    // heading: {
    //     lineHeight: 2,
    //     fontSize: "2.5rem",
    //     color: "white",
    //     padding: "0 20px"
    // },
    // content: {
    //     fontSize: "1rem",
    //     color: "white"
    // }
};

function Header() {
    return (

        <header style={styles.header} >
            <div className="conatiner-fluid">
                <div className="row">
                    <Link style={{ textDecoration: "none" }} to="/about">
                        <a style={styles.header} href="#">
                            ABOUT
                        </a>
                    </Link>
                    <h1 className="col-md-12">react portfolio</h1>
                </div>
            </div>
        </header >
    );

}


export default Header;