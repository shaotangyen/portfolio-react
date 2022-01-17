import React from "react";

//Project Item to create each project card using props
export default function ProjectItem(props) {
  return (
    <div className="col">
      <div className="project">
        <div className="project-content">
          <div className="project-title text-center">
            <a target="_blank" href={props.titleLink}>{props.title}</a> <a href={props.gitLink}>(GIT)</a>
          </div>
          <div className="project-desc text-center mt-3">{props.desc}</div>
        </div>
        <img className="project-pic" src={props.img} alt={props.imgAlt}></img>
      </div>
    </div>
  );
}