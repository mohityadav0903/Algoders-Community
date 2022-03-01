import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { useLocation } from 'react-router-dom';
import TopbarDropDown from '../topbarDropDown/TopbarDropDown';

import './TopBar.css'
const TopBar = () => {
  const { user,dispatch } = useContext(Context);
    const {pathname} = useLocation();
    
     return(
     // <div className='top nav nav-bar'>
//         <div className='topLeft'>
//             <i className="topIcon fab fa-facebook"></i>
//             <i className="topIcon fab fa-twitter"></i>
//             <i className="topIcon fab fa-pinterest"></i>
//             <i className="topIcon fab fa-instagram"></i>
//         </div>
//         <div className='topCenter'>
//             <ul className='topList'>
//                 <li className='topListItem'>
//                     <Link to='/' className='link'>Home</Link>
//                 </li>
//                 <li className='topListItem'><Link to='/' className='link'>About</Link></li>
//                  <li className='topListItem'><Link to='/' className='link'>Contact</Link></li>
//                  <li className='topListItem'><Link to='/blogs' className='link'>Blogs</Link></li>
//                  {pathname==="/blogs"&& <TopbarDropDown/>  }
//                  {console.log(user)}
//                 {user && user.role==="admin"&&<li className='topListItem'><Link to='/write' className='link'>Write</Link></li>}
//           </ul>
//         </div>
//         <div className='topRight'>
//             {user ? (<>
//                 <Link to="/settings" className='link'>{user.profilePic ? <img className='topImg' src={user.profilePic} alt="" /> : <img className='topImg' src="https://th.bing.com/th/id/OIP.MLqa_eaUsAEh0ah2feV2swAAAA?w=149&h=169&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="" />}
//                 <span className='topListItem'>Hello {user.username}</span></Link>
//             </>
//             ) : (<>
//                 <ul className='topList'>
//                     <li className='topListItem'><Link to='/login' className='link'>Login</Link></li>
//                     <li className='topListItem'><Link to='/register' className='link'>register</Link></li>
//             </ul>
                
//             </>)}
           
//             {/* <i className="topSearchIcon fas fa-search"></i> */}
//         </div>
//   </div>;
<>


<div className="main-header">
        <nav className="navbarNav">
            <div className="brand">
                <Link to="/"><img src="https://algo-testsite.herokuapp.com/static/media/logo.816a87c884b2464fb6ce.jpeg" alt="logo" id="logo"/></Link>
            </div>
            <ul className="nav-list-items">
                <li className="nav-list-item">
                    <a href="/">Home</a>
                </li>
                
                <li className="nav-list-item">
                    <a href="/">Contact</a>
                </li>
                <li className="nav-list-item">
                    <a href="/">About</a>
                </li>
                <li className="nav-list-item">
                    <a href="/blogs">Blogs</a>
                </li>
                
                
                {user ? (<div className='user'>
                 <Link to="/settings" className='link '>{user.profilePic ? <img className='topImg' src={user.profilePic} alt="" /> : <img className='topImg' src="https://th.bing.com/th/id/OIP.MLqa_eaUsAEh0ah2feV2swAAAA?w=149&h=169&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="" />}
                 <span className='wlcmtxt '>Hello {user.username}</span></Link>
                  </div>
                  ) : (<>
                        <ul className='nav-list-item2'>

                        <li className="nav-list-item2">
                          <Link to='/login' >   
                            <button className='topListItem nav-item btn btn-primary text-black fw-bolder my-2 '>Login</button>
                          </Link>
                        </li>
                        <li className="nav-list-item2">
                          <Link to="/register"> <button className='topListItem btn btn-success text-black fw-bolder my-2'>Register</button></Link>
                        </li>
                        </ul>

                  </>)}
            </ul>
        </nav>
    </div>
 {pathname==="/blogs"&& <TopbarDropDown/>  }
 </>
     )
};

export default TopBar;
