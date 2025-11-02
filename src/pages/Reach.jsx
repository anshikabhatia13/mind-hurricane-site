import React, { useEffect, useRef } from "react";

export default function Reach() {
  const mapCardRef = useRef(null);

  useEffect(() => {
    const el = mapCardRef.current;
    if (!el) return;

    function onMove(e) {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left,
        y = e.clientY - r.top;
      const cx = r.width / 2,
        cy = r.height / 2;
      const rx = ((y - cy) / cy) * 6; 
      const ry = ((x - cx) / cx) * -6; 
      el.style.transform = `translateY(-6px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    }
    function onLeave() {
      el.style.transform = "";
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <h2 id="h-reach" className="reveal">
        Reach Us
      </h2>

      <div className="reach-wrap">
        <div
          className="panel-card map-card reveal"
          id="mapCard"
          ref={mapCardRef}
        >
          <div className="map-grid">
            <address className="addr">
              <div className="title">Visit Our Lab</div>
              <span className="line">
                <strong>Mind Hurricane</strong>
              </span>
              <span className="line">
                Technology Business Incubator Foundation
              </span>
              <span className="line">
                Top Floor (East Wing), M.&nbsp;Visvesvaraya Block
              </span>
              <span className="line">
                Indian Institute of Technology, Ropar
              </span>
              <span className="line">
                Rupnagar&nbsp;–&nbsp;140001,&nbsp;Punjab,&nbsp;India
              </span>
            </address>

            <div className="map-side">
              <iframe
                className="map-embed"
                title="Mind Hurricane Location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                src="https://www.google.com/maps?q=Mind%20Hurricane%20IIT%20Ropar&output=embed"
              />
            </div>
          </div>

          <div className="map-actions">
            <a
              className="link-btn"
              href="https://maps.app.goo.gl/NpYJXdFDzMSiHVS4A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M14 3h7v7"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 14L21 3"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 14v7H3V3h7"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
