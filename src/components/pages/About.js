import React from 'react';
import profilePic from "../assets/Shao-photo-2.jpg";
import TypeAnimation from 'react-type-animation';

export default function About() {
  return (
    <div class="container d-flex justify-content-center">
      <div class="vh-90 w-50 text-center d-flex align-items-center">
        <div>
          <h1>About <span class="accent-color">Me</span></h1>
          <img class="myphoto" src={profilePic} alt="An portrait of Shao Yen"></img>
          <p>
          This is <span class="accent-color">Shao</span>, currently based in Sydney, Australia. Been in digital marketing and event management in video game industry for 9 years. Studied <span class="accent-color">Full-Stack Web Development</span> bootcamp of Sydney University last half year and worked on many web projects which helped me developed essential skills. I also have a strong Computer Science and Math background.
          </p>
          <p class="fst-italic">
            {/* #HTML #CSS #JavaScript #Node #MySQL #React #Java #Photoshop #Premiere #AfterEffects #MSOffice */}
            {/* Found this interesting lib: https://www.npmjs.com/package/react-type-animation for typing animation */}
            <TypeAnimation
              cursor={false}
              sequence={ 
                ['#HTML #CSS #JavaScript #Node #MySQL #React #Java #Photoshop #Premiere #AfterEffects #MSOffice']
              }
              repeat='1'
              />
          </p>
          <p>
          <TypeAnimation
              cursor={false}
              sequence={ 
                ['Hello, welcome!', 3000,
                  'Natigation on the top right meun', 3000,
                'Feel free to reach out', 10000]
              }
              cursor='true'
              repeat='Infinity'
              />
          </p>
        </div>
      </div>
    </div>
  );
}
