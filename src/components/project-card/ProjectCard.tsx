import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.scss";

interface Project {
  title: string;
  img_path?: string;
  router_link: string;
  description: string;
}

function ProjectCard(props: Project): JSX.Element {
  return (
    <div className="project-card">
      <div className="project-card__top">
        <h2 className="project-card__title">{props.title}</h2>
        <img
          className="project-card__thumbnail-img"
          src={props.img_path}
          alt="No Thumbnail"
        />
        <p className="project-card__description">{props.description}</p>
      </div>
      <div className="project-card__bottom">
        <div className="project-card__linkto">
          <Link className="project-card__link" to={props.router_link}>
            Click Here To View The Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
