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
    <nav className="sticky top-0 z-50 flex justify-center items-center gap-8 p-4 bg-white shadow-md w-full mb-6">
      
      <Link 
        to="/" 
        onClick={handleInicioClick}
        className="text-gray-700 font-bold hover:text-pokemon-red transition-colors duration-300"
      >
        Inicio
      </Link>

      <Link 
        to="/search" 
        className="text-gray-700 font-bold hover:text-pokemon-red transition-colors duration-300"
      >
        Buscar
      </Link>

      <Link 
        to="/profile" 
        className="text-gray-700 font-bold hover:text-pokemon-red transition-colors duration-300"
      >
        Mi perfil
      </Link>

      <a 
        href="https://pokeapi.co/" 
        target="_blank" 
        rel="noreferrer"
        className="text-gray-400 font-medium hover:text-gray-600 transition-colors duration-300 border-l pl-8 border-gray-200"
      >
        API Doc
      </a>
    </nav>
  );
}