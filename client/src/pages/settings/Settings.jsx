import React from 'react';
import SideBar from '../../components/sidebar/SideBar';
import './Settings.css';

const Setting = () => {
  return <div className='settings'>
    <div className="settingsWrapper">
      <div className="settingsTitle">
        <span className="settingsTitleUpdate">Update Your Account</span>
        <span className="settingsTitleDelete">DeleteAccount</span>
      </div>
      <form className="settingsForm">
        <label >Profile Picture</label>
        <div className="settingsPP">

          <img src="https://usercontent1.hubstatic.com/13306390_f520.jpg" alt="" />
          <label htmlFor="fileInput">
            <i className="settingsPPIcon far fa-user-circle"></i>
          </label>
          <input type="file" id='fileInput' style={{display:"none"}} />
        </div>
        <label >Useraname</label>
        <input type="text" placeholder='Krishnkant' />
        <label >Email</label>
        <input type="text" placeholder='krishnkantPachori@gmail.com' />
        <label >Password</label>
        <input type="password" />
        <button className="settingsSubmitButton">Update</button>
      </form>
     </div>
    <SideBar/>
  </div>;
};

export default Setting;
