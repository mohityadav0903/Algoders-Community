import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { userSchema } from "../../validations/UserValidation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
import Spinner from "react-bootstrap/Spinner";

const initialInputData = {
  username: "",
  email: "",
  password: "",
};

export default function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or more")
      .max(10, "Password must be 10 characters or less")
      .required("Password is required!"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
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

  const handleSignUp = async (values) => {
    try {
      const response = await axios.post(
        "https://algo-backend.herokuapp.com/api/auth/register",
        values
      );
      console.log(response);
      response.data && window.location.replace("/login");
      resetForm({ username: username, email: email, password: password })
    } catch (error) {
      const { status } = error.response;
      resetForm({ username: username, email: email, password: password })
      if (status === 409) {
        handleFail("User already exists")
      } else {
        handleFail("Something went wrong")
      }
    }
  };

  const {isSubmitting, handleBlur, handleChange, values: {username, email, password}, resetForm, errors: { username: usernameError, password: passwordError, email: emailError}, handleSubmit} = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: ''
    },
    enableReinitialize: true,
    onSubmit: handleSignUp,
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
    <div className="register-container">
      <div className="register">
        <h1 className="register-title">Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
        <div className="input-wrap">
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
          </div>
          <div className="input-wrap">
            <input
              className="input"
              name="email"
              type="email"
              placeholder="Email*"
              value={email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
              {emailError && emailError ? (
                <span style={error}>{emailError}</span>
              ) : null}
          </div>
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
                <i
                  className="fa-regular fa-eye-slash"
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
          <div className="register-footer">
            <div className="form-text">
              <p>
                Already have an account? <Link to="/login">Login</Link>
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
}
