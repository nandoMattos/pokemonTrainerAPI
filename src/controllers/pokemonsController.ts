import { Request, Response } from "express";
import httpStatus from "http-status";
import { NewPokemonBody } from "../protocols/Pokemon.js";
import pokemonService from "../services/pokemonsService.js";

export async function postPokemon(req: Request, res: Response) {
  try {
    const newPokemonAndType = req.body as NewPokemonBody;
    await pokemonService.insertPokemonAndTypes(newPokemonAndType);

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
  const name = req.query.name as string;

  const pokemons = await pokemonService.getAllWithName(name);
  res.send(pokemons);
}
