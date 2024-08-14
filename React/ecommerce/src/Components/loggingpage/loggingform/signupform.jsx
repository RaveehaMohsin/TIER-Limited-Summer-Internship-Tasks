import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loggingform.css';
import image from "../../../Assests/favicon.png"

export default function LoggingForm(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', { email, password, confirmPassword });
  };

  return (
    <div>
      <section id="login">
        <div className="login">
          <img src={image} alt="Logo" height="90px" />
          <h2>Register</h2>
          <h6>Register Yourself!</h6>
          <form className="form-group" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
                <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
                         

            <p>
              Have an account? <Link to="/login">Sign In!</Link>
            </p>

            <div>
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
