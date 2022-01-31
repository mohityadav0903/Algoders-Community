import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css'

const TopBar = () => {
    const user=false;
    return <div className='top'>
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
                <li className='topListItem'><Link to='/write' className='link'>Write</Link></li>
                <li className='topListItem'><Link to='/' className='link'>{user&&"Logout" }</Link></li>
            </ul>
        </div>
        <div className='topRight'>
            {user ? <img className='topImg' src="https://usercontent1.hubstatic.com/13306390_f520.jpg" alt="" /> : (<>
                <ul className='topList'>
                    <li className='topListItem'><Link to='/login' className='link'>Login</Link></li>
                    <li className='topListItem'><Link to='/register' className='link'>register</Link></li>
            </ul>
                
            </>)}
           
            <i className="topSearchIcon fas fa-search"></i>
        </div>
  </div>;
};

export default TopBar;
