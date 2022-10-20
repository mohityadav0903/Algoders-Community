import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { userSchema } from "../../validations/UserValidation";

const initialInputData = {
  username: "",
  email: "",
  password: "",
};

export default function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState(null);
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState(initialInputData);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const { username, email, password } = inputData;
  const createUser = async () => {
    const user = {
      username,
      password,
      email,
    };
    const isValid = await userSchema.isValid(user);
    setValid(isValid);
    return isValid;
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const body = { username, email, password };
    const isValid = createUser();
    setLoading(true);
    if (isValid) {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://algo-backend.herokuapp.com/api/auth/register",
          body
        );
        console.log(response);
        response.data && window.location.replace("/login");
        setLoading(false);
      } catch (error) {
        setLoading(false);
        const { status } = error.response;
        if (status === 422) {
          setError("Please fill all the required inforamtion");
        } else if (password.length <= 7) {
          setError("Password must be greater than 8 char");
        } else if (status === 409) {
          setError("User already exists");
        } else {
          setError("Something went wrong");
        }
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register" onSubmit={handelSubmit}>
        <h1 className="register-title">Register</h1>
        <form className="register-form">
          <input
            className="input"
            name="username"
            type="text"
            placeholder="Username*"
            onChange={handleInputChange}
          />
          <input
            className="input"
            name="email"
            type="email"
            placeholder="Email*"
            onChange={handleInputChange}
          />
          <div className="input-container">
            <input
              className="input input-password"
              name="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="Password*"
              onChange={handleInputChange}
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
          <div className="register-footer">
            <div className="form-text">
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
              {error && <p className="register-error">{error}</p>}
            </div>

            {loading ? (
              <button className="register-button" type="submit">
                Loading...
              </button>
            ) : (
              <button className="register-button" type="submit">
                Register
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
