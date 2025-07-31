import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const officeProjects = [
    {
      title: "ubiHrm App",
      description: "Full Stack Developer for the ubiHrm SaaS attendance platform.",
      image: "https://www.smergers.com/media/franchiselogos/ubiAttendance_new_logo_13_Feb_-_Copy.png",
      tags: ["Backend", "MongoDB", "Node.js"]
    },
    {
      title: "ubiAttendance App",
      description: "Backend work on REST APIs, authentication, and integrations.",
      image: "https://www.smergers.com/media/franchiselogos/ubiAttendance_new_logo_13_Feb_-_Copy.png",
      tags: ["Backend", "APIs", "Authentication"]
    },
    {
      title: "global.ubihrm.com",
      description: "Web & backend development for global admin portal.",
      image: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_d76945cc41540911c38f1451d4d7802b/ubirecruit.png",
      tags: ["Web", "Admin Panel", "Backend"]
    },
    {
      title: "accounts.ubihrm.com",
      description: "Backend development focused on security and account services.",
      image: "https://www.smergers.com/media/franchiselogos/ubiAttendance_new_logo_13_Feb_-_Copy.png",
      tags: ["Accounts", "Backend", "Security"]
    },
  ];

  const personalProjects = [
    {
      title: "RunMarioRun",
      description: "Infinite‑runner game built with React—dynamic obstacles, animations & live scoring.",
      link: "https://mansimandre.github.io/RunMarioRun",
      tags: ["Game", "React", "State Management"]
    },
    {
      title: "Google Clone",
      description: "Responsive Google-style search UI with suggestions and client-side routing.",
      link: "https://mansimandre.github.io/GoogleClone/",
      tags: ["Frontend", "React", "UI/UX"]
    },
    {
      title: "Advi Industries Website",
      description: "Corporate site using React Router—multi-page and mobile-friendly.",
      link: "https://mansimandre.github.io/AdviIndustriesWebsite",
      tags: ["Frontend", "React Router", "Responsive Design"]
    },
    {
      title: "MatchingGameReact",
      description: "Memory-card game with flip animations, timer, and scoring in React.",
      link: "https://mansimandre.github.io/MatchingGameReact",
      tags: ["Game", "React", "Interactive UI"]
    },
    {
      title: "MovieAppReact",
      description: "TMDb-powered movie discovery app with search.",
      link: "https://mansimandre.github.io/MovieAppReact/",
      tags: ["API", "React", "Async Fetching"]
    },
    {
      title: "QuoteGeneratorApp",
      description: "Fetches motivational quotes with refreshing mood.",
      link: "https://mansimandre.github.io/QuoteGeneratorApp",
      tags: ["Hooks", "Async UI", "React"]
    },
    {
      title: "ToDoReactApp",
      description: "Full CRUD to-do list with edit/delete/toggle.",
      link: "https://mansimandre.github.io/ToDoReactApp/",
      tags: ["CRUD", "React", "Forms"]
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React & GitHub Pages; modular and responsive.",
      link: "https://mansimandre.github.io/Portfolio/#/home",
      tags: ["Portfolio", "React", "GitHub Pages"]
    },
  ];

  const renderSection = (title, list, startDelay = 0) => (
    <>
      <div className="text-center mb-4">
        <h2 className="display-6 fw-bold">{title}</h2>
        
      </div>
      <div className="row">
        {list.map((project, idx) => (
          <div
            key={idx}
            className="col-md-6 mb-4"
            data-aos="fade-up"
            data-aos-delay={startDelay + idx * 50}
          >
            <div className="card h-100 shadow-sm border-0 rounded-lg overflow-hidden">
              {project.image && (
                <div className="d-flex justify-content-center mt-3">
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      height: "200px",
                      width: "200px",
                      objectFit: "contain",
                      borderRadius: "50%"
                    }}
                  />
                </div>
              )}
              <div className="card-body">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <h5 className="card-title fw-bold text-primary">{project.title}</h5>
                  </a>
                ) : (
                  <h5 className="card-title fw-bold">{project.title}</h5>
                )}
                <p className="card-text">{project.description}</p>
                <div>
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="badge bg-primary me-2 mb-2"
                      style={{
                        fontSize: "0.9rem",
                        borderRadius: "12px",
                        padding: "5px 10px"
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
    </>
  );

  return (
    <section className="bg-light py-5">
      <div className="container">
        {renderSection("My Projects", officeProjects, 100)}
        <div className="my-5" />
        {renderSection("My Personal Projects", personalProjects, 100)}
      </div>
    </section>
  );
};

export default Projects;
