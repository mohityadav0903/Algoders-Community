import React from 'react';
import { useContext,useState} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { userUpdateSchema } from '../../validations/UserValidation';
import axios from 'axios';
import './Settings.css';

const Setting = () => {
 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [valid,setValid] = useState(false);
 

  const { user, dispatch } = useContext(Context);
  const updatedUser = {
    userId: user._id,
    email,
    password,
  };
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const handleDeleteAccount = async () => {
  await  axios.delete(`https://algoders-backend.vercel.app/api/users/${user._id}`,{data:{"userId":user._id}}).then((res) => {<div>Your account has deleted</div>});
    handleLogout();
  };

  const createUser = async () => {
    const user = {
        password,
        email,
      };
      const isValid = await userUpdateSchema.isValid(user);
      setValid(isValid);
     return isValid;
    };

 const handleSubmit =async (e) => {
      e.preventDefault();
      dispatch({ type: "UPDATE_START" });
      console.log("hello");
      const data = new FormData();
     console.log(updatedUser);
   console.log(data);
   const isValid = createUser();
   if (isValid) {
     try {
       const res = await axios.put("https://algoders-backend.vercel.app/api/users/" + user._id, updatedUser);
       setSuccess(true);
       dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
     } catch (err) {
       dispatch({ type: "UPDATE_FAILURE" });
     }
   }
    };

  return (<div className='settings vh-80 text-center'>
    <div className="settingsWrapper ">
      <div className="settingsTitle justify-content-center ">
        <span className="settingsTitleUpdate">Update Your Account</span>
      </div>
      <form className="settingsForm justify-content-center py-5" onSubmit={handleSubmit}>
        <div className='field'>
          <label >Email</label>
          <input type="text" className='form-control text-red' placeholder={user.email} required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='field'>
          <label >Password</label>
          <input type="password" className='form-control' required onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="btn settingsSubmitButton" type="submit">Update</button>
        {success && (
          <span
            style={{ color: "green", textAlign: "center", marginTop: "20px" }}
          >
            Profile has been updated...
          </span>
        )}
      </form>
      <div className="py-3 ">
        <button className='btn btn-warning text-white mx-2'><Link to='/' className='link' onClick={handleLogout}>{user && "Logout"}</Link></button>
        <button className='btn btn-danger text-white mx-2'><Link to='/' className='link' onClick={handleDeleteAccount}>{user && "Delete Account"}</Link></button>
    </div>
    </div>
  </div>);
};

export default Setting;
