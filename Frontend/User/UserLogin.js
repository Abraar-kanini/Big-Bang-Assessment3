import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { AES, enc } from 'crypto-js';


export default function UserLogin() {
  const sectionStyle = {
    backgroundColor: '#9A616D',
  };

  const imgStyle = {
    borderRadius: '1rem 0 0 1rem',
  };

  const logoStyle = {
    color: '#ff6219',
  };

  const formLabelStyle = {
    letterSpacing: '1px',
  };

  const buttonStyle = {
    color: '#393f81',
  };

  // State to hold the username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = async () => {
    const apiUrl = 'https://localhost:7125/api/Token/User';
    const userData = {
      User_Name: username,
      User_Password: password,
    };

    try {
      const response = await axios.post(apiUrl, userData);
      const token = response.data;

      // Store the token in local storage
      localStorage.setItem('Token', token);
      localStorage.setItem('username',username);

      // Show success toast message
      toast.success('Login successful!'
       );
      navigate('/Home');
      

      // Once logged in, get the user_Id by Username and store it
      handleGetUserIdByUsername();
    } catch (error) {
      console.error('Error:', error.response);
      // Show error toast message
      toast.error(
        error.response?.data || 'Login failed. Please check your username and password.',
        {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    }
  };

  const handleGetUserIdByUsername = async () => {
    const apiUrl = 'https://localhost:7125/api/Users/GetUserIdByUsername';
    const usernameParam = encodeURIComponent(username);

    try {
      const response = await axios.get(`${apiUrl}?username=${usernameParam}`);
      const userId = response.data;

      // Store the user's ID in local storage
      // localStorage.setItem('userId', userId);

      const encryptedUserId = AES.encrypt(userId.toString(), 'your_secret_key').toString();
localStorage.setItem('userId', encryptedUserId);
const encryptedUserId1 = localStorage.getItem('user_id_encrypted');
const decryptedUserId = parseInt(AES.decrypt(encryptedUserId1, 'your_secret_key').toString(enc.Utf8), 10);

      // Show success toast message
     
    } catch (error) {
      console.error('Error:', error.response);
      // Show error toast message
      toast.error(
        error.response?.data || 'Failed to get User_Id. Please try again later.',
        {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    }
  };

  return (
    <div>
      <section className="vh-100" style={sectionStyle}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://images.pexels.com/photos/2412606/pexels-photo-2412606.jpeg?cs=srgb&dl=pexels-paulo-marcelo-martins-2412606.jpg&fm=jpg"
                      alt="login form"
                      className="img-fluid"
                      style={imgStyle}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={logoStyle}></i>
                          <span className="h1 fw-bold mb-0">Logo</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={formLabelStyle}>
                          Sign into your account
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                          <label className="form-label" htmlFor="form2Example17">
                            Username
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label className="form-label" htmlFor="form2Example27">
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            style={buttonStyle}
                            onClick={handleLogin}
                          >
                            Login
                          </button>
                        </div>

                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p className="mb-5 pb-lg-2" style={buttonStyle}>
                          Don't have an account?   <Link to="/UserSigninPage" className="small text-muted">
                          Register here
                        </Link>
                        </p>
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}
