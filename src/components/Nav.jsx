import React from "react";
import { Link } from "react-router-dom"; 

export default function Nav() {
    const handleInicioClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <nav className="main-nav">
      <Link to="/" onClick={handleInicioClick}>Inicio</Link>
      <Link to="/search">Buscar</Link>
      <Link to="/profile">Mi perfil</Link>
      <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">API Doc</a>
    </nav>
  );
}