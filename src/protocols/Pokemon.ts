import { Pokemon } from "@prisma/client";

export type PokemonBody = Omit<Pokemon, "created_at" | "updated_at">;

export type NewPokemonBody = {
  name: string;
  weight: number;
  types: string[];
};
