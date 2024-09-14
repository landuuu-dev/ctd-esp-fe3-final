import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Card = ({ id, name, username, onRemove }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = favorites.some((fav) => fav.id === id);
    setIsFavorite(isFav);
  }, [id]);

  const handleAddToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.some((fav) => fav.id === id)) {
      favorites.push({ id, name, username });
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  const handleRemoveFromFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(false);

    if (onRemove) {
      onRemove(id);
    }
  };

  return (
    <div className="card">
      <img
        src="/public/images/doctor.jpg"
        alt="Dentist"
        className="card-image"
      />
      <h2>{name}</h2>
      <p>@{username}</p>
      <p>ID: {id}</p>
      <Link to={`/dentist/${id}`}>View Details</Link>
      {isFavorite ? (
        <button onClick={handleRemoveFromFavorites}>
          Remove from Favorites
        </button>
      ) : (
        <button onClick={handleAddToFavorites}>Add to Favorites</button>
      )}
    </div>
  );
};

export default Card;
