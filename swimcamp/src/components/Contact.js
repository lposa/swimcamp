import React from "react";
import grb from "../images/grbVeliki.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact3 py-5 contact-column">
        <div className="row">
          <div className="row justify-content-center">
            <div className="col-lg-2 col-sm-0 justify-self-center">
              <img
                src={grb}
                alt="grb"
                className="img-fluid contact-img-mobile"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 justify-content-center">
              <div className="contact-box ml-3">
                <h1
                  className="font-weight-light mt-3"
                  style={{ textAlign: "center" }}
                >
                  Quick Contact
                </h1>
                <form className="mt-4">
                  <div className="row">
                    <div className="col-lg-12 ">
                      <div className="form-group mt-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 ">
                      <div className="form-group mt-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 ">
                      <div className="form-group mt-2">
                        <textarea
                          cols="3"
                          className="form-control"
                          placeholder="message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2">
                        <span>SUBMIT</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-12 contact-column ">
            <div className="card mt-4 border-0 mb-4">
              <div className="row">
                <div className="col-lg-4 ">
                  <div className="card-body d-flex align-items-center c-detail pl-0">
                    <div className="mr-3 align-self-center">
                      <img
                        src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png"
                        alt="address"
                      />
                    </div>
                    <div className="px-5">
                      <h6 className="font-weight-medium">Address</h6>
                      <p>
                        Jovana Trajkovic BB
                        <br /> Zrenjanin
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="card-body d-flex align-items-center c-detail">
                    <div className="mr-3 align-self-center">
                      <img
                        src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"
                        alt="phone"
                      />
                    </div>
                    <div className="px-5">
                      <h6 className="font-weight-medium">Phone</h6>
                      <p>
                        0607060064 <br /> 0607060064
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="card-body d-flex align-items-center c-detail">
                    <div className="mr-3 align-self-center">
                      <img
                        src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png"
                        alt="email"
                      />
                    </div>
                    <div className="px-5">
                      <h6 className="font-weight-medium">Email</h6>
                      <p>
                        posa.97@gmail.com <br /> petras00@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
