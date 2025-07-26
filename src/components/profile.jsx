import { FaGithub, FaWhatsapp, FaInstagram, FaLinkedin, FaLaptop, FaTools ,FaGraduationCap, FaHtml5, FaCss3Alt, FaPhp, FaJava, FaLaravel, FaReact, FaSass, FaBootstrap} from 'react-icons/fa';
import { IoLogoJavascript,IoLogoNodejs } from "react-icons/io5";
import { BsFiletypeXml } from "react-icons/bs";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiXampp, SiPostman, SiAndroidstudio } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

function Profile() {
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
              <h1>Hello, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Au.</h1>
              <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <br />
              <button>Download CV</button>
              <br />
              <br />
              <div className="profile__link">
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
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
            <li><BiLogoVisualStudio /> &nbsp; Visual Studio</li>
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
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
