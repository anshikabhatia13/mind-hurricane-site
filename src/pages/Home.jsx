import React, { useEffect } from "react";
import heroImg from "../assets/images/shutterstock_533991019.jpg"; // update filename if needed
import "../styles/global.css";

export default function Home() {
  useEffect(() => {
    // Reveal-on-scroll observer for elements with .reveal
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* HERO (full-bleed) */}
      <section
        className="home-hero reveal"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 36%',
          backgroundRepeat: 'no-repeat'
        }}
        aria-label="Hero — Mind Hurricane"
      >
        <div className="home-overlay" aria-hidden="true" />

        <div className="home-content">
          <h1 className="hero-title">
            Autonomous Robotics for Real-World Impact
          </h1>

          <p className="hero-subtitle">
            IIT-Ropar incubated Mind Hurricane designs AI-driven autonomous
            drones and robotic systems for defence, policing, and agri-tech.
          </p>

          <div className="hero-buttons">
            <a className="btn btn-primary" href="#contact">
              Get in Touch
            </a>
            <a className="btn btn-ghost" href="#about">
              Learn More
            </a>
          </div>
        </div>

        {/* Features row inside hero */}
        <div className="feature-row" aria-hidden="true">
          <div className="feature-card">
            <h3>Resilient Perception</h3>
            <p>Robust vision & sensor fusion in adverse conditions.</p>
          </div>

          <div className="feature-card">
            <h3>Adaptive Planning</h3>
            <p>Probabilistic planning that handles uncertainty in the field.</p>
          </div>

          <div className="feature-card">
            <h3>Secure Comms</h3>
            <p>Encrypted low-latency links for remote operation and telemetry.</p>
          </div>
        </div>
      </section>
{/* 
     
      <section className="home-features-secondary reveal" aria-label="Capabilities">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-card small">
              <h4>Edge AI</h4>
              <p>Lightweight inference optimized for onboard processors.</p>
            </div>
            <div className="feature-card small">
              <h4>Robust Autonomy</h4>
              <p>Fail-safe planning and resilient decision making.</p>
            </div>
            <div className="feature-card small">
              <h4>Integration</h4>
              <p>Seamless tooling and secure telemetry interfaces.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-about reveal" id="about-summary" aria-label="About summary">
        <div className="container">
          <h3>Why Mind Hurricane</h3>
          <p>
            We bridge rigorous research and practical engineering — building autonomous systems that are certifiable, field-tested and optimized for mission-critical use.
          </p>
        </div>
      </section> */}

      {/* Bottom CTA bar */}
      <div className="bottom-cta reveal" role="region" aria-label="Call to action" >
        <div className="container cta-inner" style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          margin: "0 auto 20px",
          flexWrap: "wrap",
        }}>
          <div className="cta-text">
            <strong>Ready to evaluate autonomous systems?</strong>
            <span>Schedule a pilot or request a technical discussion with our team.</span>
          </div>
          <div>
            <a className="btn btn-primary small" href="#contact">Talk to Sales</a>
          </div>
        </div>
      </div>
    </>
  );
}
