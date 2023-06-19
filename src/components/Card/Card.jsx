import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ src, text, label, path }) => {
  return (
    <div className="card">
      <Link to={path}>
        <img src={src} alt="CardImage" className="card__image" />
        <span className="card__label">{label}</span>
        <div className="card__content">
          <h3 className="card__text">{text}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;
