import prisma from "../database/db.js";
import { NewPokemon, NewPokemonBody } from "../protocols/Pokemon.js";
import { NewType } from "../protocols/Type.js";

function insertOne(newPokemon: NewPokemon, newTypes: NewType[]) {
  const types = newTypes.map((t) => {
    return { type: { create: { name: t.name } } };
  });

  return prisma.pokemon.create({
    data: {
      name: newPokemon.name,
      weight: newPokemon.weight,
      type: {
        create: types,
      },
    },
  });
}

function findOne(name: string) {
  return prisma.pokemon.findFirst({ where: { name } });
}

const pokemonRepository = {
  insertOne,
  findOne,
};

export default pokemonRepository;
