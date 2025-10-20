import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from 'react-router-dom';

// Step 1: Define Zod schema for login validation
const loginSchema = z.object({
  email: z.string().email("Invalid email").nonempty("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

function Login() {     
  // Step 2: Set up useForm with Zod resolver
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  // Step 3: Form submit function
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <>  
      <div 
        className="container-fluid d-flex justify-content-center align-items-center vh-100" 
        style={{
          background: "linear-gradient(135deg, #ffe6f0, #ffd6eb, #ffeaf3)",
          fontFamily: "'Poppins', sans-serif"
        }}
      >
        <div className='col-12 col-sm-10 col-md-8 col-lg-4'>
          <div style={{
            backgroundColor: "white",
            borderRadius: "20px",
            boxShadow: "0 6px 20px rgba(255,182,193,0.4)",
            border: "1px solid #ffb6c1",
            width: "100%", 
            maxWidth: "500px", 
            padding: "35px",
            margin: "0 auto"
          }}>
            <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
              <div className='col-12'>
                <h3 style={{
                  fontFamily: "Times New Roman",
                  textAlign: "center",
                  color: "#ff69b4",
                  letterSpacing: "1px"
                }}>LOG IN</h3>
                <hr style={{ borderTop: "2px solid #ffb6c1", width: "50%", margin: "10px auto" }} />
              </div>

              {/* Email Input */}
              <div className="col-12">
                <label htmlFor="inputEmail4" className="form-label" style={{ color: "#e75480" }}>Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="inputEmail4" 
                  {...register("email")}
                  style={{
                    border: "1px solid #f5a6c5", 
                    borderRadius: "10px",
                    padding: "10px"
                  }}
                />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}
              </div>

              {/* Password Input */}
              <div className="col-12">
                <label htmlFor="inputPassword4" className="form-label" style={{ color: "#e75480" }}>Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="inputPassword4" 
                  {...register("password")}
                  style={{
                    border: "1px solid #f5a6c5", 
                    borderRadius: "10px",
                    padding: "10px"
                  }}
                />
                {errors.password && <p className="text-danger">{errors.password.message}</p>}
              </div>
              
              {/* Submit Button */}
              <div className="col-12 text-center mt-3">
                <button 
                  type="submit" 
                  className="btn"
                  style={{
                    backgroundColor: "#ff69b4",
                    color: "white",
                    borderRadius: "10px",
                    width: "120px",
                    fontWeight: "500",
                    transition: "0.3s",
                    border: "none"
                  }}
                >
                  LOG IN
                </button>
              </div>
            </form>

            <div className="text-center mt-4">
              <Link to="/Signin" style={{ color: "#e75480", textDecoration: "none" }}>
                Don’t have an account? <span style={{ fontWeight: "bold" }}>Sign up</span>
              </Link>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}

export default Login;
