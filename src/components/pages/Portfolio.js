import React from 'react';
import ProjectItem from './ProjectItem';
import project1Img from "../assets/project-01.jpg";
import project2Img from "../assets/project-02.jpg";
import project3Img from "../assets/project-03.jpg";
import project4Img from "../assets/project-04.jpg";
import project5Img from "../assets/project-05.jpg";
import project6Img from "../assets/project-05.jpg";

//Still need to update project images and details
const project1 = {
  title: "Art House",
  desc: "Search your favorite artist and their artwork.",
  titleLink: "https://shaotangyen.github.io/art-house/",
  gitLink: "https://github.com/shaotangyen/art-house/",
  img: project1Img,
  imgAlt: "Project 1's image"
}
const project2 = {
  title: "urReview",
  desc: "Search your favorite artist and their artwork.",
  titleLink: "https://shaotangyen.github.io/art-house/",
  gitLink: "https://github.com/shaotangyen/art-house/",
  img: project2Img,
  imgAlt: "Project 1's image"
}
const project3 = {
  title: "The tech Blog",
  desc: "Search your favorite artist and their artwork.",
  titleLink: "https://shaotangyen.github.io/art-house/",
  gitLink: "https://github.com/shaotangyen/art-house/",
  img: project3Img,
  imgAlt: "Project 1's image"
}
const project4 = {
  title: "The Weather App",
  desc: "Search your favorite artist and their artwork.",
  titleLink: "https://shaotangyen.github.io/art-house/",
  gitLink: "https://github.com/shaotangyen/art-house/",
  img: project4Img,
  imgAlt: "Project 1's image"
}
const project5 = {
  title: "HR System",
  desc: "Search your favorite artist and their artwork.",
  titleLink: "https://shaotangyen.github.io/art-house/",
  gitLink: "https://github.com/shaotangyen/art-house/",
  img: project5Img,
  imgAlt: "Project 1's image"
}
const project6 = {
  title: "AWP Note Book",
  desc: "Search your favorite artist and their artwork.",
  titleLink: "https://shaotangyen.github.io/art-house/",
  gitLink: "https://github.com/shaotangyen/art-house/",
  img: project6Img,
  imgAlt: "Project 1's image"
}

export default function Portfolio() {
  return (
    <div class="container text-center mt-5">
      {/* title */}
      <h1>Port<span class="accent-color">folio</span></h1>
      {/* list of project demos using the ProjectItem class passing in props */}
      <div class="row">
        <ProjectItem {...project1} />
        <ProjectItem {...project2} />
        <ProjectItem {...project3} />
        <ProjectItem {...project4} />
        <ProjectItem {...project5} />
        <ProjectItem {...project6} />
      </div>
    </div>

  );
}