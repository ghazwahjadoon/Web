import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';

function Navbar()
{
    return(
      
<nav class="navbar navbar-light" style={{backgroundColor:"rgb(255,254,250) "}}>
    <> <nav className="navbar navbar-expand-lg " >
  <div className="container-fluid" style={{ height:"12vh",  width: "96vw"}}>
    <a className="navbar-brand" href="#"><img src={logo} alt="Logo" style={{ height: "50px" }} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
         <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{color:"red"}}><b>SUMMER <br/>END SALE</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">lips</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Fragrences</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#">Eyes</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#">Nail It</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
 
 
    </>
     </nav>
     );

}
export default Navbar;