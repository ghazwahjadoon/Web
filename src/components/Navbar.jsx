import 'bootstrap/dist/css/bootstrap.min.css';

import Whitelogo from '../assets/Whitelogo.jpg';
import { FaUserLarge } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  const handleClick = () => {
    console.log("Welcome to our Makeup Studio");
  };
  return (
    
    <div className="container-fluid m-0 p-0">
      
      <nav className="navbar navbar-expand-md navbar-light" style={{ backgroundColor:" white",height: "12vh", width: "100%" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Whitelogo} alt="Logo" style={{ height: "60px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ gap: "30px" }}>
              
              
              <li className="nav-item"><a className="nav-link active" href="#" style={{  fontFamily: 'Inter', fontWeight:'bold' }}>HOME</a></li>
              <li className="nav-item"><a className="nav-link active" href="#" style={{ fontFamily: 'Inter', fontWeight:'bold' }}>SERVICES</a></li>
              <li className="nav-item"><a className="nav-link active" href="#" style={{fontFamily: 'Inter', fontWeight:'bold'}}>SHOP</a></li>
              <li className="nav-item"><a className="nav-link active" href="#" style={{ fontFamily: 'Inter' , fontWeight:'bold'}}>GALLERY</a></li>
              <li className="nav-item"><a className="nav-link active" href="#" style={{ fontFamily: 'Inter' , fontWeight:'bold'}}>BOOKING</a></li>
              <li className="nav-item"><a className="nav-link active" href="#" style={{ fontFamily: 'Inter' , fontWeight:'bold'}}>ABOUT US</a></li>
            </ul>

            <form className="d-flex gap-2" role="search">
              
              <button className="btn btn-outline-success" type="submit" onClick={handleClick}>BOOK NOW</button>
              
            </form>
            <button className="btn btn-light ms-3">
                 <CiSearch size={22} />
              </button>
            <button className="btn btn-light ms-3">
                 <FaLocationDot size={22} />
              </button>
            <button className="btn btn-light ms-3" >
                 <FaUserLarge size={22} />
              </button>
              
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
