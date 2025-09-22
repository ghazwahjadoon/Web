import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar()
{
    return(
    <> <nav className="navbar navbar-expand-lg " style={{backgroundColor: "pink"}}>
  <div className="container-fluid" style={{backgroundColor:"lavenderblush", height:"12vh", border:"1px solid  purple", width: "96vw"}}>
    <a className="navbar-brand" href="#" style={{color:"purple"}}><i>Glowah Beauty</i></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Cart</a>
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
 <h1 style={{ textAlign: 'center' , color:"rgb(170, 51, 106)",textShadow: "5px 5px 5px"}}><i>Glowah Beauty</i></h1>
 
    </>);

}
export default Navbar;