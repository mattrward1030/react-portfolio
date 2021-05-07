import React from "react";




function ProjectCard(props) {
    return (

        <div className="col-md-6">
            <figure>
                <a href={props.href} rel="noreferrer" target="_blank">
                    <img className="img-fluid thumbnail" src={props.image} alt={props.alt} />

                </a>
                <figcaption className="pt-2">
                    <a href={props.github} rel="noreferrer" target="_blank">{props.figcaption}</a>
                </figcaption>
            </figure>
        </div>

    )
}

export default ProjectCard;