import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    alert("Password reset link has been sent to your email. Please check your inbox.");
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
        <button 
          onClick={() => navigate("/SignIn")} 
          className="btn btn-link text-decoration-none text-muted d-flex align-items-center mb-3"
        >
          <FaArrowLeft className="me-2" /> Back to Login
        </button>

        {/* Header */}
        <h2 className="text-center text-dark fw-bold">Forgot your password?</h2>
        <p className="text-center text-muted">Enter your email and we'll send instructions to reset your password.</p>

        {/* Forgot Password Form */}
        <form onSubmit={handleResetPassword}>
          <div className="mb-3">
            <label className="form-label fw-medium">Your Email Address</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="Enter your email" 
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#5a3bc5] text-white py-3 rounded-lg font-bold hover:bg-[#4c2ba6] transition shadow-md"
          >
            Reset Your Password
          </button>
        </form>
      </div>
    </div>
  );
}
