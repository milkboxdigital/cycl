import React from "react";
import { Link } from 'react-router-dom';

const Card = ({ children, style, to, onClick }) => {
  return (
    <Link
      to={to || '/'}
      style={{
        borderRadius: "10px",
        backgroundColor: "var(--cream)",
        padding: "12px 16px",
        cursor: onClick ? "pointer" : "auto",
        textDecoration: 'none',
        color: 'inherit',
        ...style,
      }}
      role={onClick ? "button" : undefined}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Card;
