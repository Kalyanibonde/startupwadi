import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaUser, FaLock, FaEnvelope, FaMobile, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const navigate = useNavigate();
  const [contactMethod, setContactMethod] = useState("email");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({ email: "", mobile: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Dashboard");
  };

  return (
    <div
    className="d-flex justify-content-center align-items-center vh-100 position-relative"
    style={{
      width: "100vw",
      height: "100vh",
      backgroundImage: `url('https://images.ctfassets.net/7k1x29d6usef/4OAAndGhHYo9nC3SQzdWqU/44f96cf8db8264ee518b5947356d64ab/Animated_GIF_Maker.jpg')`,
      backgroundSize: "cover",    // Keeps it at the top of the screen
      backgroundRepeat: "no-repeat", // Prevents repeating
      backgroundAttachment: "fixed", // Keeps the background fixed
    }}
  >
    {/* Faint Overlay */}
    <div
      className="position-absolute top-0 start-0 w-100"
      style={{
        height: "100vh", // Limits overlay to only the top half
        backgroundColor: "rgba(255, 255, 255, 0.9)", // Makes background faint
      }}
    ></div>
  
    {/* Login Card */}
    <div
      className="card shadow-lg p-4 position-relative"
      style={{
        maxWidth: "400px",
        width: "100%",
        background: "rgba(255, 255, 255, 0.9)", // Keeps form readable
        borderRadius: "10px",
      }}
    >
  
        {/* Back Button */}
        <button onClick={() => navigate("/")} className="btn btn-link text-secondary mb-2">
          <FaArrowLeft /> Back
        </button>

        {/* Heading */}
        <h2 className="text-center" style={{ color: "#5a3bc5" }}>Welcome Back</h2>
        <p className="text-center text-muted">Sign in to access your account</p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Toggle Buttons */}
          <div className="btn-group w-100 mb-3">
        <button
          type="button"
          className="btn"
          style={{
            backgroundColor: contactMethod === "email" ? "#5a3bc5" : "transparent",
            borderColor: "#5a3bc5",
            color: contactMethod === "email" ? "white" : "#5a3bc5",
          }}
          onClick={() => setContactMethod("email")}
        >
          Email
        </button>
        <button
          type="button"
          className="btn"
          style={{
            backgroundColor: contactMethod === "mobile" ? "#5a3bc5" : "transparent",
            borderColor: "#5a3bc5",
            color: contactMethod === "mobile" ? "white" : "#5a3bc5",
          }}
          onClick={() => setContactMethod("mobile")}
        >
          Mobile
        </button>
      </div>


          {/* Email/Mobile Field */}
          <div className="mb-3">
            <label className="form-label">{contactMethod === "email" ? "Email Address" : "Mobile Number"}</label>
            <div className="input-group">
              <span className="input-group-text">{contactMethod === "email" ? <FaEnvelope /> : <FaMobile />}</span>
              <input type={contactMethod === "email" ? "email" : "tel"} name={contactMethod} value={formData[contactMethod]} onChange={handleChange} className="form-control" required />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text"><FaLock /></span>
              <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} className="form-control" required />
              <button type="button" className="btn btn-outline-secondary" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="d-flex justify-content-between mb-3">
        <div className="form-check">
          <input type="checkbox" id="rememberMe" className="form-check-input" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
          <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
        </div>
        <button type="button" className="btn btn-link text-decoration-none" style={{ color: "#5a3bc5" }} onClick={() => navigate("/ForgotPassword")}>Forgot password?</button>
      </div>

          {/* Submit Button */}
      <button type="submit" className="btn w-100" style={{ backgroundColor: "#5a3bc5", borderColor: "#5a3bc5", color: "white" }}>
        Login
      </button>
    </form>

        {/* Divider */}
    <div className="text-center my-3 text-muted">or continue with</div>


        {/* Google Login */}
        <button className="btn btn-outline-secondary w-100 mb-3 d-flex align-items-center justify-content-center">
          <FcGoogle className="me-2" /> Google
        </button>

        {/* Create Account */}
        <p className="text-center">
          Don't have an account? <button type="button" style={{ color: "#5a3bc5" }} className="btn btn-link text-'#5a3bc5' text-decoration-none" onClick={() => navigate("/SignIn")}>Sign Up</button>
        </p>
      </div>
    </div>
  );
}
