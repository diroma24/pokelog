import React from "react";
import { Link } from "react-router-dom";

export default function Counter({ count }) {
  return (
    <div className="w-full flex justify-center my-4">
      <div className="bg-white px-6 py-2 rounded-full shadow-sm border border-gray-200 inline-flex items-center gap-2 mb-6">
        <span className="flex h-3 w-3 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pokemon-red opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-pokemon-red"></span>
        </span>
        <p className="text-gray-600 font-bold text-sm">
          Pokémon cargados:{" "}
          <span className="text-pokemon-red text-lg">{count}</span>
        </p>
      </div>
    </div>
  );
}
