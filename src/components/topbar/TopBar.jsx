import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Scroll from "react-scroll";
import { Context } from "../../context/Context";
import { useLocation } from "react-router-dom";
import TopbarDropDown from "../topbarDropDown/TopbarDropDown";
import Aos from "aos";
import "aos/dist/aos.css";
import "./TopBar.css";

const ScrollLink = Scroll.Link;

const TopBar = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  const { user, dispatch } = useContext(Context);
  const { pathname } = useLocation();

  return (
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
      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top text-white py-1 top flex d-flex"
        style={{ background: "#001329" }}
      >
        <div className="container-fluid  ">
          {user ? (
            <div className=" user">
              <Link to="/settings" className="link ">
                {user.others.profilePic ? (
                  <img className="topImg" src={user.others.profilePic} alt="" />
                ) : (
                  <img
                    className="topImg"
                    src="https://th.bing.com/th/id/OIP.MLqa_eaUsAEh0ah2feV2swAAAA?w=149&h=169&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                    alt=""
                  />
                )}
                <span className=" fw-bold wlcmtxt ">
                  Hello, {user.others.username}
                </span>
              </Link>
            </div>
          ) : (
            <>
              <ul className=" navbar-nav  topList ">
                <Link to="/login" className="link">
                  {" "}
                  <button className="topListItem nav-item btn btn-primary text-black fw-bolder my-2 ">
                    Login
                  </button>
                </Link>
                <Link to="/register" className="link">
                  {" "}
                  <button className="d-none d-lg-block topListItem nav-item btn btn-success text-black fw-bolder my-2">
                    Register
                  </button>
                </Link>
              </ul>
            </>
          )}

          {/* <i className="topSearchIcon fas fa-search"></i> */}

          <a className="navbar-brand mx-auto text-white ">
            Algoders <div className="d-none d-sm-inline"> Community</div>
          </a>
          <button
            className="navbar-toggler bg-light text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-white"
            id="navbarSupportedContent"
          >
            <ul className=" navbar-nav topList  ms-auto text-white">
              <li className="topListItem nav-item my-2 fw-bold">
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li className="topListItem nav-item my-2 fw-bolder">
                <ScrollLink
                  className="link"
                  smooth={true}
                  duration={500}
                  offset={-200}
                  to="about"
                >
                  About
                </ScrollLink>
              </li>
              <li className="topListItem nav-item my-2 fw-bold">
                <ScrollLink
                  className="link"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  to="contact"
                >
                  Contact
                </ScrollLink>
              </li>
              <li className="topListItem nav-item my-2 fw-bold">
                <Link to="/blogs" className="link">
                  Blogs
                </Link>
              </li>

              {user && user.others.role === "admin" && (
                <li className="topListItem">
                  <Link to="/write" className="link nav-item fw-bold">
                    Write
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {pathname === "/blogs" && <TopbarDropDown />}
    </>
  );
};

export default TopBar;
