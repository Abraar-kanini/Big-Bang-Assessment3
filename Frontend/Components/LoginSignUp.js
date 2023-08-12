import React, { useState } from 'react';
import '../LoginSignUp.css';
import axios from "axios";

export default function LoginSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const loginData = {
      agent_Name: email,
      agent_Password: password,
    };

    // Replace the base URL with your backend API URL
    const apiUrl = "https://localhost:7125/api/Token/Agent";

    axios.post(apiUrl, loginData)
      .then((response) => {
        const token = response.data;
        console.log("Token:", token);
        sessionStorage.setItem('token', token); // Save the token in sessionStorage
        // Optionally, you can use the token for authentication or redirect the user to a different page
        // For now, we'll just log a success message
        console.log("Login Successful");
      })
      .catch((error) => {
        console.error('Error:', error);
        // Show an error message to the user
        console.log("Login Failed");
      });
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input type="text" name="txt" placeholder="User name" required="" />
          <input type="email" name="email" placeholder="Email" required="" />
          <input type="password" name="pswd" placeholder="Password" required="" />
          <button>Sign up</button>
        </form>
      </div>

      <div className="login">
        <form onSubmit={handleSubmit}>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            required=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
