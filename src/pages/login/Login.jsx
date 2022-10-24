import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Login.css";
import SubmitButton from "../../components/buttons/SubmitButton";
import SpinnerButton from "../../components/buttons/SpinnerButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
import Spinner from "react-bootstrap/Spinner";


const Login = () => {
  const { dispatch } = useContext(Context);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or more")
      .required("Password is required!"),
  });

  const handleSuccess = (message) => {
    enqueueSnackbar(message, {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };
const handleFail = (message) => {
    enqueueSnackbar(message, {
      variant: "error",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };

  const handleSignIn = async (values) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://algo-backend.herokuapp.com/api/auth/login",
        {
          username: values.username,
          password: values.password
        }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      console.log(res);
      resetForm({ username: username, password: password })
    } catch (error) {
      const { status } = error.response;
      resetForm({ username: username, password: password })
      dispatch({ type: "LOGIN_FAILURE" });
      if (status === 401) {
        handleFail("Invalid username & password, please try again")
      } else {
        handleFail("Something went wrong")
      }
    }
  };

  const {isSubmitting, handleBlur, handleChange, values: {username, password}, resetForm, errors: { username: usernameError, password: passwordError}, handleSubmit} = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    enableReinitialize: true,
    onSubmit: handleSignIn,
    validationSchema,
  });

  const error = {
    color: "red",
    width: "100%",
    position: "relative",
    fontSize: "14px",
    top: "5px",
    left: "10px",
    textAlign: "left",
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
            value={username}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {usernameError && usernameError ? (
            <span style={error}>{usernameError}</span>
          ) : null}
          <div className="input-wrap">
            <div className="input-container">
              <input
                className="input input-password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password*"
                value={password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {passwordVisible ? (
                <i
                  className="fa-regular fa-eye"
                  onClick={() => {
                    setPasswordVisible(!passwordVisible);
                  }}
                ></i>
              ) : (
                <i className="fa-regular fa-eye-slash"
                  onClick={() => {
                    setPasswordVisible(!passwordVisible);
                  }}
                ></i>
              )}
            </div>
              {passwordError && passwordError ? (
                <span style={error}>{passwordError}</span>
              ) : null}
          </div>
          <div className="login-footer">
            <div className="form-text">
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>

            <button className="login-button" type="submit" disabled={isSubmitting}>
              {isSubmitting ? (<Spinner animation="border" variant="light"/>) : ('Login') }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
