const API_URL = import.meta.env.VITE_API_URL;

// Función para obtener una lista de Pokémon
export const getPokemonList = async (limit = 20, offset = 0) => {
  try {
    const response = await fetch(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`);
    if (!response.ok) throw new Error('Error al conectar con la PokeAPI');
    const data = await response.json();
    return data; // Devuelve la lista básica
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Función para obtener los detalles de un Pokémon específico
export const getPokemonDetails = async (nameOrId) => {
  try {
    const response = await fetch(`${API_URL}/pokemon/${nameOrId}`);
    if (!response.ok) throw new Error('Pokémon no encontrado');
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};