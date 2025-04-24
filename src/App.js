import React from 'react';
import { HashRouter  , Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'; // Make sure you create this component
import Resume from './components/Resume'; // Make sure you create this component
import Projects from './components/Projects';
import Contact from './components/Contact';
import 'aos/dist/aos.css'; // Import AOS styles


function App() {
  return (
    <HashRouter  basename='/Portfolio'>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio/home" element={<Home />} />
          <Route path="/Portfolio/about" element={<About />} />
          <Route path="/Portfolio/resume" element={<Resume />} />
          <Route path="/Portfolio/project" element={<Projects />} />
          <Route path="/Portfolio/contact" element={<Contact />} />
        </Routes>
      </div>
    </HashRouter >
  );
}

export default App;
