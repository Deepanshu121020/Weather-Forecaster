import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import SignInwithGoogle from "./signInWithGoogle";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import './styles.css'; // Import the custom CSS

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (user) {
        console.log("User logged in Successfully");
        navigate("/application"); // Navigate to the application page
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
      } else {
        console.log("User not found");
        toast.error("User not found", {
          position: "bottom-center",
        });
      }
    } catch (error) {
      console.log("Error during login:", error.message);
      toast.error("Wrong credentials", {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center mb-4 gradient-text">Weather Forecaster</h1> {/* App Name with gradient */}
              <form onSubmit={handleSubmit}>
                <h3 className="text-center">Login</h3>

                <div className="mb-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn gradient-btn">
                    Submit
                  </button>
                </div>
                <p className="forgot-password text-right mt-3">
                  New user <a href="/register">Register Here</a>
                </p>
                <SignInwithGoogle />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
