import prisma from "../database/db.js";
import { NewPokemon, NewPokemonBody } from "../protocols/Pokemon.js";
import { NewType } from "../protocols/Type.js";

function insertOneConnectingTypes(pokemon: NewPokemon, types: NewType[]) {
  const arrTypes = types.map((t) => {
    return { where: t, create: t };
  });

  return prisma.pokemon.create({
    data: {
      ...pokemon,
      types: {
        connectOrCreate: arrTypes,
      },
    },
  });
}

function findOneById(id: number) {
  return prisma.pokemon.findFirst({ where: { id } });
}

function findOneByName(name: string) {
  return prisma.pokemon.findFirst({ where: { name } });
}

function findManyWithName(name?: string) {
  return prisma.pokemon.findMany({
    where: { name: { startsWith: name, mode: "insensitive" } },
    select: {
      id: true,
      name: true,
      types: { select: { id: true, name: true } },
    },
  });
}

const pokemonRepository = {
  insertOneConnectingTypes,
  findOneById,
  findOneByName,
  findManyWithName,
};

export default pokemonRepository;
