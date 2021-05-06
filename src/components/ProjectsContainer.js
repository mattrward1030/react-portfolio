import React from "react";
import ProjectCard from "../components/ProjectCard"
import fungId from "../images/fung-id.png";


const projectCards = [
    {
        href: "https://fung-id.herokuapp.com/",
        image: fungId,
        alt: "fung.id deployed app",
        github: "https://github.com/mattrward1030/fung-id",
        figcaption: "fung.id repo",

    },
];



function ProjectsContainer() {
    return (

        <div className="projects">
            <h2 className="display-6 mb-5">My projects:</h2>
            <div className="container-fluid">
                <div className="row gy-5">
                    <div className="col-md-6">
                        {projectCards.map((each, index) => {
                            return (
                                <ProjectCard
                                    href={each.href}
                                    image={each.image}
                                    alt={each.alt}
                                    github={each.github}
                                    figcaption={each.figcaption}
                                />
                            );
                        })}

                    </div>
                </div>
            </div>
        </div>

    )
}
export default ProjectsContainer;


{/* <div className="projects">
    <h2 className="display-6 mb-5">My projects:</h2>
    <div className="container-fluid">
        <div className="row gy-5">
            <div className="col-md-6">
                

            </div>
        </div>
    </div>
</div>  */}



{/* <figure>
                    <a href="https://fung-id.herokuapp.com/">
                        <img className="img-fluid thumbnail" src={fungId} alt="fung.id deployed app" />

                    </a>
                    <figcaption className="pt-2">
                        <a href="https://github.com/mattrward1030/fung-id">fung.id repo</a>
                    </figcaption>
                </figure> */}