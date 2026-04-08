import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/home"); 
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-sm w-full bg-white rounded-[2.5rem] shadow-2xl p-10 border border-gray-100 text-center">
        {/* Icono decorativo */}
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg 
            className="w-10 h-10 text-pokemon-red" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
            />
          </svg>
        </div>

        <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-2">
          Logging Out?
        </h2>
        <p className="text-gray-400 text-sm font-medium mb-8">
          Are you sure you want to end your session?
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleLogout}
            className="w-full bg-pokemon-red hover:bg-pokemon-dark text-white font-black uppercase tracking-widest py-4 rounded-2xl shadow-lg shadow-red-100 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Yes, Log Out
          </button>
          
          <button
            onClick={() => navigate(-1)} // Vuelve a la página anterior
            className="w-full bg-white text-gray-400 font-black uppercase tracking-widest py-4 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}