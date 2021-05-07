import React from "react";
import "../styles/style.css"
import resumeDownload from "../documents/Matthew-Ward-updated-resume.pdf"


const styles = {
    body: {
        backgroundColor: "#ffe1cc",
        minHeight: "730px"
    },
    h2: {
        textAlign: "center",
    }
}

function Resume() {
    return (
        <div>
            <section style={styles.body} className="resume section">
                <h2 style={styles.h2} className="display-6 mb-5">download my resume at the link below</h2>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12"></div>
                        <p style={styles.h2}><a href={resumeDownload}>download</a></p>
                    </div>
                </div>
            </section>
            <div class="conatiner-fluid">
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
        </div>
    );
}

export default Resume;