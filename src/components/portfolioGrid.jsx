import { Link } from 'react-router-dom';

function PortfolioGrid() {
  return (
    <div className="portfoliogrid">
      <a href="https://github.com/FaizNasiruddin/elearning">
        <div style={{background:'red'}}>
          <h2>Laravel + MySQL</h2>
          Learning Management System (LMS) for Tuition Centre 
       </div>
      </a>
      <a href="https://github.com/FaizNasiruddin/personal-website">
      <div style={{background:'blue'}}>
        <h2>React</h2>
        Personal Website 
       </div>
      </a>
       <a href="https://github.com/FaizNasiruddin/FroggerGame">
      <div style={{background:'green'}}>
        <h2>Android Studio + Java</h2>
        Frogger Game
       </div>
      </a>
       <div>
        Vue js Project Coming soon
       </div>
       <div>
        coming soon
       </div>
       <div>
        coming soon
       </div>
       <div>
        coming soon
       </div>
       <div>
        coming soon
    </div>
    </div>
  );
}
export default PortfolioGrid;
