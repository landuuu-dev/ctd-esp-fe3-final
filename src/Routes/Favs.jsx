import React, { useState, useEffect } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Función para eliminar un favorito del estado y actualizar la vista
  const handleRemove = (id) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorites(updatedFavorites); // Actualizar el estado
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Actualizar localStorage
  };

  return (
    <main>
      <h1>Favorites</h1>
      {favorites.length > 0 ? (
        <div className="card-grid">
          {favorites.map((dentist) => (
            <Card
              key={dentist.id}
              id={dentist.id}
              name={dentist.name}
              username={dentist.username}
              onRemove={handleRemove} // Pasamos la función de eliminación
            />
          ))}
        </div>
      ) : (
        <p>No favorite dentists found.</p>
      )}
    </main>
  );
};

export default Favs;
