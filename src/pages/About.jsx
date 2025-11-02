import React from "react";

export default function About() {
  return (
    <section id="about" className="about-section reveal">
      <div className="about-hero">
        <h2 className="about-title">About Us</h2>
        <p className="about-sub">
          <strong>Mind Hurricane</strong> is an IIT Ropar incubated robotics and
          AI startup building next-generation autonomous systems for defence,
          policing, and agri-tech sectors.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            To enable trustworthy AI-driven autonomy that enhances national
            security, optimizes field operations, and empowers human
            decision-making.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            A future where intelligent machines operate safely alongside humans
            — from farms to borders to cities.
          </p>
        </div>
      </div>

      <div className="about-banner">
        <h3>BEYOND MECHANICAL ROBOTS</h3>
        <p>
          We design cognitive systems — autonomous, adaptive, and built for
          real-world uncertainty.
        </p>
      </div>

      <div className="about-stats">
        <div>
          <span>3+</span> Years of R&D
        </div>
        <div>
          <span>5+</span> Field Deployments
        </div>
        <div>
          <span>2</span> IIT Incubations
        </div>
        <div>
          <span>3</span> Industry Domains
        </div>
      </div>
    </section>
  );
}
