import "./Register.css"
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { userSchema } from "../../validations/UserValidation";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [valid, setValid] = useState(true);

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
    setError(false);
    e.preventDefault();
    const body = { username, password, email };
    const isValid =createUser();
    if (isValid) {
      try {
        const response = await axios.post('https://algo-backend.herokuapp.com/api/auth/register', body);
        console.log(response);
        response.data && window.location.replace("/login");
      }
      catch (error) {
        console.log(error);
        setError(true);
      }
    }
};
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handelSubmit}>
        <label>Username</label>
          <input className="registerInput" type="text" placeholder="username"
          onChange={e=>setUsername(e.target.value)}/>
        <label>Email</label>
          <input className="registerInput" type="text" placeholder="email@email"
          onChange={e=>setEmail(e.target.value)}/>
        <label>Password</label>
          <input className="registerInput" type="password" placeholder="length between 6 and 10 characters "
        onChange={e=>setPassword(e.target.value)}  />
        <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton" type="submit">
          <Link to="/login" className="link">Login</Link>
        </button>
        {error && <p className="registerError">Username or email already exists</p>}
       {(!valid) && <p className="registerError">Please fill all the fields correctly</p>}
    </div>
    )
}