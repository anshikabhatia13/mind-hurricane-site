import React from "react";

/**
 * Contact form currently opens Gmail compose (same as original).
 * Replace handleSubmit to call /api/contact (contactService) when backend is ready.
 */
export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    // same behavior as original: open gmail compose with to filled
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=mindhurricane.tech@gmail.com",
      "_blank"
    );
  }

  return (
    <div className="contact-wrap">
      <div className="panel-card contact-card reveal">
        <h2 id="h-contact">Contact Us</h2>
        <p className="intro">We’re open to collaborations, pilots, and research partnerships.</p>

        <div className="contact-content">
          <form className="contact-box" onSubmit={handleSubmit}>
            <label>
              <span className="sr-only">Your Name</span>
              <input type="text" placeholder="Your Name" required />
            </label>
            <label>
              <span className="sr-only">Your Email</span>
              <input type="email" placeholder="Your Email" required />
            </label>
            <label>
              <span className="sr-only">Your Message</span>
              <textarea rows="5" placeholder="Your Message" required />
            </label>
            <button type="submit">Submit</button>
          </form>

          <p className="sub" style={{ marginTop: 14 }}>
            📧 <strong>Email:</strong>{" "}
            <a href="mailto:mindhurricane.tech@gmail.com">mindhurricane.tech@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
