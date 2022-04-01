import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import {FaDiscord ,FaTelegram ,FaLinkedin,FaGithub,FaTwitter,FaYoutube} from "react-icons/fa";
import Mentor from './Mentor';

function Join() {
  useEffect(()=>{
    Aos.init({duration:1000})
  })
  return (
    <div style={{background:"#001329"}} data-aos="fade-up">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f2f6fc"
            fillOpacity="1"
            d="M0,96L48,122.7C96,149,192,203,288,202.7C384,203,480,149,576,149.3C672,149,768,203,864,197.3C960,192,1056,128,1152,96C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
    <div className="container">
    <div className="row my-3 ">
    <div className=" text-center">
      <h2 className="display-4 fw-bold text-white">Join Us As A Mentor</h2>
    </div>
  </div>
    <div className="row align-items-center mb-5 ">
            <div className="col-lg-6  text-center" data-aos="fade-up"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light text-white fw-bolder">What You Can Get ?</h2>
              <p className="font-italic" style={{color:"#FFF"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, necessitatibus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, vel suscipit voluptate saepe laboriosam unde fuga dolore obcaecati in, sed voluptatem corporis eligendi! Beatae, labore!</p>

             <Link to="/Mentor" ><button href="#"
                className="btn btn-light px-3 rounded-pill shadow-sm">Apply Here</button></Link>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-sm-first my-3" data-aos="flip-left"><img

          src="https://bootstrapmade.com/demo/templates/Vesperr/assets/img/counts-img.svg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
          </div>
       <div className="row" data-aos="fade-down">
  <div className="col-sm-4 my-3">
    <div className="card text-center">
      <div className="card-body">
        <div href="#" style={{color:"#FF0000" ,fontSize:"3em"}} ><FaDiscord /></div>
        <h5  className="card-title" href="#">DISCORD SERVER</h5>
        <p className="card-text">Join the community on Discord for the interaction with students from all over the India.</p>
      </div>
    </div>
  </div>
  <div className="col-sm-4 my-3">
    <div className="card text-center">
      <div className="card-body">
      <div href="#"  style={{color:"#FF0000" ,fontSize:"3em"}} ><FaTelegram  /></div>
        <h5 className="card-title" href="#">TELEGRAM GROUP</h5>
        <p className="card-text" href="#">Join the Telegram group for all the updates on upcoming opportunities and interaction based on that.</p>
      </div>
    </div>
  </div>
  <div className="col-sm-4 my-3">
    <div className="card text-center">
      <div className="card-body">
      <div href="#"  style={{color:"#FF0000" ,fontSize:"3em"}}><FaLinkedin /></div>
        <h5 className="card-title" href="#">LINKEDIN</h5>
        <p className="card-text">Follow the official page of Algoders commiunity where we posts about all the upcoming workshops and events.</p>
      </div>
    </div>
  </div>
  <div className="col-sm-4 my-3">
    <div className="card text-center">
      <div className="card-body">
      <div href="#"  style={{color:"#FF0000" ,fontSize:"3em"}}><FaGithub /></div>
        <h5 className="card-title" href="#">OPEN SOURCE PROJECT</h5>
        <p className="card-text">This is the Github repository of Open Source Algoders Community Website built using HTML, CSS and JavaScript.</p>
      </div>
    </div>
  </div>
  <div className="col-sm-4 my-3">
    <div className="card text-center">
      <div className="card-body">
      <div href="#"  style={{color:"#FF0000" ,fontSize:"3em"}}><FaTwitter /></div>
        <h5 className="card-title" href="#">TWITTER</h5>
        <p className="card-text">Follow the official Page of the Algoders Community for the updated information.</p>
      </div>
    </div>
  </div>
  <div className="col-sm-4 my-3">
    <div className="card text-center">
      <div className="card-body">
      <div href="#"  style={{color:"#FF0000" ,fontSize:"3em"}}><FaYoutube /></div>
        <h5 className="card-title" href="#">YOUTUBE</h5>
        <p className="card-text">Subscribe to the Youtube channel for all the upcoming Webinars, Tech Events and Workshops.</p>
      </div>
    </div>
  </div>
</div> 
</div>
</div>
  );
}

export default Join;
