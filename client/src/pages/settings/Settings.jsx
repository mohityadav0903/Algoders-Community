import React from 'react';
import { useContext,useState} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import axios from 'axios';
import './Settings.css';

const Setting = () => {
 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success,setSuccess]=useState(false);
 

  const { user, dispatch } = useContext(Context);
  const updatedUser = {
    userId: user._id,
    email,
    password,
  };
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
 const handleSubmit =async (e) => {
      e.preventDefault();
      dispatch({ type: "UPDATE_START" });
      console.log("hello");
      const data = new FormData();
     console.log(updatedUser);
      console.log(data);
      try {
        await axios.post("https://algo-backend.herokuapp.com/api/upload", data);
      } catch (err) { }
      try {
        const res = await axios.put("https://algo-backend.herokuapp.com/api/users/" + user._id, updatedUser);
        setSuccess(true);
        dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      } catch (err) {
        dispatch({ type: "UPDATE_FAILURE" });
      }
    };

  return (<div className='settings'>
    <div className="settingsWrapper">
      <div className="settingsTitle">
        <span className="settingsTitleUpdate">Update Your Account</span>
        {/* <span className="settingsTitleDelete">DeleteAccount</span> */}
      </div>
      <form className="settingsForm" onSubmit={handleSubmit}>
    <label >Email</label>
        <input type="text" placeholder={user.email} required onChange={(e) => setEmail(e.target.value)} />
        <label >Password</label>
        <input type="password" required onChange={(e) => setPassword(e.target.value)} />
        <button className="settingsSubmitButton" type="submit">Update</button>
        {success && (
          <span
            style={{ color: "green", textAlign: "center", marginTop: "20px" }}
          >
            Profile has been updated...
          </span>
        )}
      </form>
      <li className='topListItem'><Link to='/' className='link' onClick={handleLogout}>{user && "Logout"}</Link></li>
    </div>
  </div>);
};

export default Setting;
