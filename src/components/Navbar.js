
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/js/bootstrap.js';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Navbar_comp() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className='container'>
    <Link className="navbar-brand container " to="/">First Framework</Link>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto ">
        <li className="nav-item ">
          <Link className="nav-link" to="About">About </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Portfello">Portfello</Link>
        </li>
       
         <li className="nav-item">
          <Link className="nav-link" to="Contact">Contact</Link>
        </li>
      </ul>
  
    </div>
    </div>
  </nav>
  );
}

export default Navbar_comp;