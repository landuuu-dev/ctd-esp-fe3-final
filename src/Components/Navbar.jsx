import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./utils/global.context"; // Asegúrate de la ruta correcta

const Navbar = () => {
  const { state, dispatch } = useGlobalContext();

  const handleThemeToggle = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className={state.theme}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/dentist/:id">Detail</Link>
        </li>
        <li>
          <Link to="/favs">Favorites</Link>
        </li>
      </ul>
      <button onClick={handleThemeToggle}>Change theme</button>
    </nav>
  );
};

export default Navbar;
