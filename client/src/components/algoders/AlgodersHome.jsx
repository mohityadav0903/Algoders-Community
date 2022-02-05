import React from 'react';
import './AlgodersHome.css';

export default function Home() {
    return (
        <div>
             <section id="hero" className="d-flex h-100">
<div className="container">
  <div className="row">
    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
     <h1> WELCOME TO ALGODERS</h1>
       <p> A small place to learn code </p>
      <h2>Algoders community gives you a warm welcome, here we write blogs and provides tutorials of different programming languages.</h2>
      <div className="d-flex justify-content-center justify-content-lg-start">
        <a  className="btn-get-started scrollto">Get Started</a>
      </div>
    </div>
    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
      <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png" className="img-fluid animated" alt=""/>
    </div>
  </div>
</div>
</section>
    
        </div>
    )
}