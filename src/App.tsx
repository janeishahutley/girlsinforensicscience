
import './App.css'
import NavBar from './components/NavBar'
import Register from './components/Register'
import WhatWeOffer from './components/WhatWeOffer'

function App() {
  return (
    <>
      <NavBar/>
        <section id="home" className="hero">
          <div className="hero__accentBlock"></div>
          <div className="hero__panel">
            <h3 className="hero__title">
              Empowering <span className="hero__em">girls</span> through applied science and <span className="hero__em">forensic</span> exploration
            </h3>
            <div className="hero__actions">
              {/* <a href="#register" className="hero__button hero__button--primary">
                <span>Register</span>
              </a> */}
              <a href="#register" className="hero__button hero__button--secondary">
                  Request More Info
              </a>
            </div>
          </div>
        </section>
        <section id="about" className="aboutSection">
          <div className="aboutSection__inner">
            <p className="aboutSection__eyebrow">About Us</p>
            <div className="aboutSection__dots">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="aboutSection__imageWrapper">
              <img src="/girl2.jpeg" alt="Student participating in Girls in Forensics" className="aboutSection__image" />
            </div>
            <p className="aboutSection__text">
              Girls in Forensic Science introduces students to applied scientific learning through
              hands-on forensic investigation. While the program was inspired by the need
              to increase access and representation, GFS is intentionally designed to be
              inclusive of all girls and creates a space where every student feels welcomed,
              capable, and empowered.
            </p>
          </div>
        </section>
       <section id="our-vision" className="visionSection">
  <div className="visionSection__inner">
    <img
      src="/single-fingerprint.png"
      alt="Fingerprint decoration"
      className="visionSection__image"
    />

    <img
      src="/single-fingerprint.png"
      alt=""
      className="visionSection__fp visionSection__fp--1"
    />

    <img
      src="/single-fingerprint.png"
      alt=""
      className="visionSection__fp visionSection__fp--2"
    />

    <img
      src="/single-fingerprint.png"
      alt=""
      className="visionSection__fp visionSection__fp--3"
    />

    <h2 className="visionSection__title">Our Vision</h2>

    <div className="visionSection__dots">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <p className="visionSection__text">
      To empower girls with the confidence, skills, and early exposure needed to
      pursue science, think analytically, and thrive in STEM-related fields.
      Girls in Forensic Science is committed to closing that gap by providing
      early, meaningful exposure to STEM in a way that is engaging, practical,
      and confidence-building.
    </p>
  </div>
</section>
     
      <section id="elements" className="elementsSection">
       
          <WhatWeOffer/>
      
      </section>
      <Register/>
      <footer className="footer">
        <p className="footer__text">
          © 2026 Girls in Forensic Science
        </p>
      </footer>
    </>
  ) 
}
export default App
