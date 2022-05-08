import React, { useEffect } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <div id="footer" className="footer-top" style={{ background: "#FFF" }}>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-links" data-aos="fade-up">
              <h4>Useful Links</h4>
              <ul className="usefulLinks">
                <li className="font-bold">
                  <i className="fa fa-home"></i> <a href="/">Home</a>
                </li>
                <li>
                  <i className="fa fa-address-card"></i>{" "}
                  <a href="/about">About us</a>
                </li>
                <li>
                  <i className="fa fa-laptop-code"></i>{" "}
                  <a href="/blogs">Blogs</a>
                </li>
                <li>
                  <i className="fa fa-users"></i> <a href="/#team">Our Team</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/privacy-policy">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links" data-aos="zoom-in">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links" data-aos="zoom-in">
              <h4>Our Social Networks</h4>
              <div className="social-links mt-3">
                <a href="#" className="facebook" target={"_blank"}>
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/algoderscommunity/mycompany/"
                  className="linkedin"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://discord.gg/uVbgcvhc" className="discord">
                  <i class="fab fa-discord" target="_blank"></i>
                </a>
                <a
                  href="https://www.instagram.com/askalgoders/"
                  className="instagram"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-links" data-aos="zoom-in">
              <a href="#">
                <img src={Logo} alt="" className="img-fluid w-50" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container  footer-bottom clearfix">
        <div className="copyright" style={{ color: "#000" }}>
          &copy; Copyright{" "}
          <strong>
            <span>ALGODERS</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
