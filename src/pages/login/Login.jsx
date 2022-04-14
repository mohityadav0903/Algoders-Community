import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Login.css";
import SubmitButton from "../../components/buttons/SubmitButton";
import SpinnerButton from "../../components/buttons/SpinnerButton";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch } = useContext(Context);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!userRef.current.value || !passwordRef.current.value) {
      setError("Please fill all the required inforamtion");
      setLoading(false);
      return;
    }
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://algo-backend.herokuapp.com/api/auth/login",
        {
          username: userRef.current.value,
          password: passwordRef.current.value,
        }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      setLoading(false);
      console.log(res);
    } catch (error) {
      setLoading(false);
      const { status } = error.response;
      dispatch({ type: "LOGIN_FAILURE" });
      if (status === 401) {
        setError("Invalid username & password, please try again");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login" onSubmit={handleSubmit}>
        <h1 className="login-title">Login</h1>
        <form className="login-form">
          <input
            className="input"
            name="username"
            type="text"
            placeholder="Username*"
            ref={userRef}
          />
          <div className="input-container">
            <input
              className="input input-password"
              name="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="Password*"
              ref={passwordRef}
            />
            {passwordVisible ? (
              <i
                class="fa-regular fa-eye"
                onClick={() => {
                  setPasswordVisible(!passwordVisible);
                }}
              ></i>
            ) : (
              <i
                class="fa-regular fa-eye-slash"
                onClick={() => {
                  setPasswordVisible(!passwordVisible);
                }}
              ></i>
            )}
          </div>
          <div className="login-footer">
            <div className="form-text">
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
              {error && <p className="register-error">{error}</p>}
            </div>

            {loading ? (
              <button className="login-button" type="submit">
                Loading...
              </button>
            ) : (
              <button className="login-button" type="submit">
                Login
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
