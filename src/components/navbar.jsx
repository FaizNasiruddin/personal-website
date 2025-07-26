import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar__menu">
            <Link to="/">Home</Link>
            <Link to="/certificate">Certificate</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/About">About</Link>
        </div>
    </div>
  );
}
export default Navbar;
