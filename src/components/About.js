import React from "react";
import "../styles/style.css"


const styles = {
    header: {
        height: "100%",
        backgroundColor: "#ffe1cc",
    },
    p: {

    }
}
function About() {
    return (
        <header style={styles.header} className="intro">
            <h1 className="display-4 mb-5 section">About me:</h1>
            <p className="section" >
                Hello world...I am a computer programmer and recent graduate of the full stack front end bootcamp
                at UPenn. I am located in South Jersey, right outside of Philadelphia. Not only am I a
                programmer but also a full-time father to the most amazing boy in the
                entire world! I am chasing my dream of making a career in this field and I hope you follow along
                with me on my journey. My drive and passion for programming comes from two things I love in
                life, problem solving and technology. I have always been someone who looks at really just about
                anything and thinks to myself, how can I improve upon it. I had always had ideas of how to do
                this, whether it be building an entirely new application or bettering what already exists. I
                just didn't have the technical background to do so, now I am able to and it is truly exciting.
                Be
                sure to stop back often to see what
                I've been working on!
                    </p>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />





            <div style={styles.header} class="conatiner-fluid">
                <div class="col-md-12 panel-right footer">
                    <div className="container-fluid">
                        <dic className="row">
                            <div className="col-md-3 text-center"><a href="https://github.com/mattrward1030">Github</a></div>
                            <div className="col-md-3 text-center"><a
                                href="https://www.linkedin.com/in/matthew-ward-167b96209/">Linkedin</a></div>
                            <div className="col-md-3 text-center">mattrward1030@gmail.com</div>
                            <div className="col-md-3 text-center">856-473-1845</div>
                        </dic>
                    </div>
                </div>
            </div>


        </header >
    );

}


export default About;