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
<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div className="container-fluid ">
    <Link className="navbar-brand " to="/">
      Algoders Community</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className=' navbar-nav  mx-auto'>
                <li className='topListItem nav-item my-2 fw-bold'>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li className='topListItem nav-item my-2 fw-bolder'><Link to='/'   className='link'>About</Link></li>
                  <li className='topListItem nav-item my-2 fw-bold'><Link to='/' className='link'>Contact</Link></li>
                  <li className='topListItem nav-item my-2 fw-bold'><Link to='/blogs' className='link'>Blogs</Link></li>
                  {pathname==="/blogs"&& <TopbarDropDown/>  }
                  {console.log(user)}
                 {user && user.role==="admin"&&<li className='topListItem'><Link to='/write' className='link nav-item fw-bold'>Write</Link></li>}
           </ul>
         
        
             {user ? (<>
                 <Link to="/settings" className='link '>{user.profilePic ? <img className='topImg' src={user.profilePic} alt="" /> : <img className='topImg' src="https://th.bing.com/th/id/OIP.MLqa_eaUsAEh0ah2feV2swAAAA?w=149&h=169&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="" />}
                 <span className='topListItem fw-bold '>Hello {user.username}</span></Link>
             </>
             ) : (<>
                 <ul className='topList navbar-nav '>
                     <button className='topListItem nav-item btn btn-primary text-black fw-bolder my-2 '><Link to='/login' className='link'>Login</Link></button>
                    <button className='topListItem nav-item btn btn-success text-black fw-bolder my-2'><Link to='/register' className='link'>register</Link></button>
           </ul>
                
             </>)}
           
             {/* <i className="topSearchIcon fas fa-search"></i> */}
    </div>
  </div>
</nav>
     )
};

export default TopBar;
