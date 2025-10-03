function Signin()
{
    return(
        <>
          <div className="position-absolute top-50 start-50 translate-middle">
            <div style={{border:"2px solid lightpink", width: "500px",padding:"20px",
            height: "500px",
}}>
            <form className="row">
  <div className="col-12">
     <h3 style={{fontFamily:"Times New Roman",textAlign: "center",color:"lightpink"}}> ---SIGN IN---</h3>
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div class="col-12">
    
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
 
  
  <div className="col-12">
    <br />
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>

          </div>
          </div>
        </>
    );
}
export default Signin