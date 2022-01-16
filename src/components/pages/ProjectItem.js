import React from "react";

//Project Item to create each project card using props
export default function ProjectItem(props) {
  return (
    <div class="col">
      <div class="project">
        <div class="project-content">
          <div class="project-title text-center">
            <a target="_blank" href={props.titleLink}>{props.title}</a> <a href={props.gitLink}>(GIT)</a>
          </div>
          <div class="project-desc text-center mt-3">{props.desc}</div>
        </div>
        <img class="project-pic" src={props.img} alt={props.imgAlt}></img>
      </div>
    </div>
  );
}