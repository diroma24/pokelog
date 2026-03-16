/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import PokemonDetail from "./pages/PokemonDetail";
import Profile from "./pages/Profile";
import { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

  const fetchPokemon = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}${id}`);
      const data = await response.json();
      setPokemonList((prevList) => [...prevList, data]);
    } catch (error) {
      console.error("ERROR CON EL FETCH DEL POKEMON", id);
    }
  };

  const fetchAllPokemons = async () => {
    try {
      const pokemonPromises = [];
      for (let i = 1; i <= 20; i++) {
        pokemonPromises.push(fetch(`${BASE_URL}${i}`).then(res => res.json()));
      }

      const results = await Promise.all(pokemonPromises);
      
      setPokemonList(results);
    } catch (error) {
      console.error("Error cargando el catálogo", error);
    }
  };

  useEffect(() => {
    fetchAllPokemons();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchAllPokemons();
  }, []);

  return (
    <>
      <h1>Catálogo Pokémon</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemonData={pokemon} />
        ))}
        
        {/* Si la lista está vacía, mostrar un mensaje de carga.*/}
        {pokemonList.length === 0 && <p>Cargando catálogo...</p>}
      </div>
    </>
  );
}

export default App;
