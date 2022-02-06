import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { useLocation } from 'react-router-dom';
import TopbarDropDown from '../topbarDropDown/TopbarDropDown';
import './TopBar.css'

const TopBar = () => {
  const { user,dispatch } = useContext(Context);
    const {pathname} = useLocation();
    
<<<<<<< HEAD
     return <div className='top'>
=======
    return <div className='top nav nav-bar'>
>>>>>>> db64211814cc727da171b9186691e00d7daaa6d8
        <div className='topLeft'>
            <i className="topIcon fab fa-facebook"></i>
            <i className="topIcon fab fa-twitter"></i>
            <i className="topIcon fab fa-pinterest"></i>
            <i className="topIcon fab fa-instagram"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li className='topListItem'><Link to='/' className='link'>About</Link></li>
                 <li className='topListItem'><Link to='/' className='link'>Contact</Link></li>
                 <li className='topListItem'><Link to='/blogs' className='link'>Blogs</Link></li>
                 {pathname==="/blogs"&& <TopbarDropDown/>  }
                 {console.log(user)}
                {user && user.role==="admin"&&<li className='topListItem'><Link to='/write' className='link'>Write</Link></li>}
          </ul>
        </div>
        <div className='topRight'>
            {user ? (<>
                <Link to="/settings">{user.profilePic ? <img className='topImg' src={user.profilePic} alt="" /> : <img className='topImg' src="https://th.bing.com/th/id/OIP.MLqa_eaUsAEh0ah2feV2swAAAA?w=149&h=169&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="" />}</Link>
                <span className='topListItem'>Hello {user.username}</span>
            </>
            ) : (<>
                <ul className='topList'>
                    <li className='topListItem'><Link to='/login' className='link'>Login</Link></li>
                    <li className='topListItem'><Link to='/register' className='link'>register</Link></li>
            </ul>
                
            </>)}
           
            {/* <i className="topSearchIcon fas fa-search"></i> */}
        </div>
  </div>;
};

export default TopBar;
