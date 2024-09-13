import React from "react";
import { Link } from "react-router-dom";

// Componente Card que muestra la información del dentista y un enlace a la página de detalle
const Card = ({ id, name, username }) => {
  const handleAddToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.some((fav) => fav.id === id)) {
      favorites.push({ id, name, username });
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>@{username}</p>
      <p>ID: {id}</p>
      <Link to={`/dentist/${id}`}>View Details</Link>
      <button onClick={handleAddToFavorites}>Add to Favorites</button>
    </div>
  );
};

export default Card;
