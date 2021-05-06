import React from "react";



const styles = {
    header: {
        fontFamily: "'Montserrat', sans- serif",
        margin: 0,
        background: "#020234",
        minHeight: 150,
        textAlign: "center",
        borderBottom: "4px solid red"
    },
    heading: {
        lineHeight: 2,
        fontSize: "2.5rem",
        color: "white",
        padding: "0 20px"
    },
    content: {
        fontSize: "1rem",
        color: "white"
    }
};

function Footer() {
    return (
        <div className="container-fluid">
            <dic className="row">
                <div className="col-md-3 text-center"><a href="https://github.com/mattrward1030">Github</a></div>
                <div class="col-md-3 text-center"><a
                    href="https://www.linkedin.com/in/matthew-ward-167b96209/">Linkedin</a></div>
                <div className="col-md-3 text-center">mattrward1030@gmail.com</div>
                <div className="col-md-3 text-center">856-473-1845</div>
            </dic>
        </div>
    );

}


export default Footer;