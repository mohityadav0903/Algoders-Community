import React ,{useEffect} from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.jpeg'
import Aos from "aos";
import "aos/dist/aos.css";


function Footer() {
    useEffect(()=> {
        Aos.init({ duration: 1500 ,startEvent:'DOMContentLoaded' , delay:0, mirror:false, easing:'ease-in'});
    })

    return (
    
        <div id="footer" className="footer-top bg-black" data-aos="fade-up"> 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,224L48,218.7C96,213,192,203,288,213.3C384,224,480,256,576,229.3C672,203,768,117,864,112C960,107,1056,181,1152,192C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul className='usefulLinks'>
                                <li className='font-bold'><i className="fa fa-home"></i> <a href="#">Home</a></li>
                                <li><i className="fa fa-address-card"></i> <a href="#">About us</a></li>
                                <li><i className="fa fa-laptop-code"></i> <a href="#">Blogs</a></li>
                                <li><i className="fa fa-users"></i> <a href="#">Our Team</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Social Networks</h4>
                            <div className="social-links mt-3">
                                <a href="#" className="facebook" target={'_blank'}><i className=" fab fa-facebook"></i></a>
                                <a href="https://www.linkedin.com/company/algoderscommunity/mycompany/" className="linkedin" target='_blank'><i class="fab fa-linkedin"></i></a>
                                <a href="https://discord.gg/uVbgcvhc" className="discord"><i class="fab fa-discord" target='_blank'></i></a>
                                <a href="https://www.instagram.com/askalgoders/" className="instagram" target='_blank'><i className=" fab fa-instagram"></i></a>
                             </div>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                         <img src={Logo} alt="" className='img-fluid w-50'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container  footer-bottom clearfix">
                <div className="copyright">
                    &copy; Copyright <strong><span>ALGODERS</span></strong>. All Rights Reserved
                </div>
                </div>
            </div>
            
            );
}

export default Footer;