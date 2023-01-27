import { Request, Response } from "express";
import httpStatus from "http-status";
import prisma from "../database/db.js";
import { NewPokemonBody } from "../protocols/Pokemon.js";
import { insertPokemonAndNewType } from "../services/pokemonsService.js";
import { convertToPokemon, convertToType } from "../utilities/convertions.js";

export async function postPokemon(req: Request, res: Response) {
  const newPokemonAndType: NewPokemonBody = req.body;
  const newPokemon = convertToPokemon(newPokemonAndType);
  const newTypes = convertToType(newPokemonAndType);

  try {
    await insertPokemonAndNewType(newPokemon, newTypes);

    res.sendStatus(httpStatus.CREATED);
  } catch (err) {
    console.log(err);
    if (err.name === "ConflictError") {
      return res.sendStatus(httpStatus.CONFLICT);
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getAllPokemons(req: Request, res: Response) {
  const pokemons = await prisma.pokemon.findMany();
  res.send(pokemons);
}
