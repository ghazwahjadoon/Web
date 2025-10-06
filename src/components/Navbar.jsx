import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/Logo.png';

function Navbar()
{
    return(
      
<nav class="navbar navbar-light" style={{backgroundColor:"white"}}>
    <> <nav className="navbar navbar-expand-md " >
  <div className="container-fluid" style={{ height:"12vh",  width: "96vw"}}>
    <a className="navbar-brand" href="#"><img src={Logo} alt="Logo" style={{ height: "60px" }} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{fontFamily:"Broadway", color:"#2da5cdff"}}>GlOWAH<br />BEAUTY</a>
        </li>
         <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{color:"red"}}><b>SUMMER <br/>END SALE</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{fontFamily:"Bahnschrift"}}>LIPS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#" style={{fontFamily:"Bahnschrift"}}>FRAGRENCES</a>
        </li>
         <li className="nav-item">
          <a className="nav-link active " href="#" style={{fontFamily:"Bahnschrift"}}>EYES</a>
        </li>
         <li className="nav-item">
          <a className="nav-link active" href="#" style={{fontFamily:"Bahnschrift"}}>NAIL IT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#" style={{fontFamily:"Bahnschrift"}}>SKIN CARE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#" style={{fontFamily:"Bahnschrift"}}>FACE</a>
        </li>
        
        
      </ul>
      <form className="d-flex gap-2" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        <button type="button" class="btn btn-outline-danger">LOGIN</button>
       
      </form>
    </div>
  </div>
</nav>
 
 
    </>
     </nav>
     
     );

}
export default Navbar;