import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="container py-5">
      {/* About Me Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold" data-aos="fade-up">About Me</h1>
        <p className="lead" data-aos="fade-up">
          I'm a passionate <strong>Software Developer</strong> based in Gwalior, India. I specialize backend development and love building innovative projects.
        </p>
      </div>

      {/* Image + Info Section */}
      <div className="row align-items-center mb-5" data-aos="fade-up">
        <div className="col-md-5 text-center">
          <img
            src="https://themewagon.github.io/Kelly/assets/img/profile-img.jpg"
            alt="Mansi Mandre"
            className="img-fluid rounded-circle shadow-lg"
            style={{ maxWidth: '300px' }}
          />
        </div>
        <div className="col-md-7">
          <h3 className="fw-bold mb-3" data-aos="fade-up">Web Developer</h3>
          <p data-aos="fade-up">
            Proficient in front-end technologies like <strong>React</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> and backend with <strong>Node.js</strong>, <strong>Adonisjs</strong>, <strong>MongoDB</strong>,<strong>MySQL</strong>,<strong>Express</strong>,<strong>AWS</strong>.
          </p>

          <div className="row">
            <div className="col-sm-6" data-aos="fade-up" data-aos-delay="100">
              <ul className="list-unstyled">
                <li><strong>Birthday:</strong> 19 Nov</li>
                <li><strong>Phone:</strong> 8826440431</li>
                <li><strong>City:</strong> Gwalior</li>
              </ul>
            </div>
            <div className="col-sm-6" data-aos="fade-up" data-aos-delay="200">
              <ul className="list-unstyled">
                <li><strong>Age:</strong> 32</li>
                <li><strong>Degree:</strong> B.Tech(CSE)</li>
                <li><strong>Email:</strong> mansimandre19@gmail.com</li>
                <li><strong>Experience:</strong> 2 Years</li>
              </ul>
            </div>
          </div>
          <p className="mt-3" data-aos="fade-up" data-aos-delay="300">
            I'm always excited to collaborate on meaningful projects that make a difference.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold" data-aos="fade-up">Skills</h2>
        <p className="lead" data-aos="fade-up">Technologies I'm skilled in:</p>
      </div>

      <div className="row">
        {/* Skills Column 1 */}
        <div className="col-md-6">
          {[['HTML', 90], ['CSS', 85], ['Express', 70], ['JavaScript', 80]].map(([label, value], idx) => (
            <div className="mb-4" data-aos="fade-up" data-aos-delay={`${(idx + 1) * 100}`} key={label}>
              <label className="fw-semibold">{label}</label>
              <div className="progress">
                <div className="progress-bar bg-primary" style={{ width: `${value}%` }}>{value}%</div>
              </div>
            </div>
          ))}
        </div>
        {/* Skills Column 2 */}
        <div className="col-md-6">
          {[['React', 75], ['Node.js', 70], ['MySQL', 70], ['MongoDB', 65]].map(([label, value], idx) => (
            <div className="mb-4" data-aos="fade-up" data-aos-delay={`${(idx + 1) * 100}`} key={label}>
              <label className="fw-semibold">{label}</label>
              <div className="progress">
                <div className="progress-bar bg-primary" style={{ width: `${value}%` }}>{value}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
