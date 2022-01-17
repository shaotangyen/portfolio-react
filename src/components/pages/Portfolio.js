import React from 'react';
import ProjectItem from './ProjectItem';
import project1Img from "../../assets/project-01.jpg";
import project2Img from "../../assets/project-02.jpg";
import project3Img from "../../assets/project-03.jpg";
import project4Img from "../../assets/project-04.jpg";
import project5Img from "../../assets/project-05.jpg";
import project6Img from "../../assets/project-06.jpg";

//Still need to update project images and details
const project1 = {
  title: "Art House",
  desc: "Search your favorite artist and their artwork. #Groupproject #JavaScript #jQuery #CSS #HTML #API",
  titleLink: "https://shaotangyen.github.io/art-house/",
  gitLink: "https://github.com/shaotangyen/art-house/",
  img: project1Img,
  imgAlt: "Image of the Art House project"
}
const project2 = {
  title: "urReview",
  desc: "Sign up and manage your favourite movie reviews. #Groupproject #JavaScript #CSS #Express #Handlebars #MySQL #Sequelize",
  titleLink: "https://gentle-springs-58149.herokuapp.com/",
  gitLink: "https://github.com/CPetrevski/urReview",
  img: project2Img,
  imgAlt: "Image of the urReview project"
}
const project3 = {
  title: "The Tech Blog",
  desc: "Sign up, write your blog and leave comments. #JavaScript #CSS #HTML #Express #Handlebars #MySQL #MVC #API",
  titleLink: "https://aqueous-scrubland-00021.herokuapp.com/",
  gitLink: "https://github.com/shaotangyen/14-the-tech-blog",
  img: project3Img,
  imgAlt: "Image of The Tech Blog project"
}
const project4 = {
  title: "J.A.T.E",
  desc: "A PWA-powered text editor and app. Edit your notes online and offline! #JavaScript #PWA #LocalStorage #IndexedDB #Webpack #ServiceWorker",
  titleLink: "https://polar-castle-95331.herokuapp.com/",
  gitLink: "https://github.com/shaotangyen/pwa-text-editor",
  img: project4Img,
  imgAlt: "Image of the J.A.T.E project"
}
const project5 = {
  title: "Social Media API",
  desc: "API of a social website. Users can create a friends, share thoughts & reactions. #JavaScript #MongoDB #MongooseODM #CURD",
  titleLink: "https://drive.google.com/file/d/1XkGM2AT0HR_L1C5SvXgHNixrdwa626Bi/view",
  gitLink: "https://github.com/shaotangyen/social-network-api",
  img: project5Img,
  imgAlt: "Image of the Social Media API project"
}
const project6 = {
  title: "Employement Management System",
  desc: "A CMS backend that helps you manage your departments, roles, employees. #JavaScript #Node #Inquirer #MySQL",
  titleLink: "https://drive.google.com/file/d/1DjCdYQxosbbftXZKKfjLhFZPvV4H8HOk/view",
  gitLink: "https://github.com/shaotangyen/Employee-Management-System",
  img: project6Img,
  imgAlt: "Image of the Employement Management System project"
}

export default function Portfolio() {
  return (
    <div className="container text-center mt-5">
      {/* title & description */}
      <h1 className='mb-3'>Portfo<span className="accent-color">lio</span></h1>
      <p className='portfolio mx-auto mb-5'>Mouse over on below projects to link to the application or Github page as you desire. If you have any questions, feel free to reach out to me via the Contact page.</p>
      {/* list of project demos using the ProjectItem class passing in props */}
      <div className="row">
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
