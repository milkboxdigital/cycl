import React from "react";
import Card from "../card";
import circles from "../../assets/circles.svg";

const SessionCard = ({
  title,
  description,
  numMembers,
  onClick,
  style,
  to,
}) => {
  return (
    <Card to={to} onClick={onClick} style={style}>
      <p style={{ font: "var(--mini-title)", margin: "0 0 4px" }}>{title}</p>
      <p style={{ font: "var(--copy14)", margin: "0 0 8px" }}>{description}</p>
      <div style={{ display: "flex", gap: "4px" }}>
        <img src={circles} alt="" />
        <p
          style={{ font: "var(--copy12)", color: "var(--slate)", margin: "0" }}
        >
          {numMembers} members
        </p>
      </div>
    </Card>
  );
};

export default SessionCard;
