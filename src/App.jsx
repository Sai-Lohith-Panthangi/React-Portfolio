
import React from 'react';
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Certification } from "./components/Certification/Certification";
import { Contact } from "./components/Contact/Contact";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Navbar } from "./components/Navbar/Navbar";
import { Papers } from "./components/Papers/Papers";
import { PatentSection } from './components/Patent/Patent';
import { Profile } from "./components/Profile/Profile";
import { Projects } from "./components/Project/Projects";

function App() {
 
  return (
   
    <div className={styles.App}>
    
      <Navbar />
      <Profile />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Certification />
      <Papers />
      <PatentSection />
      <Contact />
      
    </div>

  )
}

export default App
