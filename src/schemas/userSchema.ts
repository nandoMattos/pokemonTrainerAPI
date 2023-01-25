import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string().max(20).required(),
});

export default userSchema;
