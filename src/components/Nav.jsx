import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { auth } from "../firebase"; 
import { onAuthStateChanged } from "firebase/auth";

export default function Nav() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleInicioClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-center items-center gap-8 p-4 bg-white shadow-md w-full mb-6">
      
      <Link to="/" onClick={handleInicioClick} className="text-gray-700 font-bold hover:text-pokemon-red transition-colors duration-300">
        Home
      </Link>

      <Link to="/search" className="text-gray-700 font-bold hover:text-pokemon-red transition-colors duration-300">
        Search
      </Link>

      {/* MENÚ DESPLEGABLE DE PERFIL */}
      {user ? (
        <div className="relative group">
          {/* Botón principal de My Profile */}
          <Link 
            to="/profile" 
            className="text-gray-700 font-bold hover:text-pokemon-red transition-colors duration-300 flex items-center gap-1 py-2"
          >
            My Profile
            <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </Link>

          {/* Cortina / Dropdown Menu */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-48 bg-white border border-gray-100 shadow-xl rounded-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
            <div className="flex flex-col">
              <Link to="/checklist" className="px-4 py-2 text-xs font-bold text-gray-500 hover:bg-gray-50 hover:text-pokemon-red transition-colors">
                CHECKLIST
              </Link>
              <Link to="/wishlist" className="px-4 py-2 text-xs font-bold text-gray-500 hover:bg-gray-50 hover:text-pokemon-red transition-colors">
                WISHLIST
              </Link>
              <Link to="/missing" className="px-4 py-2 text-xs font-bold text-gray-500 hover:bg-gray-50 hover:text-pokemon-red transition-colors">
                MISSING POKÉMON
              </Link>
              <div className="h-[1px] bg-gray-100 my-2 mx-4"></div>
              <Link to="/analytics" className="px-4 py-2 text-xs font-bold text-gray-500 hover:bg-gray-50 hover:text-pokemon-red transition-colors">
                ANALYTICS
              </Link>
              <Link to="/share" className="px-4 py-2 text-xs font-bold text-gray-500 hover:bg-gray-50 hover:text-pokemon-red transition-colors">
                SHARE PROGRESS
              </Link>
              <div className="h-[1px] bg-gray-100 my-2 mx-4"></div>
              <Link to="/logout" className="px-4 py-2 text-xs font-bold text-red-400 hover:bg-red-50 transition-colors">
                LOG OUT
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      <a 
        href="https://pokeapi.co/" 
        target="_blank" 
        rel="noreferrer"
        className="text-gray-400 font-medium hover:text-gray-600 transition-colors duration-300 border-l pl-8 border-gray-200"
      >
        API Doc
      </a>

      {!user && (
        <>
          <Link to="/register" className="bg-pokemon-red hover:bg-pokemon-dark text-white font-medium transition-colors duration-300 px-4 py-1 rounded-full">
            Create an Account
          </Link>
          <Link to="/login" className="bg-white text-gray-400 hover:text-gray-600 shadow-sm border border-gray-200 font-medium transition-colors duration-300 px-4 py-1 rounded-full">
            Log In
          </Link>
        </>
      )}
    </nav>
  );
}