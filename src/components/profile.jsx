import { FaGithub, FaWhatsapp, FaInstagram, FaLinkedin, FaLaptop, FaTools ,FaGraduationCap, FaHtml5, FaCss3Alt, FaPhp, FaJava, FaLaravel, FaReact, FaSass, FaBootstrap, FaBuilding} from 'react-icons/fa';
import { IoLogoJavascript,IoLogoNodejs } from "react-icons/io5";
import { BsFiletypeXml } from "react-icons/bs";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiXampp, SiPostman, SiAndroidstudio } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import React, { useState, useEffect } from 'react';
import { MdEmail } from "react-icons/md";



function Profile() {
  const messages = [
  "Hello, I would like to apply for an internship as an software developer.",
  "I'm passionate about both frontend and backend development.",
  "Thank you for visiting my website."
];

const [text, setText] = useState("");
const [messageIndex, setMessageIndex] = useState(0);
const [showCursor, setShowCursor] = useState(true);

useEffect(() => {
  const cursorInterval = setInterval(() => {
    setShowCursor((prev) => !prev); // Toggle cursor
  }, 500);

  return () => clearInterval(cursorInterval);
}, []);

useEffect(() => {
  let isMounted = true;

  const typeMessage = async () => {
    const message = messages[messageIndex];
    for (let i = 0; i <= message.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 40));
      if (isMounted) {
        setText(message.slice(0, i));
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));

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
              <h1 style={{minHeight: "80px"}}>{text}<span style={{ opacity: showCursor ? 1 : 0 }}>|</span></h1>
              <br />
        <p>
  My name is Muhammad Faiz Bin Nasiruddin, a Bachelor of Computer Science student from Universiti Selangor (UNISEL), with a current CGPA of 3.91. I am seeking an internship opportunity as a web or application developer. I'm flexible with programming languages, frameworks, and tools. I will do my best to follow the job flow and complete tasks responsibly while continuing to learn along the way. I am available to start my internship from <span className='highlight'>10 August</span>, and I am able to commit for a duration of <span className='highlight'>3–6 months</span>.
</p>

              <br />
              <a href="documents/Muhammad Faiz.pdf" download>
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
   <a 
  href="https://mail.google.com/mail/?view=cm&to=faiznasiruddin8@gmail.com&su=Hello%20Faiz&body=I%20wanted%20to%20reach%20out%20to%20you%20about..."
  target="_blank" 
  rel="noopener noreferrer"
>
  <MdEmail />
</a>

              </div>
            </div>
          </div>
           <div className="profile__experience">
            <div>
              {/* <FaGraduationCap/> &nbsp; */}
              Education
            </div>
            <ul>
              <li><FaBuilding/> &nbsp; Bachelor in Computer Science</li>
              <li><FaBuilding/> &nbsp; Diploma in Computer Science</li>
            </ul>        
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
            {/* <li><IoLogoNodejs /> &nbsp; Node.js</li> */}
            <li><FaReact /> &nbsp; React Js</li>
            <li><FaSass /> &nbsp; Sass</li>
            <li><FaBootstrap /> &nbsp; Bootstrap</li>
          </ul>
          </div>
          <div className="profile__tools"> 
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
          <div style={{height: '200px'}}>

          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
