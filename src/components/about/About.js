import React ,{ useEffect} from "react";
import './About.css';
import Aos from "aos";
import "aos/dist/aos.css";

function About(){

  //adding use effect for scrolling
  useEffect(()=> {
    Aos.init({duration:1000});
  },[]); 
    return (
       <div>
        
        <div className="container ">
          <div className="row h-100 align-items-center ">
            <div className="col-lg-6  text-left "  data-aos="fade-up">
              <h1 className="display-4 fw-bold">About us</h1>
              <p className="lead  mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum, vero quas veniam, amet itaque minima est architecto quaerat non molestiae voluptatum id consequatur harum voluptatibus laborum laudantium illum! Nulla obcaecati quasi ipsam reprehenderit doloremque natus sint rem, dicta et suscipit, cupiditate deserunt facilis, recusandae a quisquam commodi ipsa voluptatibus cumque. Eligendi, error, asperiores facere blanditiis placeat esse eaque quas nisi perspiciatis illum voluptatibus iure eius fugiat, veritatis sed voluptatem aliquid? Et doloribus saepe eligendi alias quidem voluptatum atque commodi!</p>
                <button className="btn btn-primary rounded-pill text-white">Know More</button>
            </div>
            <div className="col-lg-6 d-lg-block"  data-aos="zoom-in"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt=""
                className="img-fluid "/></div>
          </div>
          
        
      </div>
    
      <div style={{background: "#001329"}} data-aos="fade-up">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f2f6fc"
            fillOpacity="1"
            d="M0,96L48,122.7C96,149,192,203,288,202.7C384,203,480,149,576,149.3C672,149,768,203,864,197.3C960,192,1056,128,1152,96C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className="container">

          <div className="row align-items-center mb-5">
            <div className="col-lg-6  text-right" >
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light text-white fw-bolder">Upgrade Your Skills</h2>
 zero
              <p className="font-italic  mb-4 text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, necessitatibus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, vel suscipit voluptate saepe laboriosam unde fuga dolore obcaecati in, sed voluptatem corporis eligendi! Beatae, labore!</p>
              <a href="#" className="btn btn-light px-3 rounded-pill shadow-sm">Learn More</a>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-sm-first my-5" data-aos="fade-left">
              <img src="https://bootstrapmade.com/demo/templates/Butterfly/assets/img/hero-img.png" alt="" className="img-fluid mb-4 mb-lg-0" />

              <p className="font-italic" style={{color:"#FFFFFF"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, necessitatibus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, vel suscipit voluptate saepe laboriosam unde fuga dolore obcaecati in, sed voluptatem corporis eligendi! Beatae, labore!</p>
              
              <a href="#"
                className="btn btn-light px-3 rounded-pill shadow-sm">Learn More</a>
 main
            </div>
          </div>
          
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto order-2" data-aos="fade-right">
              <img src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png" alt="" className="img-fluid mb-4 mb-lg-0 my-3" />
            </div>
            <div className="col-lg-6 text-left">
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light text-white fw-bolder">Transformation to Tech world</h2>
              <p className="font-italic" style={{color:"#FFFFFF"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus aut amet vero quaerat numquam nihil, ratione voluptas sint officia odio perferendis aperiam ipsam sit qui eaque. Quis, ex ab! Eaque amet ab error rerum voluptates consequuntur labore sit consequatur magnam totam eligendi, id sapiente, assumenda tempore asperiores ipsum dolorem sint.</p><a href="#"
                className="btn btn-light px-3 rounded-pill shadow-sm">Learn More</a>
            </div>
          </div>
        </div>
      </div> 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001329"
            fillOpacity="1"
            d="M0,96L48,122.7C96,149,192,203,288,202.7C384,203,480,149,576,149.3C672,149,768,203,864,197.3C960,192,1056,128,1152,96C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    )
}

export default About;