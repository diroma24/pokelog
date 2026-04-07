import React from "react";

//* Como prop usa pokemonData, donde se guardan los datos de cada pokemon
export default function PokemonCard({ pokemonData }) {
  //Si no tiene pokemonData devuelve una tarjeta con el texto "cargando"
  if (!pokemonData) return <div className="card">Cargando...</div>;

  //Si tiene dato muestra la infor del pokemon
  return (
    <div className="card">
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <h2 style={{ textTransform: 'capitalize' }}>{pokemonData.name}</h2>
      <div className="types-wrapper">
        {pokemonData.types.map((item, index) => (
          <span key={index} className={`type-badge ${item.type.name}`}>
            {item.type.name}
          </span>
        ))}
      </div>
      <p>ID: {pokemonData.id}</p>
    </div>
  );
}