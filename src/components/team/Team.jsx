import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Team() {
  useEffect(()=>{
    Aos.init({duration:500})
  })
  return (
    <div id="team" >
    <div className="container">
      <div className="row ">
        <div className=" text-center">
          <h2 className="display-4 fw-bold">Our team</h2>
        </div>
      </div>

      <div className="row text-center" data-aos="zoom-in-up">
        <div className="col-xl-3 col-sm-6 ">
          <div className="rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png"
              alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
            <h5 className="mb-0">Test Name</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
            <ul className="social">
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className=" rounded shadow-sm py-5 px-4"><img
              src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
            <h5 className="mb-0">Test Name</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 ">
          <div className=" rounded shadow-sm py-5 px-4"><img
              src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
            <h5 className="mb-0">Test Name</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item "><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>

    
        <div className="col-xl-3 col-sm-6">
          <div className=" rounded shadow-sm py-5 px-4"><img
              src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
            <h5 className="mb-0">Test Name</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
            <ul className="social mb-0 list-inline mt-3">
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
              <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
  
  );
}

export default Team;
