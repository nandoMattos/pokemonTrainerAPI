import { Router } from "express";
import {
  getAllPokemons,
  postPokemon,
} from "../controllers/pokemonsController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import pokemonSchema from "../schemas/pokemonSchema.js";

const router = Router();

router.post("/pokemons", validateSchemaMiddleware(pokemonSchema), postPokemon);
router.get("/pokemons", getAllPokemons);

export default router;
