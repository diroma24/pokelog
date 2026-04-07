import { useState } from "react";
import PokemonCard from "../components/PokemonCard";

export default function Search() {
  const [query, setQuery] = useState(""); // Lo que el usuario escribe
  const [pokemon, setPokemon] = useState(null); // El Pokémon encontrado
  const [loading, setLoading] = useState(false); // Estado de carga
  const [error, setError] = useState(false); // Por si no existe

  const handleSearch = async (e) => {
    e.preventDefault(); // Evita que la página se recargue
    if (!query) return;

    setLoading(true);
    setError(false);
    setPokemon(null);

    try{
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);

      if(!response.ok){
        throw new Error("Pokemon no encontrado");
      }
      
      const data = await response.json();
      setPokemon(data);
    // eslint-disable-next-line no-unused-vars
    }catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    };
  }
  
  return (
    <main className="search-page"> {/* Añade la clase para el CSS que hicimos */}
      <h1>Buscador de Pokémon</h1>
      
      <form onSubmit={handleSearch} className="search-form">
        <input 
          type="text" 
          placeholder="Ej: Pikachu o 25" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </form>

      {/* El resultado mejor fuera del form */}
      <div className="search-result">
        {error && <p className="error-msg">No se encontró ningún Pokémon.</p>}
        
        {pokemon && (
          <div className="single-result">
            <PokemonCard pokemonData={pokemon} />
            <p>Pokemon encontrado</p>
          </div>
        )}
      </div>
    </main>
  );
}