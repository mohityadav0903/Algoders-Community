import React from "react";
import './About.css';

function About(){
    return (
        <> 
        <div id="section2" >
        <div className="container ">
          <div className="row h-100 align-items-center ">
            <div className="col-lg-6  text-center ">
              <h1 className="display-4 fw-bold">About us</h1>
              <p className="lead  mb-0">We are the team of talented marketing persons.</p>
              <p className="lead ">To know more <a href="#" className="text-muted">
                  <u>Click here</u></a>
              </p>
            </div>
            <div className="col-lg-6 d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt=""
                className="img-fluid "/></div>
          </div>
        </div>
      </div>
    
      <div className=" py-5 ">
        <div className="container">
          <div className="row align-items-center my-3">
            <div className="col-lg-6  text-center"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Save your costings</h2>
              <p className="font-italic  mb-4">We provide cost friendly services to save your daily costings.</p><a href="#"
                className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-sm-first my-3"><img
             src="https://bootstrapmade.com/demo/templates/Butterfly/assets/img/hero-img.png" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto order-2"><img src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png" alt=""
                className="img-fluid mb-4 mb-lg-0 my-3" /></div>
            <div className="col-lg-6 text-center"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Transformation to marketing world</h2>
              <p className="font-italic  mb-4">Now you don't need to hire sales persons permenently. We provide quality services on your demands.</p><a href="#"
                className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
            </div>
          </div>
        </div>
      </div> 
      </>
    )
}

export default About;