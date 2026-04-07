import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import Counter from "../components/Counter";

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
        // Filtro para evitar duplicados por si acaso
        return combined.filter((p, idx, self) => idx === self.findIndex((t) => t.id === p.id));
      });
    } catch (e) { 
      console.error(e); 
    } finally { 
      setLoading(false); 
    }
  };

  useEffect(() => { fetchPokemons(); }, [offset]);

  return (
    <main className="px-4 py-8">
      <h1 className="text-4xl font-black text-center text-gray-800 mb-10 tracking-tighter uppercase">
        Poke <span className="text-pokemon-red">Log</span>
      </h1>

      <Counter count={pokemonList.length} />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {pokemonList.map((p, index) => (
          <PokemonCard key={`${p.id}-${index}`} pokemonData={p} />
        ))}
      </div>

      <div className="flex justify-center mt-16 mb-10">
        <button 
          onClick={() => setOffset(prev => prev + LIMIT)} 
          disabled={loading} 
          className="group relative bg-pokemon-red hover:bg-pokemon-dark text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Cargando...
            </div>
          ) : (
            "Cargar más Pokémon"
          )}
        </button>
      </div>
    </main>
  );
}