import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

//Project Item to create each project card using props
export default function ProjectItem(props) {
  return (
    <div className="col">
      <div className="project">
        <div className="project-content">
          <div className="project-title text-center">
            <a target="_blank" href={props.titleLink}>{props.title}</a>
            <a target="_blank" href={props.gitLink} className='mx-2'>
              <FontAwesomeIcon icon={['fab', 'github']} size="1x" />
            </a>
          </div>
          <div className="project-desc text-center mt-3">{props.desc}</div>
        </div>
        <img className="project-pic" src={props.img} alt={props.imgAlt}></img>
      </div>
    </div>
  );
}