import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PokemonHeader from "../components/PokemonHeader";
import ImageGallery from "../components/ImageGallery";
import PhysicalInfo from "../components/PhysicalInfo";
import Stats from "../components/Stats";
import Locations from "../components/Locations";

export default function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPokemon = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();

      const locRes = await fetch(data.location_area_encounters);
      const locData = await locRes.json();

      setPokemon({
        ...data,
        locations: locData
      });
    } catch (error) {
      console.error("Error al traer al Pokémon:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pokemon-red"></div>
      </div>
    );
  }

  if (!pokemon)
    return <p className="text-center">No se encontró el Pokémon.</p>;

  return (
    <main className="mx-auto p-4 max-w-3xl">
      <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden mt-10">
        
        <PokemonHeader 
          name={pokemon.name} 
          id={pokemon.id} 
          types={pokemon.types} 
        />

        <div className="p-4 sm:p-8 flex flex-col items-center">
          <ImageGallery sprites={pokemon.sprites} name={pokemon.name} />
          
          <PhysicalInfo weight={pokemon.weight} height={pokemon.height} />
          
          <Stats stats={pokemon.stats} />
          
          <Locations locations={pokemon.locations} />
        </div>
        
      </div>
    </main>
  );
}
