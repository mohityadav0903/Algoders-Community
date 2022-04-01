import React from 'react';
import  './ContactSection.css';
 
import { useState, useEffect} from 'react';

function Contacts(){

    const initialValues = { username: "", email: "", subject: "" ,message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
         
        const { name, value} = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
       
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
    useEffect(()=> {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.username){
            errors.username= "Username is required";
        }
        
        if(!values.email){
            errors.email= "Email is required";

        }
        else if(!regex.test(values.email)){
            errors.email= "This is not a valid email format!";
        }
        if(!values.subject){
            errors.subject= "Subject is required";
        }
        if(!values.message){
            errors.message= "Message is required";
        }
         
        return errors;

    };
    return (
    <>

        <div id="footer" className="footer-top" style={{background:"#001329"}}>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#fff"
                        fillOpacity="1"
                        d="M0,224L48,218.7C96,213,192,203,288,213.3C384,224,480,256,576,229.3C672,203,768,117,864,112C960,107,1056,181,1152,192C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        <section id="contact" className="section-padding updated-section">
            <div className="container">




                <div className="section-header text-center">
                    <h2 className="section-title wow fadeInDown text-black display-4 fw-bold updated-heading" data-wow-delay="0.3s">Contact Us</h2>
                    <div className="shape wow fadeInDown" data-wow-delay="0.3s"></div>
                </div>
                <div className="row contact-form-area wow fadeInUp" data-wow-delay="0.3s">
                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <div className="contact-block">
                            <form id="contactForm" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="name" autoComplete="off" name="username" value={formValues.username} placeholder="Name" onChange={handleChange} />
                                            <p style={{ color: 'red' }}>{formErrors.username}</p>
                                        </div>

                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" placeholder="Email" id="email" className="form-control" autoComplete="off" name="email" value={formValues.email} onChange={handleChange} />
                                            <p style={{ color: 'red' }}>{formErrors.email}</p>
                                        </div>

                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="text" placeholder="Subject" id="msg_subject" className="form-control" autoComplete="off" name="subject" value={formValues.subject} onChange={handleChange} />

                                        </div>
                                        <p style={{ color: 'red' }}>{formErrors.subject}</p>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea className="form-control" id="message" placeholder="Your Message" value={formValues.message} onChange={handleChange} autoComplete="off" name="message" rows="7"
                                            ></textarea>


                                        </div>
                                        <p style={{ color: 'red' }}>{formErrors.message}</p>
                                    </div>
                                    <div className="submit-button text-left">

                                        <button className="fluid ui blue button updated-button" id="Submit">Send Message</button>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12  ">
                        <h3 className="footer-titel  text-center text-black">Contact Information</h3>
                        <ul className="address">
                            <li>
                                <a
                                    href="https://www.google.com/maps/place/Chandigarh,+Punjab+148023/@30.5381347,75.9519652,15z/data=!3m1!4b1!4m5!3m4!1s0x391069a660696aef:0x3bc789e57615106b!8m2!3d30.5389944!4d75.9550329"><i
                                        className="fas fa-map-marked-alt   text-black "></i> Location: Chandigarh, Punjab</a>
                            </li>
                            <li>
                                <a href="#"><i className="fas fa-solid fa-phone text-black"></i> Phone no :
                                    8218233503</a>
                            </li>
                            <li>
                                <a href="mailto:algoderscommunity@gmail.com"><i className="fas fa-envelope text-black"></i> Email:
                                    algoderscommunity@gmail.com</a>
                            </li>
                        </ul>
                    </div>
               </div>

            </div>
        </section></>
     );
}

export default Contacts;

