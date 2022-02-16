import './contact.css';

function Contact(){
    return <>
    <header className="page-header-ui page-header-ui-dark bg-gradient-primary-to-secondary">
                        <div className="page-header-ui-content pt-10">
                            <div className="container px-5 text-center">
                                <div className="row gx-5 justify-content-center">
                                    <div className="col-lg-8">
                                        <h1 className="page-header-ui-title mb-3">Contact us</h1>
                                        <p className="page-header-ui-text">Have questions? We're here to help!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="svg-border-rounded text-light">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
                        </div>
                    </header>
                    <section className="bg-light py-10">
                        <div className="container px-5">
                            <div className="row gx-5 mb-5">
                                <div className="col-lg-4 mb-5">
                                    <a className="card card-link border-bottom-0 border-start-0 border-end-0 border-top-lg border-primary lift text-center o-visible h-100" href="#!">
                                        <div className="card-body">
                                            <div className="icon-stack icon-stack-xl bg-primary-soft text-primary mb-4 mt-n5 z-1 shadow"><i data-feather="user"></i></div>
                                            <h5>Sales</h5>
                                            <p className="card-text">Ready to open an account? Have questions about purchasing a product?</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="text-primary fw-bold d-inline-flex align-items-center">
                                                Contact Sales
                                                <i className="fas fa-arrow-right text-xs ms-1"></i>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4 mb-5">
                                    <a className="card card-link border-bottom-0 border-start-0 border-end-0 border-top-lg border-secondary lift text-center o-visible h-100" href="#!">
                                        <div className="card-body">
                                            <div className="icon-stack icon-stack-xl bg-secondary-soft text-secondary mb-4 mt-n5 z-1 shadow"><i data-feather="life-buoy"></i></div>
                                            <h5>Support</h5>
                                            <p className="card-text">Need help with a product that you just purchased? Need help with your account?</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="text-secondary fw-bold d-inline-flex align-items-center">
                                                Contact Support
                                                <i className="fas fa-arrow-right text-xs ms-1"></i>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4 mb-5">
                                    <a className="card card-link border-bottom-0 border-start-0 border-end-0 border-top-lg border-teal lift text-center o-visible h-100" href="#!">
                                        <div className="card-body">
                                            <div className="icon-stack icon-stack-xl bg-teal-soft text-teal mb-4 mt-n5 z-1 shadow"><i data-feather="tv"></i></div>
                                            <h5>Media</h5>
                                            <p className="card-text">Looking to contact our media team for a press release or related story?</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="text-teal fw-bold d-inline-flex align-items-center">
                                                Contact Media
                                                <i className="fas fa-arrow-right text-xs ms-1"></i>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="row gx-5 justify-content-center text-center">
                                <div className="col-lg-5 mb-5 mb-lg-0">
                                    <h5>Join us on Discord!</h5>
                                    <p className="fw-light mb-0">Join the discussion on Discord. Our community can help answer questions!</p>
                                </div>
                                <div className="col-lg-5">
                                    <h5>General Support</h5>
                                    <p className="fw-light mb-0">
                                        For any other support questions, please send us an email at
                                        <a href="#!"><span className="_cf_email_" data-cfemail="4b383e3b3b24393f0b2e332a263b272e65282426">[email&#160;protected]</span></a>
                                    </p>
                                </div>
                            </div>
                            <hr className="my-10" />
                            <div className="row gx-5 justify-content-center">
                                <div className="col-lg-8 text-center">
                                    <h2>Can't find the answer you need?</h2>
                                    <p className="lead mb-5">Contact us and we'll get back to you as soon as possible with a solution to whatever issues you're having with SB UI Kit Pro.</p>
                                </div>
                            </div>
                            
                            <form>
                                <div className="row gx-5 mb-4">
                                    <div className="col-md-6">
                                        <label className="text-dark mb-2" for="inputName">Full name</label>
                                        <input className="form-control py-4" id="inputName" type="text" placeholder="Full name" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="text-dark mb-2" for="inputEmail">Email</label>
                                        <input className="form-control py-4" id="inputEmail" type="email" placeholder="name@example.com" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="text-dark mb-2" for="inputMessage">Message</label>
                                    <textarea className="form-control py-3" id="inputMessage" type="text" placeholder="Enter your message..." rows="4"></textarea>
                                </div>
                                <div className="text-center"><button className="btn btn-primary mt-4" type="submit">Submit Request</button></div>
                            </form>
                        </div>
                        <div className="svg-border-rounded text-dark">
                            
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg> */}
                        </div>
                    </section>
    </>
}

export default Contact;