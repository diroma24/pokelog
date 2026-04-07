import React from "react";

export default function PokemonCard({ pokemonData }) {
  // Estado de carga con estilo Tailwind
  if (!pokemonData) {
    return (
      <div className="bg-gray-100 animate-pulse rounded-2xl h-64 w-full flex items-center justify-center text-gray-400 font-medium">
        Cargando...
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 p-5 text-center transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center">
      
      <div className="relative w-32 h-32 mb-4 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-red-50 transition-colors duration-300">
        <img 
          src={pokemonData.sprites.front_default} 
          alt={pokemonData.name} 
          className="w-28 h-28 object-contain z-10 drop-shadow-md"
        />
      </div>

      <h2 className="text-xl font-bold capitalize text-gray-800 mb-2">
        {pokemonData.name}
      </h2>

      <div className="flex justify-center gap-2 mb-4">
        {pokemonData.types.map((item, index) => (
          <span 
            key={index} 
            className={`type-${item.type.name} text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-sm tracking-wider`}
          >
            {item.type.name}
          </span>
        ))}
      </div>

      <div className="mt-auto">
        <span className="text-xs font-mono font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-lg">
          #{pokemonData.id.toString().padStart(3, '0')}
        </span>
      </div>
    </div>
  );
}