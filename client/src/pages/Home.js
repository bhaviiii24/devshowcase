import React from 'react';
import '../styles/Home.css';
//mport profilePic from '../assets/hero-bg.jpg.png'; // Put your profile image here

export default function Home() {
  return (
    <div className="home">
      <section className="hero-text">
       
          
        
        <h1>Bhavika Sehgal</h1>
        <h2>Full Stack Developer</h2>
        <p>
          Passionate about building scalable web applications and beautiful user
          experiences. Skilled in React, Node.js, and UI design.
        </p>
      </section>

      <h3 className="projects-title">Featured Projects</h3>
      <section className="featured-projects-preview">
        <article className="preview-card">
          <h3>Project One</h3>
          <p>A React app for managing your tasks with a simple, elegant UI.</p>
        </article>
        <article className="preview-card">
          <h3>Project Two</h3>
          <p>An e-commerce website built with Node.js and Express backend.</p>
        </article>
        <article className="preview-card">
          <h3>Project Three</h3>
          <p>Portfolio website showcasing my work with smooth animations.</p>
        </article>
      </section>
    </div>
  );
}
