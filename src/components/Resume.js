import React from "react";
import "../styles/style.css"
import resumeDownload from "../documents/Matthew-Ward-updated-resume.pdf"


const styles = {
    body: {
        backgroundColor: "#ffe1cc",
        minHeight: "500px"
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

        </div>
    );
}

export default Resume;