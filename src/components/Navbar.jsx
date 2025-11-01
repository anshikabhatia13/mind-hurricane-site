import React, { useEffect, useRef, useState } from "react";
import logoImg from "../assets/images/mind-hurricane-logo.jpg";

/**
 * Navbar replicates the original nav:
 * - Shrinks on scroll
 * - Mobile hamburger toggles nav links and backdrop
 * - Links use anchors to sections
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  const backdropRef = useRef(null);
  const navLinksRef = useRef(null);
  const hamburgerRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      setShrink(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Show/hide backdrop element
    if (backdropRef.current) backdropRef.current.style.display = open ? "block" : "none";
  }, [open]);

  // close menu when link clicked
  function onLinkClick() {
    setOpen(false);
  }

  return (
    <>
      <nav
        id="navbar"
        ref={navbarRef}
        role="navigation"
        aria-label="Main"
        className={shrink ? "shrink" : ""}
      >
        <div className="brand">
          <a className="nav-logo" href="#top" aria-label="Back to top">
            <img src={logoImg} alt="Mind Hurricane Logo" />
          </a>
          <div className="nav-title" aria-label="Site title">
            Mind Hurricane
          </div>
        </div>

        <div className={`nav-links ${open ? "show" : ""}`} id="nav-links" ref={navLinksRef}>
            <a href="#home" onClick={onLinkClick}>
            Home
          </a>
          <a href="#about" onClick={onLinkClick}>
            About
          </a>
          {/* <a href="#products" onClick={onLinkClick}>
            Products
          </a>
          <a href="#industries" onClick={onLinkClick}>
            Industries
          </a> */}
          <a href="#team" onClick={onLinkClick}>
            Team
          </a>
          <a href="#contact" onClick={onLinkClick}>
            Contact
          </a>
          <a href="#reach" onClick={onLinkClick}>
            Reach
          </a>

        </div>

        <button
          className={`hamburger ${open ? "active" : ""}`}
          id="hamburger"
          aria-label="Open menu"
          aria-controls="nav-links"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          ref={hamburgerRef}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Backdrop for mobile menu */}
      <div id="backdrop" ref={backdropRef} aria-hidden={!open} onClick={() => setOpen(false)} />
    </>
  );
}
