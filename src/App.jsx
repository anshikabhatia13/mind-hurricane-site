import React from "react";
import Navbar from "./components/Navbar";
import ParticlesCanvas from "./components/ParticlesCanvas";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Reach from "./pages/Reach";
import Team from "./pages/Team";
import Home from "./pages/Home";

/**
 * Single-page layout using anchors to match the original HTML.
 * Keep sections in the same order so anchors work exactly as before.
 */
export default function App() {
  return (
    <>
      <ParticlesCanvas />
      <div id="app">
        <Navbar />

        <div id="top" className="spacer" />

        <main>
          <section id="home" aria-labelledby="h-home">
            <Home />
          </section>
          
          <section id="about" aria-labelledby="h-about">
            <About />
          </section>

          <section id="team" aria-labelledby="h-team">
            <Team />
          </section>

           <section id="contact" aria-labelledby="h-contact">
            <Contact />
          </section>

          <section id="reach" aria-labelledby="h-reach">
            <Reach />
          </section>

        </main>
        {/* <Route path="/team" element={<Team />} /> */}
        <Footer />
      </div>
    </>
  );
}
