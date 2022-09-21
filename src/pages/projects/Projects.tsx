import React from "react";
import ProjectCard from "../../components/project-card/ProjectCard";
import "./Projects.scss";
import random_img from "../../assets/images/random-img.png";

interface Project {
  title: string;
  img_path?: string;
  router_link: string;
  description: string;
}

const project1: Project = {
  title: "Project 1 - Designing a Smart Object UI",
  router_link: "/projects/project-1",
  description: "This is a description for project 1",
  img_path: random_img
};

function Projects(): JSX.Element {
  return (
    <div className="projects">
      <h1 className="projects__header">Projects</h1>
      <div className="projects__grid">
        <ProjectCard
          title={project1.title}
          router_link={project1.router_link}
          description={project1.description}
          img_path={project1.img_path}
        />
      </div>
    </div>
  );
}

export default Projects;
