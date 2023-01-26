import Joi from "joi";

const pokemonSchema = Joi.object({
  name: Joi.string().max(20).required(),
  weight: Joi.number().positive().required(),
  types: Joi.array().items(Joi.string().max(10)).required(),
});

export default pokemonSchema;
