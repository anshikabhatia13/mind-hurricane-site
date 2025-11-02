import React, { useEffect, useRef } from "react";
export default function ParticlesCanvas() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    function sizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", sizeCanvas, { passive: true });
    sizeCanvas();

    const LAYERS = [
      {
        name: "far",
        count: 90,
        vy: [0.03, 0.1],
        r: [0.5, 1.0],
        depth: 0.35,
        scroll: 0.1,
      },
      {
        name: "mid",
        count: 80,
        vy: [0.06, 0.16],
        r: [0.7, 1.4],
        depth: 0.65,
        scroll: 0.18,
      },
      {
        name: "near",
        count: 70,
        vy: [0.1, 0.22],
        r: [0.9, 1.8],
        depth: 1.0,
        scroll: 0.26,
      },
    ];
    const TWINKLE = 0.035;
    const PARALLAX_MAX_X = 24;
    const PARALLAX_MAX_Y = 24;
    const PARALLAX_EASE = 0.06;

    function randIn([a, b]) {
      return a + Math.random() * (b - a);
    }
    function makeParticle(layer) {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vy: randIn(layer.vy),
        r: randIn(layer.r),
        a: 0.45 + Math.random() * 0.5,
        tw: Math.random() * Math.PI * 2,
      };
    }

    const layers = LAYERS.map((cfg) => ({
      cfg,
      particles: Array.from({ length: cfg.count }, () => makeParticle(cfg)),
    }));

    let parallax = { x: 0, y: 0, tx: 0, ty: 0 };

    function onMouse(e) {
      const cx = window.innerWidth / 2,
        cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      parallax.tx = dx * PARALLAX_MAX_X;
      parallax.ty = Math.abs(dy) * PARALLAX_MAX_Y;
    }
    function onDevice(e) {
      if (e.beta == null || e.gamma == null) return;
      const dx = Math.max(-1, Math.min(1, e.gamma / 45));
      const dy = Math.max(-1, Math.min(1, e.beta / 45));
      parallax.tx = dx * PARALLAX_MAX_X * 0.8;
      parallax.ty = Math.abs(dy) * PARALLAX_MAX_Y * 0.6;
    }

    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("deviceorientation", onDevice, { passive: true });

    document.addEventListener("visibilitychange", () => {
      pausedRef.current = document.hidden;
    });

    function draw() {
      if (pausedRef.current) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      parallax.x += (parallax.tx - parallax.x) * PARALLAX_EASE;
      parallax.y += (parallax.ty - parallax.y) * PARALLAX_EASE;

      const scrollY = window.scrollY || 0;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const layer of layers) {
        const { cfg, particles } = layer;

        ctx.save();
        const layerShiftX = parallax.x * cfg.depth;
        const layerShiftY =
          parallax.y * cfg.depth + scrollY * cfg.scroll * 0.08;
        ctx.translate(layerShiftX, layerShiftY);

        ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < i + 10 && j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const d2 = dx * dx + dy * dy;
            const max = 110 + cfg.depth * 25;
            if (d2 < max * max) {
              const a = 0.05 * (1 - Math.sqrt(d2) / max) * cfg.depth;
              if (a > 0) {
                ctx.strokeStyle = `rgba(0,255,210,${a})`;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
              }
            }
          }
        }

        for (const p of particles) {
          p.y += p.vy;
          if (p.y - p.r > canvas.height) {
            p.y = -p.r - Math.random() * 20;
            p.x = Math.random() * canvas.width;
            p.vy = randIn(cfg.vy);
          }

          p.tw += TWINKLE;
          const tw = 0.5 + 0.5 * Math.sin(p.tw);
          const alpha = Math.min(1, p.a * (0.7 + 0.3 * tw));

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,255,204,${alpha})`;
          ctx.shadowColor = "rgba(0,255,210,.85)";
          ctx.shadowBlur = 8 + 6 * cfg.depth;
          ctx.fill();
        }

        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    draw();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", sizeCanvas);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("deviceorientation", onDevice);
      io.disconnect();
    };
  }, []);

  return <canvas id="particles" aria-hidden="true" ref={canvasRef} />;
}
