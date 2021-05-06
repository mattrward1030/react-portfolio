import React from "react";

const styles = {
    a: {
        color: "black",
        textUnderlineOffset: "4px"
    }

}


function ProjectCard(props) {
    return (
        <figure>
            <a href={props.href}>
                <img className="img-fluid thumbnail" src={props.image} alt={props.alt} />

            </a>
            <figcaption className="pt-2">
                <a href={props.github}>{props.figcaption}</a>
            </figcaption>
        </figure>
    )
}

export default ProjectCard;