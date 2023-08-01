import React from 'react';
import lion from './images/img.jpg'
// import Jquery from './js/jquery'
// import Popper from './js/popper'
// import BootstrapJS from './js/bootstrap'
// import Validate from './js/jquery.validate'
// import JsMain from './js/main'
import './css/style.css'

const ContactForm = () => {
  return (
    <div>
      <body>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="wrapper">
                  <div className="row mb-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3"></div>
                  </div>
                  <div className="row no-gutters">
                    <div className="col-md-7">
                      <div className="contact-wrap w-100 p-md-5 p-4">
                        <h3 className="mb-4">Contact Me</h3>
                        <div
                          id="form-message-warning"
                          className="mb-4"
                        ></div>
                        <div id="form-message-success" className="mb-4">
                          Your message was sent, thank you!
                        </div>
                        <form
                          method="POST"
                          id="contactForm"
                          name="contactForm"
                          className="contactForm"
                        >
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" htmlFor="name">
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  id="name"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" htmlFor="email">
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="label" htmlFor="subject">
                                  Subject
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="label" htmlFor="#">
                                  Message
                                </label>
                                <textarea
                                  name="message"
                                  className="form-control"
                                  id="message"
                                  cols="30"
                                  rows="4"
                                  placeholder="Message"
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="submit"
                                  value="Send Message"
                                  className="btn btn-primary"
                                />
                                <div className="submitting"></div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-5 d-flex align-items-stretch">
                      <div
                        className="info-wrap w-100 p-5 img"
                        style={{
                          backgroundImage: `url(${lion})`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <script src={Jquery}></script>
        <script src={Popper}></script>
        <script src={BootstrapJS}></script>
        <script src={Validate}></script>
        <script src={JsMain}></script> */}
      </body>
    </div>
  );
};

export default ContactForm;

