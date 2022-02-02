import React from 'react';
import { useContext,useState } from 'react';
import SideBar from '../../components/sidebar/SideBar';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import axios from 'axios';
import './Settings.css';

const Setting = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

 const { user,dispatch } = useContext(Context);
  const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
  };
  const PF = "https://algo-backend.herokuapp.com/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("https://algo-backend.herokuapp.com/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("https://algo-backend.herokuapp.com/api/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return <div className='settings'>
    <div className="settingsWrapper">
      <div className="settingsTitle">
        <span className="settingsTitleUpdate">Update Your Account</span>
        <span className="settingsTitleDelete">DeleteAccount</span>
      </div>
      <form className="settingsForm" onSubmit={handleSubmit}>
        <label >Profile Picture</label>
        <div className="settingsPP">
        {user.profilePic?<img className='settingsPPImg' src={PF + user.profilePic} alt="" />:<img className='settingsPPImg' src="https://th.bing.com/th/id/OIP.MLqa_eaUsAEh0ah2feV2swAAAA?w=149&h=169&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="" /> }
        {/* <img
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}
              alt=""
            /> */}
          <label htmlFor="fileInput">
            <i className="settingsPPIcon far fa-user-circle"></i>
          </label>
          <input type="file" id='fileInput' style={{display:"none"}} required onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <label >Useraname</label>
        <input type="text" placeholder={user.username}required onChange={(e) => setUsername(e.target.value)} />
        <label >Email</label>
        <input type="text" placeholder={user.email} required onChange={(e) => setEmail(e.target.value)} />
        <label >Password</label>
        <input type="password"  onChange={(e) => setPassword(e.target.value)}/>
        <button className="settingsSubmitButton" type="submit">Update</button>
        {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
      </form>
      <li className='topListItem'><Link to='/' className='link' onClick={handleLogout}>{user&&"Logout" }</Link></li>
     </div>
    <SideBar/>
  </div>;
};

export default Setting;
