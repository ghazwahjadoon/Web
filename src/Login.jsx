import 'bootstrap/dist/css/bootstrap.min.css';
function Login()
{
    return (
    <>  
       <div class="position-absolute top-50 start-50 translate-middle">
        <div style={{border:"2px solid plum", width: "500px",padding:"20px",
            height: "400px",
}}>
        <form className="row ">
            <div className='col-12'>
               <h3 style={{fontFamily:"Times New Roman",textAlign: "center",color:"plum"}}> ---LOG IN---</h3>
            </div>
  <div className="col-12 ">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div class="col-12">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <p style={{textAlign:"center"}}>Create an Account.</p>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">LOG IN</button>
  </div>
</form>
      </div>
    </div> 
    </>);
}
export default Login
