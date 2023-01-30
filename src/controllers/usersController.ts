import { Request, Response } from "express";
import httpStatus from "http-status";
import { NewUserBody } from "../protocols/User.js";
import usersService, {
  findMany,
  insertUser,
} from "../services/usersService.js";

export async function postUser(req: Request, res: Response) {
  try {
    const newUser = req.body as NewUserBody;
    await insertUser(newUser);

    res.sendStatus(httpStatus.CREATED);
  } catch (err) {
    if (err.name === "ConflictError") {
      return res.sendStatus(httpStatus.CONFLICT);
    }

    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getUsers(req: Request, res: Response) {
  try {
    const userName = req.query.name as string;
    const users = await findMany(userName);

    return res.status(httpStatus.OK).send(users);
  } catch (err) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function capturePokemon(req: Request, res: Response) {
  try {
    const userId = Number(req.params.userId);
    const pokemonId = Number(req.params.pokemonId);

    await usersService.handleCapture(userId, pokemonId);

    res.sendStatus(httpStatus.NO_CONTENT);
  } catch (err) {
    if (err.name === "ConflictError") {
      return res.status(httpStatus.CONFLICT).send(err.message);
    }
    if (err.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(err.message);
    }
  }
}
