import React from "react";

export default function TeamCard({ img, name, role }) {
  return (
    <div className="team-card">
      <img src={img} alt={name} className="team-img" />
      <div className="team-info">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
}
