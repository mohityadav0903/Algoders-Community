import React from 'react';
import './AlgodersHome.css';

export default function Home() {
    return (
        <div>
             <section id="hero" className="d-flex vh-100 ">
<div className="container ">
  <div className="row">
  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 w-90 text-center">
            <h1 className="text-center fw-bold  mx-1 mx-md-4 mt-4 justify-content-center"> Welcome to ALGODERS COMMUNITY</h1>
            <h2 className=" mx-1 mx-md-4 mb-3 mt-4 text-center" >A Small Place To Learn Code</h2>
            <div className="d-flex justify-content-center mx-4 mb-lg-4">
              <a href=""> <button  className="btn btn-primary btn-lg">Get started <i
                    className="fas fa-arrow-circle-right"></i> </button> </a>
            </div>
          </div>
    <div className="col-lg-6 order-1 order-lg-2 hero-img  text-center" data-aos="zoom-in" data-aos-delay="200">
      <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png" className="img-fluid animated" alt=""/>
    </div>
  </div>
</div>
</section>
    
        </div>
    )
}