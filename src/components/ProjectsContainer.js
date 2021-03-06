import React from "react";
import ProjectCard from "../components/ProjectCard"
import "../styles/style.css"
import fungId from "../images/fung-id.png";
import babySittr from "../images/babysittr.png";
import empDir from "../images/emp-dir-1.png";
import budget from "../images/budget.png";
import workout from "../images/exercises.png";
import empTrack from "../images/employee-tracker-screenshot.png";






const projectCards = [
    {
        href: "https://fung-id.herokuapp.com/",
        image: fungId,
        alt: "fung.id deployed app",
        github: "https://github.com/mattrward1030/fung-id",
        figcaption: "fung.id repo",

    },
    {
        href: "https://polysnacktyl.github.io/project-1/",
        image: babySittr,
        alt: "babysitter schedule",
        github: "https://github.com/polysnacktyl/project-1",
        figcaption: "Babysittr repo",

    },
    {
        href: "https://mattrward1030.github.io/employee-directory/",
        image: empDir,
        alt: "employee directory homepage",
        github: "https://github.com/mattrward1030/employee-directory",
        figcaption: "employee directory repo",

    },
    {
        href: "https://gentle-sea-15352.herokuapp.com/",
        image: budget,
        alt: "budget tracker application",
        github: "https://github.com/mattrward1030/budget-tracker",
        figcaption: "budget tracker repo",

    },
    {
        href: "https://ancient-taiga-78237.herokuapp.com/",
        image: workout,
        alt: "workout tracker",
        github: "https://github.com/mattrward1030/workout-tracker",
        figcaption: "workout tracker repo",

    },

    {
        href: "https://youtu.be/s2cQnMxd1dY",
        image: empTrack,
        alt: "employee server side application",
        github: "https://github.com/mattrward1030/employee-tracker",
        figcaption: "employee server side repo",

    },
];



function ProjectsContainer() {
    return (
        <body>

            <div className="conatiner-fluid">
                <div className="row">

                    <div className="col-md-12 panel-right px-0">
                        <section className="projects section">
                            <h2 className="display-6 mb-5 mt-5 text-center">My Work</h2>
                            <div className="container-fluid">
                                <div className="row gy-5">
                                    {projectCards.map((item) => {
                                        return (
                                            <ProjectCard
                                                href={item.href}
                                                image={item.image}
                                                alt={item.alt}
                                                github={item.github}
                                                figcaption={item.figcaption}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>


        </body >

    )
}
export default ProjectsContainer;


