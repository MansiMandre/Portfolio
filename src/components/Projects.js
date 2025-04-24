import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const projects = [
    {
      title: "ubiHrm App",
      description: "Worked as a Backend Developer for the ubiHrm App.",
      image: "https://www.smergers.com/media/franchiselogos/ubiAttendance_new_logo_13_Feb_-_Copy.png",
      tags: ["Backend", "MongoDB", "Node.js"],
    },
    {
      title: "ubiAttendance App",
      description: "Contributed as a Backend Developer for the ubiAttendance App.",
      image: "https://media.licdn.com/dms/image/v2/C510BAQH2QQ3UnWVIaA/company-logo_200_200/company-logo_200_200/0/1631437417587/ubitech_solutions_pvt_ltd_logo?e=2147483647&v=beta&t=yypO_d2zPo3TIvD-rhrMzWroSDIBwG3l8jnJs4jVb4c",
      tags: ["Backend", "APIs", "Authentication"],
    },
    {
      title: "global.ubihrm.com",
      description: "Worked as a Web Developer (Backend) for global.ubihrm.com.",
      image: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_d76945cc41540911c38f1451d4d7802b/ubirecruit.png",
      tags: ["Web", "Backend", "Admin Panel"],
    },
    {
      title: "accounts.ubihrm.com",
      description: "Served as a Web Developer (Backend) for accounts.ubihrm.com.",
      image: "https://media.licdn.com/dms/image/v2/C510BAQE3qmuTS0yZzw/company-logo_100_100/company-logo_100_100/0/1630622380786/ubihrm_logo?e=2147483647&v=beta&t=LdeEwPh2CWvTDxZjYcHZz6tvHbdd1ZILa2fK2zvgLPU",
      tags: ["Accounts", "Backend", "Security"],
    },
  ];

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-5 fw-bold text-dark">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div
                className="card h-100 shadow-lg border-0 rounded-lg overflow-hidden"
                style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
              >
                <div className="d-flex justify-content-center mt-3">
                  <img
                    src={project.image}
                    className="card-img-top rounded-circle"
                    alt={project.title}
                    style={{
                      height: "200px",
                      width: "200px",
                      objectFit: "contain",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div>
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="badge bg-primary me-2 mb-2"
                        style={{
                          fontSize: "0.9rem",
                          borderRadius: "12px",
                          padding: "5px 10px",
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
