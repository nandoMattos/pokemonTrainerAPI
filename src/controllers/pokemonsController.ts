import { Request, Response } from "express";
import { NewPokemonBody } from "../protocols/Pokemon.js";
import { insertPokemonAndTypes } from "../services/pokemonsService.js";

export async function postPokemon(req: Request, res: Response) {
  const newPokemon: NewPokemonBody = req.body;
  insertPokemonAndTypes(newPokemon);

  res.sendStatus(200);
}
