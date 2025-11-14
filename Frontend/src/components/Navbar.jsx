import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import Whitelogo from '../assets/Whitelogo.jpg';
import { FaUserLarge } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

function Navbar() {
   
  const handleClick = () => {
    console.log("Welcome to our Makeup Studio");
  };
         

  return (
    <div className="container-fluid m-0 p-0 ">
      <nav className="navbar navbar-expand-md navbar-light" style={{backgroundColor: "#fff5f8",height: "12vh", width: "100%" }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Whitelogo} alt="Logo" style={{ height: "60px" }} />
          </Link>

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
              <li className="nav-item"><Link className="nav-link active" to="/" style={{ fontFamily: 'Inter' , fontWeight:'bold'}}>HOME</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/services" style={{ fontFamily: 'Inter' , fontWeight:'bold'}}>SERVICES</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/gallery" style={{ fontFamily: 'Inter' , fontWeight:'bold'}}>SHOP</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/gallery" style={{ fontFamily: 'Inter' , fontWeight:'bold'}}>GALLERY</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/booking"style={{ fontFamily: 'Inter' , fontWeight:'bold'}}>BOOKING</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/aboutus" style={{ fontFamily: 'Inter' , fontWeight:'bold'}}>ABOUT US</Link></li>
            </ul>

            <form className="d-flex gap-2" role="search">
              <Link to="/booking" className="btn btn-outline-success">
  Book Now
</Link> 
            </form>

            <button className="btn btn-light ms-3"><Link to="/admindashboard" ><CiSearch size={22} /></Link></button>
            <Link to="https://www.google.com/maps/@34.2175367,73.3003512,11.61z?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D" className="btn btn-light ms-3">
               <FaLocationDot size={22} />
            </Link>
             <Link to="/login" className="btn btn-light ms-3">
              <FaUserLarge size={22} />
            </Link>
           
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
