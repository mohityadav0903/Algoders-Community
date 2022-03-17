import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useLocation } from "react-router-dom";
import TopbarDropDown from "../topbarDropDown/TopbarDropDown";
import Aos from "aos";
import "aos/dist/aos.css";
import "./TopBar.css";
import logo from "../../../src/assets/logo.jpeg";
const TopBar = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  const { user, dispatch } = useContext(Context);
  const { pathname } = useLocation();

  return (
    
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-black sticky-top text-white py-1 top flex d-flex">
        <div className="container-fluid  ">
          <img src={logo} class="navimg" />
          <a className="navbar-brand mx-auto text-white ">
            Algoders
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
                <Link to="/" className="link">
                  About
                </Link>
              </li>
              <li className="topListItem nav-item my-2 fw-bold">
                <Link to="/" className="link">
                  Contact
                </Link>
              </li>
              <li className="topListItem nav-item my-2 fw-bold">
                <Link to="/blogs" className="link">
                  Blogs
                </Link>
              </li>
              <li className="topListItem nav-item my-2 fw-bold">
                <Link to="/blogs" className="link">
                  Quizzes
                </Link>
              </li>
              {console.log(user)}
              {user && user.others.role === "admin" && (
                <li className="topListItem">
                  <Link to="/write" className="link nav-item fw-bold">
                    Write
                  </Link>
                </li>
              )}
            </ul>
          </div>
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
                  <button className="hvr-rectangle-in topListItem nav-item btn btn-primary text-black fw-bolder my-2 ">
                    Login
                  </button>
                </Link>
                <Link to="/register" className="link">
                  {" "}
                  <button className="hvr-rectangle-in d-none d-lg-block topListItem nav-item btn btn-success text-black fw-bolder my-2">
                    Register
                  </button>
                </Link>
              </ul>
            </>
          )}
        </div>
      </nav>
      {pathname === "/blogs" && <TopbarDropDown />}
    </>
  );
};

export default TopBar;
