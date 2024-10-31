// src/components/Home.js
import React from 'react';
import './Home.css';
import logo1 from '/assets/logo.png'; // замініть на ваш шлях до лого
import logo2 from '/assets/Add home.png'; // замініть на ваш шлях до лого
import heroImage from '/assets/photo 1.png'; // велика картинка для Hero-секції
import sectionImage from '/assets/photo 2.png'; // додаткова картинка для секції

function Sasi() {
  return (
    <div className="home">
      {/* Хедер */}
      <header className="header">
        <img src={logo1} alt="Logo Left" className="logo" />
        <nav className="nav">
          <a href="#home">HOME</a>
          <a href="#collection">COLLECTION</a>
          <a href="#about">ABOUT US</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <div className="logo-container">
          <img src={logo2} alt="Logo Right 1" className="logo" />
          <img src={logo2} alt="Logo Right 2" className="logo" />
        </div>
      </header>

      {/* Hero-секція */}
      <section className="hero">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="hero-text">
          <p>
            We’ve become an interdisciplinary global design firm by expanding
            our team beyond architects and interior designers to include
            researchers, urban designers, nurses, anthropologists, graphic
            designers and more.
          </p>
          <h2>The future isn’t happening to us, we are its architects.</h2>
        </div>
      </section>

      {/* Кнопки (CTA) */}
      <div className="cta-buttons">
        <button>Learn More</button>
        <button>Our Work</button>
        <button>Join Us</button>
        <button>Contact</button>
      </div>

      {/* Додаткова секція з картинкою */}
      <section className="additional-section">
        <img
          src={sectionImage}
          alt="Additional Section"
          className="section-image"
        />
      </section>
    </div>
  );
}

export default Sasi;
