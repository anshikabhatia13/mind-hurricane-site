// src/pages/Home.jsx
import React from "react";
import heroImg from "../assets/images/shutterstock_533991019.jpg"; // placeholder image path
import "../styles/components.css";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="home-hero">
        <div
          className="home-hero-bg"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden="true"
        />
        <div className="home-hero-overlay" />

        <div className="home-hero-content reveal">
          <div className="home-hero-left">
            <h1 className="hero-title">Autonomous Robotics for Real-World Impact</h1>
            <p className="hero-sub">
              IIT-incubated Mind Hurricane designs AI-driven autonomous drones and robotic systems for defence,
              policing, and agri-tech — robust, safe and deployable.
            </p>

            <div className="hero-ctas">
              <a className="link-btn" href="#contact">Get in Touch</a>
              <a className="ghost-btn" href="#about">Learn More</a>
            </div>

            <div className="hero-trust">
              <span>Trusted by</span>
              <div className="trust-logos">
                <div className="logo-pill">IIT ROPAR</div>
                <div className="logo-pill">Govt Partner</div>
                <div className="logo-pill">Research Labs</div>
              </div>
            </div>
          </div>

          {/* <div className="home-hero-right">
            Large glass card to mimic screenshot product-panel
            <div className="hero-panel">
              <div className="panel-media" aria-hidden="true" />
              <div className="panel-body">
                <h3>Edge AI · Robust Autonomy</h3>
                <p>Lightweight onboard inference, resilient perception, and fail-safe planning for uncertain environments.</p>
                <div className="panel-meta">
                  <span>Edge processing</span>
                  <span>Multi-modal sensing</span>
                  <span>Real-time control</span>
                </div>
                <div style={{ marginTop: 10 }}>
                  <a className="link-btn" href="#reach">Request Demo</a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* FEATURES */}
      <section className="home-features reveal">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Resilient Perception</h4>
              <p>Robust vision & sensor fusion in adverse conditions.</p>
            </div>
            <div className="feature-card">
              <h4>Adaptive Planning</h4>
              <p>Probabilistic planning that handles uncertainty in the field.</p>
            </div>
            <div className="feature-card">
              <h4>Secure Comms</h4>
              <p>Encrypted low-latency links for remote operation and telemetry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SUMMARY */}
      <section className="home-about reveal" id="about-summary">
        <div className="container">
          <div className="about-split">
            <div>
              <h3>Why Mind Hurricane</h3>
              <p>
                We bridge rigorous research and practical engineering — building autonomous systems that are
                certifiable, field-tested and optimised for mission-critical use. We partner with universities,
                government and industry to accelerate deployment.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="home-cta reveal">
        <div className="container">
          <div className="cta-row">
            <div>
              <h3>Ready to evaluate autonomous systems?</h3>
              <p>Schedule a pilot or request a technical discussion with our team.</p>
            </div>
            <div>
              <a className="link-btn" href="#contact">Talk to Sales</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
