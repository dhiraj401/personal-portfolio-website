import React from "react";
import "./contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className=" contact" id="Contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <LightSpeed>
                  <div className="row border-line">
                    <img src="contact.avif" alt="ocontact" className="image" />
                  </div>
                </LightSpeed>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row ">
                    <div className="row">
                      <h6>
                        Contact With
                        <FaLinkedin color="blue" size={30} className="ms-3" />
                        <FaSquareGithub color="" size={30} className="ms-3" />
                        <FaFacebookSquare
                          color="blue"
                          size={30}
                          className="ms-3"
                        />
                        <FaInstagramSquare
                          color={"#c11313"}
                          size={30}
                          className="ms-3"
                        />
                        <FaSquareXTwitter size={30} className="ms-3" />
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>

                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="write your Name"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="write your Email"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="write your Message"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" type="submit">
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
