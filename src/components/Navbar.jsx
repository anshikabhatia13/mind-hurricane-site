import React, { useEffect, useRef, useState } from "react";
import logoImg from "../assets/images/mind-hurricane-logo.jpg";

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
    if (backdropRef.current)
      backdropRef.current.style.display = open ? "block" : "none";
  }, [open]);

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

        <div
          className={`nav-links ${open ? "show" : ""}`}
          id="nav-links"
          ref={navLinksRef}
        >
          <a href="#home" onClick={onLinkClick}>
            Home
          </a>
          <a href="#about" onClick={onLinkClick}>
            About
          </a>
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
      <div
        id="backdrop"
        ref={backdropRef}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />
    </>
  );
}
