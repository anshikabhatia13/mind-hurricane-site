import React, { useState } from "react";
import TeamCard from "../components/TeamCard";
import "../styles/components.css";

const filters = ["All", "Engineering", "Science", "Leadership"];

const teamMembers = [
  {
    name: "Vivek Kumar Lal",
    role: "CEO, Mind Hurricane",
    dept: "Leadership",
    img: "https://img.etimg.com/thumb/width-420,height-315,imgsize-16374,resizemode-75,msid-110603604/news/international/us/young-sheldon-spinoff-will-jim-parsons-return-as-sheldon-in-georgie-and-mandys-first-marriage.jpg",
  },
  {
    name: "Penny Hofstadter",
    role: "Design, Mind Hurricane",
    dept: "Engineering",
    img: "https://i.pinimg.com/736x/5a/ff/1f/5aff1f690c738aa8e998c8d84eb82c6d.jpg",
  },
  {
    name: "Amy Farrah Fowler",
    role: "Scientist, Mind Hurricane",
    dept: "Science",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Amy_Farrah_Fowler_first_appearance.jpg/250px-Amy_Farrah_Fowler_first_appearance.jpg",
  },
  {
    name: "Leonard Hofstadter",
    role: "Scientist, Mind Hurricane",
    dept: "Engineering",
    img: "https://upload.wikimedia.org/wikipedia/en/7/77/Leonard_Hofstadter.jpg",
  },
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
