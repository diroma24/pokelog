import { useState } from "react";
import PokemonCard from "../components/PokemonCard";

export default function Search() {
  const [query, setQuery] = useState(""); 
  const [pokemon, setPokemon] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(false); 

  const handleSearch = async (e) => {
    e.preventDefault(); 
    if (!query) return;

    setLoading(true);
    setError(false);
    setPokemon(null);

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);

      if (!response.ok) {
        throw new Error("Pokemon no encontrado");
      }
      
      const data = await response.json();
      setPokemon(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    // 'min-h-[80vh]' para que no se vea vacío el fondo, 'px-4' para márgenes móviles
    <main className="max-w-4xl mx-auto px-4 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-black text-gray-800 mb-10 tracking-tight">
        Buscador de Pokémon
      </h1>
      
      <form onSubmit={handleSearch} className="flex w-full max-w-md shadow-lg rounded-full overflow-hidden border-2 border-transparent focus-within:border-pokemon-red transition-all duration-300">
        <input 
          type="text" 
          placeholder="Ej: Pikachu o 25" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-6 py-3 outline-none text-gray-700 bg-white"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="bg-pokemon-red hover:bg-pokemon-dark text-white px-8 py-3 font-bold transition-colors disabled:bg-gray-400 flex items-center justify-center min-w-[120px]"
        >
          {loading ? (
             <span className="animate-pulse">...</span>
          ) : "Buscar"}
        </button>
      </form>

      <div className="mt-12 w-full flex justify-center">
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-md animate-bounce">
            <p className="font-bold">¡Vaya!</p>
            <p>No se encontró ningún Pokémon con ese nombre.</p>
          </div>
        )}
        
        {pokemon && (
          <div className="flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-500">
            <PokemonCard pokemonData={pokemon} />
            <p className="text-gray-500 font-medium italic bg-white px-4 py-1 rounded-full shadow-sm">
              Pokémon Encontrado
            </p>
          </div>
        )}
      </div>
    </main>
  );
}