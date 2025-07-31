import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJs, FaAws ,FaGithub,FaLinkedin} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql,SiTailwindcss,SiTypescript } from 'react-icons/si';
 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          I'm a passionate <strong>Full Stack Developer</strong> based in Gwalior, India. I specialize in Web and App  development and love building innovative projects.
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
          <h3 className="fw-bold mb-3" data-aos="fade-up">Full Stack Developer</h3>
          <p data-aos="fade-up">
            Proficient in front-end technologies like <strong>React</strong>, <strong>HTML</strong>, <strong>CSS</strong>,<strong>Tailwind CSS</strong>, <strong>JavaScript</strong>,<strong>TypeScript</strong> and backend with <strong>Node.js</strong>, <strong>AdonisJS</strong>, <strong>MongoDB</strong>, <strong>MySQL</strong>, <strong>Express</strong>, <strong>AWS</strong> and <strong>ChatGPT expert</strong>.
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
                <li><strong>Degree:</strong> B.Tech (CSE)</li>
                <li><strong>Email:</strong> mansimandre19@gmail.com</li>
                <li><strong>Experience:</strong> 2.4 Years</li>
              </ul>
            </div>
          </div>
          <p className="mt-3" data-aos="fade-up" data-aos-delay="300">
            I'm always excited to collaborate on meaningful projects that make a difference.
          </p>
        </div>
           {/* Social Links */}
      <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="400">
        <p>Connect with me:</p>
        <a href="https://github.com/mansimandre" target="_blank" rel="noopener noreferrer" className="mx-3 text-dark">
          <FaGithub size={36} />
        </a>
        <a href=" https://www.linkedin.com/in/mansi-mandre-557705255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="mx-3 text-primary">
          <FaLinkedin size={36} />
        </a>
      </div>
      </div>

      {/* Skills Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold" data-aos="fade-up">Skills</h2>
        <p className="lead" data-aos="fade-up">Technologies I'm skilled in:</p>
      </div>

      <div className="row justify-content-center text-center">
        {[
          { icon: <FaHtml5 size={50} color="#e34c26" />, label: 'HTML' },
          { icon: <FaCss3Alt size={50} color="#264de4" />, label: 'CSS' },
          { icon: <FaJs size={50} color="#f0db4f" />, label: 'JavaScript' },
          { icon: <FaReact size={50} color="#61DBFB" />, label: 'React' },
          { icon: <FaNodeJs size={50} color="#3C873A" />, label: 'Node.js' },
          { icon: <SiExpress size={50} color="#000000" />, label: 'Express' },
          { icon: <SiMysql size={50} color="#00758f" />, label: 'MySQL' },
          { icon: <SiMongodb size={50} color="#4DB33D" />, label: 'MongoDB' },
          { icon: <FaAws size={50} color="#FF9900" />, label: 'AWS' },
            { icon: <SiTailwindcss size={50} color="#38B2AC" />, label: 'Tailwind CSS' },
    { icon: <SiTypescript size={50} color="#3178C6" />, label: 'TypeScript' },
   ,
         
        ].map((skill, idx) => (
          <div
            className="col-4 col-md-2 mb-4"
            data-aos="fade-up"
            data-aos-delay={`${(idx + 1) * 100}`}
            key={skill.label}
          >
            {skill.icon}
            <p className="mt-2 fw-semibold">{skill.label}</p>
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default About;
