import axios from 'axios';
import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './Login.css'

const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const {user,dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
    console.log(user);
    return <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input className="loginInput" type="text" placeholder="Enter your username..." ref={userRef}/>
            <label>Password</label>
            <input className="loginInput" type="password" placeholder="Enter your password..." ref={passwordRef}/>
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton" type='submit'>
            <Link to='/register' className="link">Register</Link>
        </button>
    </div>;
};

export default Login;
