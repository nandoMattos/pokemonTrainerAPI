import conflictError from "../errors/conflictError.js";
import { NewPokemonBody } from "../protocols/Pokemon.js";
import pokemonRepository from "../repositories/pokemonRepository.js";
import { convertToPokemon, convertToType } from "../utilities/convertions.js";

async function insertPokemonAndTypes(pokemonBody: NewPokemonBody) {
  const newPokemon = convertToPokemon(pokemonBody);
  const newTypes = convertToType(pokemonBody);

  const pokemonExists = await pokemonRepository.findOneByName(newPokemon.name);
  if (pokemonExists) {
    throw conflictError(`Pokemon ${newPokemon.name} already registered.`);
  }

  await pokemonRepository.insertOneConnectingTypes(newPokemon, newTypes);
}

async function getAllWithName(name: string) {
  return await pokemonRepository.findManyWithName(name);
}

const pokemonService = {
  insertPokemonAndTypes,
  getAllWithName,
};

export default pokemonService;
