import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaUser, FaLock, FaEnvelope, FaMobile, FaEye, FaEyeSlash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [contactMethod, setContactMethod] = useState("email");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    navigate("/purpose-selection");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 position-relative"
      style={{
        width: "100vw",
        backgroundImage: `url('https://images.ctfassets.net/7k1x29d6usef/4OAAndGhHYo9nC3SQzdWqU/44f96cf8db8264ee518b5947356d64ab/Animated_GIF_Maker.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Faint Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }} 
      ></div>

      {/* Signup Card */}
      <div
        className="card shadow-lg p-4 mx-auto position-relative"
        style={{
          maxWidth: "400px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.9)",
          borderRadius: "10px",
        }}
      >
        <button className="btn btn-light btn-sm mb-3" onClick={() => navigate("/")}>
          <FaArrowLeft /> Back
        </button>

        <div className="text-center mb-3">
          <div className="rounded-circle p-3 d-inline-block" style={{ backgroundColor: "#5a3bc5", color: "white" }}>
            <FaUser size={30} />
          </div>
          <h3 className="mt-2" style={{ color: "#5a3bc5" }}>Create Account</h3>
          <p className="text-muted">Join us today and get access to all features</p>
        </div>

        <div className="btn-group w-100 mb-3" role="group">
          <button 
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

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">{contactMethod === "email" ? "Email Address" : "Mobile Number"}</label>
            <div className="input-group">
              <span className="input-group-text">{contactMethod === "email" ? <FaEnvelope /> : <FaMobile />}</span>
              <input
                type={contactMethod === "email" ? "email" : "tel"}
                className="form-control"
                name={contactMethod}
                value={formData[contactMethod]}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text"><FaLock /></span>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button className="btn btn-outline-secondary" type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <div className="input-group">
              <span className="input-group-text"><FaLock /></span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button className="btn btn-outline-secondary" type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className="btn w-100" 
            style={{ backgroundColor: "#5a3bc5", borderColor: "#5a3bc5", color: "white" }}
          >
            Create Account
          </button>
        </form>

        <div className="text-center mt-3">
          <span className="text-muted">Already have an account? </span>
          <button 
            className="btn btn-link text-decoration-none" 
            style={{ color: "#5a3bc5" }} 
            onClick={() => navigate("/login")}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
