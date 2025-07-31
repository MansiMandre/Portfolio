import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUniversity, FaLaptopCode, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaTools } from 'react-icons/fa';

const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 fw-bold display-4" data-aos="fade-up" style={{ color: '#2C3E50' }}>
        Resume
      </h1>

      <div className="row">
        {/* Left Column: Summary + Education */}
        <div className="col-md-6">
          {/* Summary */}
          <div className="mb-5" data-aos="fade-up" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <h3 className="mb-3" style={{ fontWeight: 'bold', color: '#34495E' }}>
              <FaLaptopCode className="me-2" /> Summary
            </h3>
            <h5 className="fw-bold" style={{ color: '#2C3E50' }}>Ubitech Solutions Pvt Ltd</h5>
            <p className="text-muted">
Full Stack Developer with 2+ years of practical experience in building scalable and high-performing web applications using the MERN stack, AdonisJS, and AWS. Skilled in crafting RESTful APIs, integrating databases, and delivering seamless user experiences through clean, efficient code. Known for turning ideas into robust digital solutions with a strong focus on performance and backend architecture.            </p>
            <ul className="list-unstyled">
              <li>
                <FaMapMarkerAlt className="me-2" /> <strong>Address:</strong> Jayendraganj, Gwalior, MP, India
              </li>
              <li>
                <FaPhoneAlt className="me-2" /> <strong>Phone:</strong> +91 8826440431
              </li>
              <li>
                <FaEnvelope className="me-2" /> <strong>Email:</strong> mansimandre19@gmail.com
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="mb-3" data-aos="fade-up" data-aos-delay="100">
            <h3 className="mb-3" style={{ fontWeight: 'bold', color: '#34495E' }}>
              <FaUniversity className="me-2" /> Education
            </h3>

            <div className="card" style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <div className="card-body">
                <h5 className="fw-bold" style={{ color: '#2C3E50' }}>
                  B.Tech in Computer Science & Engineering
                </h5>
                <p className="text-muted">
                  2010 - 2014 | Skyline Institute of Engineering & Technology, Greater Noida
                </p>
                <p>
                  Studied core subjects like Data Structures, Operating Systems, Networking, Database Management Systems, and Web Technologies. Actively participated in coding contests and tech fests.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Experience */}
        <div className="col-md-6">
          <h3 className="mb-3" data-aos="fade-up" style={{ fontWeight: 'bold', color: '#34495E' }}>
            <FaLaptopCode className="me-2" /> Professional Experience
          </h3>

          <div className="mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card" style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <div className="card-body">
                <h5 className="fw-bold" style={{ color: '#2C3E50' }}>Software Developer</h5>
                <p className="text-muted">2023 - Present | Experion, Gwalior, MP</p>
                <ul>
                 <li>Developed scalable applications using AdonisJS, Node.js, and MySQL.</li>
<li>Built reusable components and libraries for future use.</li>
<li>Optimized applications and APIs for maximum speed, reduced time complexity, and improved scalability.</li>
<li>Collaborated with sales teams and clients to gather requirements and delivered projects on time.</li>
<li>Used AWS services such as S3 for image storage and CloudWatch for faster debugging and monitoring.</li>
<li>Provided efficient and effective solutions to complex development challenges.</li>
<li>Managed project timelines and delivered high-quality software within deadlines.</li>
<li>Integrated third-party like Razor Pay,Firebase,Supabase for authentication ,enable X for sms and Biometrics for payments, notifications, and authentication workflows.</li>
<li>Wrote clean, maintainable, and well-documented code following industry best practices.</li>
<li>Worked closely with QA to resolve bugs quickly and ensure seamless user experience.</li>
<li>Deployed and maintained production applications using CI/CD pipelines and Git version control.</li>
<li>Participated in daily stand-ups and sprint planning meetings to ensure team alignment and progress.</li>
<li>Contributed to code reviews and mentoring junior developers to improve code quality and team productivity.</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools & Technologies Section */}
      <div className="row mt-5">
        <div className="col-12">
          <h3 className="mb-3" data-aos="fade-up" style={{ fontWeight: 'bold', color: '#34495E' }}>
            <FaTools className="me-2" /> Tools & Technologies
          </h3>
          <p className="text-muted">
            In addition to my programming skills, I am experienced in using several tools to manage projects and source code effectively.
          </p>
          <ul className="list-unstyled">
            <li><strong>Jira:</strong> Proficient in using Jira for project management, tracking tasks, and agile workflows.</li>
            <li><strong>ClickUp:</strong> Experienced with ClickUp for task and project management to ensure seamless collaboration.</li>
            <li><strong>Git:</strong> Strong knowledge of Git for version control, including branching, merging, and collaboration on GitHub and GitLab.</li>
          </ul>
        </div>
      </div>

      <footer className="text-center mt-5 text-muted small" style={{ color: '#7F8C8D' }}>
        <p>&copy; {new Date().getFullYear()} Mansi Mandre. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Resume;
