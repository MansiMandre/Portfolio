import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, []);

  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="container-fluid"
        style={{
          backgroundImage:
            "url('https://themewagon.github.io/Kelly/assets/img/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          backgroundAttachment: "fixed",
          opacity: 0.9,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for text contrast
          }}
        ></div>

        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-md-8">
            <div
              className="container text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2
                    className="font-weight-bold text-white display-4"
                    data-aos="fade-up"
                    data-aos-delay="150"
                    style={{ fontSize: "3rem", letterSpacing: "2px" }}
                  >
                    Mansi Mandre
                  </h2>
                  <p
                    className="text-white lead"
                    data-aos="fade-up"
                    data-aos-delay="250"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "lighter",
                      opacity: 0.8,
                    }}
                  >
                    I am a Software Developer from Gwalior.
                  </p>
                  <button
                    className="btn btn-light mt-4 px-4 py-2"
                    onClick={handleAboutClick}
                    data-aos="fade-up"
                    data-aos-delay="350"
                    style={{
                      borderRadius: "50px",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#f39c12";
                      e.target.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#fff";
                      e.target.style.color = "#333";
                    }}
                  >
                    About Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
