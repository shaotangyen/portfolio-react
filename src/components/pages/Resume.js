import React from 'react';
import resumeFile from "../../assets/ShaoTangYen_Dev_Resume.pdf";

export default function Resume() {
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="resume d-flex align-items-center">
        <div>
          <h1 className='text-center mb-3'>Resu<span className="accent-color">me</span></h1>
          <p className='text-center mb-4'>If you have any enquires or interest in what I do, feel free to reach out by filling out the Contact form, send me a text (check out Resume below) or message me on LinkedIn. I will get back to you as soon you possible. Cheers.</p>
          <h4 className="text-center accent-color mb-4"><a target="_blank" href={resumeFile}>Download my resume</a></h4>
          <h4 className='accent-color'>Front-end Proficiencies</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
          <h4 className='accent-color'>Back-end Proficiencies</h4>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>PWA</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB</li>
            <li>Webpack, IndexedDB</li>
          </ul>
          <h4 className='accent-color'>Other Software Skills</h4>
          <ul>
            <li>Java, C#, C++, Unity</li>
            <li>Adobe PS, Ai, Pr, Ae, Lr</li>
            <li>MS Office</li>
            <li>Google Drive</li>
            <li>Agile PM Tools</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
