import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Asegúrate de que la ruta sea correcta
import { onAuthStateChanged, signOut } from "firebase/auth";

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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLogout = async () => {
    try {
      navigate("/logout");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-center items-center gap-8 p-4 bg-white shadow-md w-full mb-6">
      <Link
        to="/"
        onClick={handleInicioClick}
        className="text-gray-700 font-bold hover:text-pokemon-red transition-colors duration-300"
      >
        Home
      </Link>

      <Link
        to="/search"
        className="text-gray-700 font-bold hover:text-pokemon-red transition-colors duration-300"
      >
        Search
      </Link>

      {user && (
        <Link
          to="/profile"
          className="text-gray-700 font-bold hover:text-pokemon-red transition-colors duration-300"
        >
          My Profile
        </Link>
      )}

      <a
        href="https://pokeapi.co/"
        target="_blank"
        rel="noreferrer"
        className="text-gray-400 font-medium hover:text-gray-600 transition-colors duration-300 border-l pl-8 border-gray-200"
      >
        API Doc
      </a>

      {user ? (
        <button
          onClick={handleLogout}
          className="bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-pokemon-red font-medium transition-colors duration-300 px-4 py-1 rounded-full border border-gray-200"
        >
          Log Out
        </button>
      ) : (
        <>
          <Link
            to="/register"
            className="bg-pokemon-red hover:bg-pokemon-dark text-white font-medium transition-colors duration-300 px-4 py-1 rounded-full"
          >
            Create an Account
          </Link>

          <Link
            to="/login"
            className="bg-white text-gray-400 hover:text-gray-600 shadow-sm border border-gray-200 font-medium transition-colors duration-300 px-4 py-1 rounded-full"
          >
            Log In
          </Link>
        </>
      )}
    </nav>
  );
}
