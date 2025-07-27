import { FaGithub, FaWhatsapp, FaInstagram, FaLinkedin, FaLaptop, FaTools ,FaGraduationCap, FaHtml5, FaCss3Alt, FaPhp, FaJava, FaLaravel, FaReact, FaSass, FaBootstrap} from 'react-icons/fa';
import { IoLogoJavascript,IoLogoNodejs } from "react-icons/io5";
import { BsFiletypeXml } from "react-icons/bs";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiXampp, SiPostman, SiAndroidstudio } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import React, { useState, useEffect } from 'react';


function Profile() {
  const messages = [
    "Hello, I would like to apply for an internship as an IT developer.",
    "I'm passionate about both frontend and backend development.",
    "Thank you for visiting my website."
  ];

  const [text, setText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const typeMessage = async () => {
      const message = messages[messageIndex];
      
      for (let i = 0; i <= message.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 40));
        if (isMounted) {
          setText(message.slice(0, i));
        }
      }

      // Wait before showing the next message
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (isMounted) {
        setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }
    };

    typeMessage();

    return () => {
      isMounted = false;
    };
  }, [messageIndex]);
  return (
    <>
      <div className="profile">
        <div className="profile__card">
          <div className="profile__picture">
            <img src="/images/faiz.png" alt="" />
            <div className="circle__1"></div>
            <div className="circle__2"></div>
          </div>

          <div className="profile__description">
            <div>
              <h1 style={{minHeight: "80px"}}>{text}</h1>
              <br />
              <p>I am a Bachelor of Computer Science student seeking an internship opportunity as a web or application developer. 
                I'm flexible with programming languages, frameworks, and tools.
                 I will try my best to follow the job flow and complete the tasks given responsibly while learning along the way.
                 I am available to start my internship from <span className='highlight'>10 August 2025</span>, and I am able to commit for a duration of <span className='highlight'>3-6 months.</span></p>
              <br />
              <a href="/resume.pdf" download>
                <button>Download Resume</button>
              </a>
              <br />
              <br />
              <div className="profile__link">
                <a href="https://github.com/FaizNasiruddin" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://wa.me/60176575292" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="profile__skill">
            <div>
              {/* <FaLaptop /> &nbsp; */}
              Skills
            </div>
           <ul>
            <li><FaHtml5 /> &nbsp; HTML</li>
            <li><FaCss3Alt /> &nbsp; CSS</li>
            <li><IoLogoJavascript /> &nbsp; Javascript</li>
            <li><FaPhp /> &nbsp; PHP</li>
            <li><FaJava /> &nbsp; Java</li>
            <li><BsFiletypeXml /> &nbsp; XML</li>
            <li><FaLaravel /> &nbsp; Laravel</li>
            <li><IoLogoNodejs /> &nbsp; Node.js</li>
            <li><FaReact /> &nbsp; React Js</li>
            <li><FaSass /> &nbsp; Sass</li>
            <li><FaBootstrap /> &nbsp; Bootstrap</li>
          </ul>
          </div>
          <div className="profile__tools"> 
            <div className='devider__1'></div>
            <div className='devider__2'></div>
            <div>
                {/* <FaTools/> &nbsp; */}
                Tools
            </div>
            <ul>
            <li><BiLogoVisualStudio /> &nbsp; Visual Studio Code</li>
            <li><DiVisualstudio /> &nbsp; Visual Studio</li>
            <li><SiXampp /> &nbsp; XAMPP</li>
            <li><SiPostman /> &nbsp; Postman</li>
            <li><FaGithub /> &nbsp; GitHub</li>
            <li><SiAndroidstudio /> &nbsp; Android Studio</li>
          </ul>
          </div>
          <div className="profile__experience">
            <div>
              {/* <FaGraduationCap/> &nbsp; */}
              Education
            </div>
            <ul>
              <li>Diploma in Computer Science (UNISEL)</li>
              <li>Bachelor in Computer Science (UNISEL)</li>
            </ul>        
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
