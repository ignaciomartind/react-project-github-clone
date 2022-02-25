import logo from "../media/github-logo.png";
import "./Login.css";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login(props) {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Home");
  };

  const users = [
    {
      username: "admin",
      password: "1234",
    },
    {
      username: "admin2",
      password: "12345",
    },
    {
      username: "admin3",
      password: "12346",
    },
    {
      username: "admin4",
      password: "12347",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    var username = e.target[0].value;
    var password = e.target[1].value;

    const currentUser = users.filter(
      (user) => user.username === username && user.password === password
    );

    if (currentUser.length === 0) {
      setError(true);
    } else {
      handleNavigate();
    }
  };

  return (
    <div className="login">
      <img src={logo} alt="github" />
      <p>Sign in to GitHub</p>
      <div className="login-main">
        <div className="login-container">
          {error ? (
            <div className="login-error-container">
              <p>Incorrect username or password.</p>
              <button onClick={() => setError(false)}>X</button>
            </div>
          ) : (
            ""
          )}
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type={"text"}
              name="username"
              id="username"
              required
              className="login-input"
            />
            <div className="login-label-password">
              <label htmlFor="password">Password</label>
              <Link to="/decoration">Forgot password?</Link>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="login-input"
            />
            <input
              type={"submit"}
              value="Sign in"
              className="btn-green"
            ></input>
          </form>
        </div>
        <div className="login-new-user">
          <p>New to GitHub? </p> <Link to="/decoration">Create an account</Link>
        </div>
        <footer>
          <ul>
            <li>
              <Link to="/decoration">Terms</Link>
            </li>
            <li>
              <Link to="/decoration">Privacy</Link>
            </li>
            <li>
              <Link to="/decoration">Security</Link>
            </li>
            <li>
              <Link to="/decoration">Contact GitHub</Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
