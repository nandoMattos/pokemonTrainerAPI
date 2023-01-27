import conflictError from "../errors/conflictError.js";
import { NewPokemon, NewPokemonBody } from "../protocols/Pokemon.js";
import { NewType } from "../protocols/Type.js";
import pokemonRepository from "../repositories/pokemonRepository.js";

export async function insertPokemonAndNewType(
  newPokemon: NewPokemon,
  newTypes: NewType[]
) {
  const existentPokemon = await pokemonRepository.findOne(newPokemon.name);
  if (existentPokemon) {
    throw conflictError(`Pokemon named ${newPokemon.name} already registered.`);
  }
  await pokemonRepository.insertOne(newPokemon, newTypes);
}
