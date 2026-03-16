import React from "react";

export default function PokemonCard({ pokemonData }) {

    if (!pokemonData) {
        return <div className="card">Cargando...</div>;
    }

    return (
        <div className="card">
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            <div>
                <h2>{pokemonData.name}</h2>
                <p>ID: {pokemonData.id}</p>
            </div>
        </div>
    );
}