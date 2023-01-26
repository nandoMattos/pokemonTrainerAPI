import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

export function validateSchemaMiddleware(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(422).send(error.details.map((d) => d.message));
    }
    next();
  };
}
