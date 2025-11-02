// src/pages/Team.jsx
import React, { useState } from "react";
import TeamCard from "../components/TeamCard";
import "../styles/components.css";

const filters = ["All", "Engineering", "Science", "Leadership"];

const teamMembers = [
  {
    name: "Vivek Kumar Lal",
    role: "CEO, Mind Hurricane",
    dept: "Leadership",
    img: "/src/assets/images/sheldon.jpg",
  },
  {
    name: "Vivek Kumar Lal",
    role: "CEO, Mind Hurricane",
    dept: "Engineering",
    img: "/src/assets/images/sheldon.jpg",
  },
  {
    name: "Vivek Kumar Lal",
    role: "CEO, Mind Hurricane",
    dept: "Science",
    img: "/src/assets/images/sheldon.jpg",
  },
  {
    name: "Vivek Kumar Lal",
    role: "CEO, Mind Hurricane",
    dept: "Leadership",
    img: "/src/assets/images/sheldon.jpg",
  },
  // ✅ add more team profiles here
];

export default function Team() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredMembers =
    activeFilter === "All"
      ? teamMembers
      : teamMembers.filter((m) => m.dept === activeFilter);

  return (
    <section id="team" className="team-section">
      <h2 className="team-title">Meet Our Team</h2>

       <div
        className="team-filters"
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          margin: "0 auto 20px",
          flexWrap: "wrap",
        }}
      >
        {filters.map((f) => (
          <button
            key={f}
            className={`team-chip ${activeFilter === f ? "active" : ""}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="team-grid">
        {filteredMembers.map((member, i) => (
          <TeamCard key={i} {...member} />
        ))}
      </div>
    </section>
  );
}
