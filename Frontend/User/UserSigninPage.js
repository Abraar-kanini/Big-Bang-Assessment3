import React from 'react';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';

export default function UserSigninPage() {
  const gradientCustom3Style = {
    background: 'linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))',
  };

  const gradientCustom4Style = {
    background: 'linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))',
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get the input values
    const userName = document.getElementById('form3Example1cg').value;
    const userEmail = document.getElementById('form3Example3cg').value;
    const userPhone = document.getElementById('form3Example4cg').value;
    const userGender = document.querySelector('input[name="gender"]:checked').value;
    const userLocation = document.getElementById('form3Example8').value;
    const userPassword = document.getElementById('form3Example9').value;

    // Create the user data object
    const userData = {
      user_Name: userName,
      user_Email: userEmail,
      user_Phone: userPhone,
      user_Gender: userGender,
      user_Location: userLocation,
      user_Password: userPassword,
    };

    try {
      // Make the POST request to the API
      const response = await axios.post('https://localhost:7125/api/Users', userData);

      // Handle the response
      console.log('User created successfully:', response.data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const validatePassword = (password) => {
    // Validate password using a regular expression
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div>
      <section
        className="vh-200 bg-image"
        style={{
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3" style={gradientCustom3Style}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          placeholder="Your Name"
                          maxLength="8" // Maximum 8 characters for username
                          required // Make it a required field
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Your Name (Max 8 characters)
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          placeholder="Your Email"
                          required // Make it a required field
                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                          Your Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          placeholder="Your Phone"
                          required // Make it a required field
                        />
                        <label className="form-label" htmlFor="form3Example4cg">
                          Your Phone
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        {/* Change input to radio buttons for gender */}
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="male"
                            value="Male"
                            required // Make it a required field
                          />
                          <label className="form-check-label" htmlFor="male">
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="female"
                            value="Female"
                            required // Make it a required field
                          />
                          <label className="form-check-label" htmlFor="female">
                            Female
                          </label>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example8"
                          className="form-control form-control-lg"
                          placeholder="Your Location"
                          required // Make it a required field
                        />
                        <label className="form-label" htmlFor="form3Example8">
                          Your Location
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example9"
                          className="form-control form-control-lg"
                          placeholder="Your Password"
                          required // Make it a required field
                          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                          // The pattern attribute contains the regex for password validation
                          // At least one lowercase letter, one uppercase letter, one digit, one special character, and at least 8 characters in total
                          onChange={(event) => {
                            const isValid = validatePassword(event.target.value);
                            event.target.setCustomValidity(isValid ? '' : 'Invalid password');
                          }}
                        />
                        <label className="form-label" htmlFor="form3Example9">
                          Your Password (At least 1 uppercase, 1 lowercase, 1 digit, 1 special character, and 8 characters)
                        </label>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                          required // Make it a required field
                        />
                        <label className="form-check-label" htmlFor="form2Example3g">
                          I agree all statements in{' '}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          style={gradientCustom4Style}
                        >
                          Register
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{' '}
                        <Link to="/userlogin" className="small text-muted">
                          Login here
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
