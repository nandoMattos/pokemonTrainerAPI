import { NewPokemon, NewPokemonBody, PokemonBody } from "../protocols/Pokemon";
import { NewType } from "../protocols/Type";

export function convertToPokemon(pokemonBody: NewPokemonBody): NewPokemon {
  return {
    name: pokemonBody.name,
    weight: pokemonBody.weight,
  };
}

export function convertToType(pokemonBody: NewPokemonBody): NewType[] {
  return pokemonBody.types.map((t) => {
    return { name: t };
  });
}
