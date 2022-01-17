import React from 'react';
import profilePic from "../../assets/Shao-photo-2.jpg";
import TypeAnimation from 'react-type-animation';

export default function About() {
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="about-me text-center d-flex align-items-center">
        <div>
          <h1>About <span className="accent-color">Me</span></h1>
          <img className="about-me-photo" src={profilePic} alt="An portrait of Shao Yen"></img>
          <p>
          This is <span className="accent-color">Shao</span>, currently based in Sydney, Australia. Been in digital marketing and event management in video game industry for 9 years. Studied <span className="accent-color">Full-Stack Web Development</span> bootcamp of Sydney University last half year and worked on many web projects which helped me developed essential skills. I also have a strong Computer Science and Math background.
          </p>
          <div className="fst-italic">
            {/* #HTML #CSS #JavaScript #Node #MySQL #React #Java #Photoshop #Premiere #AfterEffects #MSOffice */}
            {/* Found this interesting lib: https://www.npmjs.com/package/react-type-animation for typing animation */}
            <TypeAnimation
              cursor={false}
              sequence={ 
                ['#HTML #CSS #JavaScript #React #Node #Express #API #MySQL #MongoDB #IndexedDB #Java #UIDesign #Photoshop #Premiere #AfterEffects #MSOffice']
              }
              repeat='1'
              />
          </div>
          <TypeAnimation
              cursor={false}
              sequence={ 
                ['Hello, welcome!', 3000,
                  'Natigation on the top right menu', 3000,
                'Feel free to reach out', 10000]
              }
              cursor='true'
              repeat='Infinity'
              />
        </div>
      </div>
    </div>
  );
}
