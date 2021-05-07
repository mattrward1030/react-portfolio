import React from "react";
import "../styles/style.css"



// const styles = {
//     header: {
//         fontFamily: "'Montserrat', sans- serif",
//         margin: 0,
//         background: "#020234",
//         minHeight: 1,
//         textAlign: "center",
//         borderBottom: "4px solid red"
//     },
//     // heading: {
//     //     lineHeight: 2,
//     //     fontSize: "2.5rem",
//     //     color: "white",
//     //     padding: "0 20px"
//     // },
//     // content: {
//     //     fontSize: "1rem",
//     //     color: "white"
//     // }
// };

function Header() {
    return (

        <header >
            <div className="conatiner-fluid">
                <div className="row">
                    {/* <div className="col-md-4"></div> */}
                    <h1 className="col-md-12">react portfolio</h1>
                </div>
            </div>
        </header >
    );

}


export default Header;