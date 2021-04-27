import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectListing = projects.map(project =>{
    return (<ProjectItem {...project}/>)
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectListing}</div>
    </div>
  );
}

export default ProjectList;
