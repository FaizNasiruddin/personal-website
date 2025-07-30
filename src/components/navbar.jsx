import { Link , useLocation} from 'react-router-dom';
import { FaMoon , FaSun } from 'react-icons/fa';
import { useState } from 'react';

function Navbar() {

  const location = useLocation(); 

  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  }

  return (
    <div className="navbar">
        <div onClick={toggleMode}>
          {darkMode ? <FaMoon/> : <FaSun/>}
        </div>
        <div className="navbar__menu">
            <Link className={location.pathname === '/' ? 'navbar__current' : ''} to="/">Home</Link>
            <Link className={location.pathname === '/certificate' ? 'navbar__current' : ''} to="/certificate">Certificate</Link>
            <Link className={location.pathname === '/portfolio' ? 'navbar__current' : ''}  to="/portfolio">Portfolio</Link>
            {/* <Link to="/About">About</Link> */}
        </div>
        <div></div>
    </div>
  );
}
export default Navbar;
