import React, { useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // For Icons
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out", once: true });
  }, []);

  return (
    <div className="container" style={{ paddingTop: "80px", paddingBottom: "50px" }}>
      <h1 className="text-center mb-5 display-4 fw-bold text-dark" data-aos="fade-up">
        Contact
      </h1>

      {/* First Card: Contact Information + Map */}
      <div className="row mb-5">
        <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div className="card p-4 shadow-lg border-0 rounded-lg">
            <h4 className="card-title text-center mb-4 text-primary">Contact Information</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <FaMapMarkerAlt className="mr-2" />
                <strong>Address:</strong> Ubitech Solutions, JayendraGanj, Gwalior, MP, 474001
              </li>
              <li className="mb-3">
                <FaPhoneAlt className="mr-2" />
                <strong>Call Us:</strong> 8826440432
              </li>
              <li className="mb-3">
                <FaEnvelope className="mr-2" />
                <strong>Email Us:</strong> mansimandre@ubitechsolutions.com
              </li>
            </ul>
            {/* Embedding a simple map */}
            <div className="embed-responsive embed-responsive-16by9 mt-4">
              <iframe
                title="Ubitech Solutions Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8450427430053!2d78.16389641504499!3d26.205104583437315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c698c3aa4bff%3A0x996635fa1543a635!2sUbitech%20Solutions!5e0!3m2!1sen!2sin!4v1680942600961!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Second Card: Contact Form */}
        <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="card p-4 shadow-lg border-0 rounded-lg">
            <h4 className="card-title text-center mb-4 text-primary">Get In Touch</h4>
            <form>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control rounded-pill border-0 shadow-sm"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control rounded-pill border-0 shadow-sm"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-pill border-0 shadow-sm"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="form-control rounded-3 border-0 shadow-sm"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary rounded-pill shadow-lg">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-5 text-muted" style={{ fontSize: "0.9rem" }} data-aos="fade-up" data-aos-delay="300">
        <p>© Copyright Mansi All Rights Reserved</p>
        <p>Designed by BootstrapMade</p>
      </footer>
    </div>
  );
};

export default Contact;
