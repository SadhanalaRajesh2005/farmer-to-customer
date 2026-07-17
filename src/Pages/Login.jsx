import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"

function Login({ setUser }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Please enter email and password");
      setSuccess("");
      return;
    }

    const loginData = {
      email,
      role: "farmer",
    };

    localStorage.setItem("loginData", JSON.stringify(loginData));

    setUser(loginData);

    setSuccess("Login Successful");
    setError("");

    setTimeout(() => {
      navigate("/farmer-dashboard");
    }, 1000);
  }

  function handleForgotPassword() {
    const enteredEmail = prompt("Enter your registered email:");

    if (!enteredEmail) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((u) => u.email === enteredEmail);

    if (user) {
      alert(`Your Password is: ${user.password}`);
    } else {
      alert("Email not found!");
    }
  }

  return (
    <div className="login-container">
      <h2>🌾 Farmer Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            className="show-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        

        <button type="submit" className="login-btn">
          Login
        </button>
         <div className="forgot-password">
          <button
            type="button"
            className="forgot-btn"
            onClick={handleForgotPassword}
          >
             Forgot Password?
          </button>
        </div>
      </form>

      {error && <p className="error">{error}</p>}

      {success && <p className="success">{success}</p>}
    </div>
  );
}

export default Login;