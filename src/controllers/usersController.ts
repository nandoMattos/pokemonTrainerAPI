import { Request, Response } from "express";
import httpStatus from "http-status";
import { NewUserBody } from "../protocols/User.js";
import { findMany, insertUser } from "../services/usersService.js";

export async function postUser(req: Request, res: Response) {
  try {
    const newUser = req.body as NewUserBody;
    await insertUser(newUser);

    res.sendStatus(httpStatus.CREATED);
  } catch (err) {
    console.log(err);
    if (err.name === "ConflictError") {
      return res.sendStatus(httpStatus.CONFLICT);
    }

    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getUsers(req: Request, res: Response) {
  const userName = req.query.name as string;
  const users = await findMany(userName);

  res.send(users);
}
