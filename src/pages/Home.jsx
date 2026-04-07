import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const LIMIT = 20;

  const fetchPokemons = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`);
      const data = await response.json();
      const promises = data.results.map((p) => fetch(p.url).then((res) => res.json()));
      const newPokemons = await Promise.all(promises);

      setPokemonList((prev) => {
        const combined = [...prev, ...newPokemons];
        return combined.filter((p, idx, self) => idx === self.findIndex((t) => t.id === p.id));
      });
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchPokemons(); }, [offset]);

  return (
    <main>
      <h1>Pokedex Online</h1>
      <div className="pokemon-grid">
        {pokemonList.map((p, index) => <PokemonCard key={`${p.id}-${index}`} pokemonData={p} />)}
      </div>
      <div className="pagination-container">
      <button 
        onClick={() => setOffset(prev => prev + LIMIT)} 
        disabled={loading} 
        className="load-more-btn"
      >
        {loading ? "Cargando..." : "Cargar más"}
      </button>
    </div>
    </main>
  );
}