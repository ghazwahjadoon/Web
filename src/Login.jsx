import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useRef, useEffect } from "react";
function Login()
    
{     const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Email:", email);
    console.log("Password:", password);
  };

    

    return (
    <>  
       <div className="position-absolute top-50 start-50 translate-middle ">
        <div className='col-12 col-sm-10 col-md-8 col-lg-12'>
        <div style={{border:"2px solid plum", width: "100%", maxWidth: "500px",padding:"20px",
            height: "400px",
}}>
        <form onSubmit={handleSubmit} className="row ">
            <div className='col-12 '>
               <h3 style={{fontFamily:"Times New Roman",textAlign: "center",color:"plum"}}> ---LOG IN---</h3>
            </div>
  <div className="col-12">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(e) => setEmail(e.target.value)}/>
  </div>
  <div class="col-12">
    <label  for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4" value={password}  onChange={(e) => setPassword(e.target.value)}/>
  </div>
  
  <div className="col-12 my-3">
    <button type="submit" className="btn btn-outline-dark">LOG IN</button>
  </div>
</form>
</div>
      </div>
    </div> 
    </>);
}
export default Login
