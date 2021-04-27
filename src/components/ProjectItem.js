import React from "react";

function ProjectItem({ name, about, technologies, id }) {
  console.log(technologies)
  const techElements = technologies.map(tech => {
    return (<span>tech</span>)
  });

  return (
    <div key={id} className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techElements}
      </div>
    </div>
  );
}

export default ProjectItem;
