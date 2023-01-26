import { Request, Response } from "express";
import { NewUserBody } from "../protocols/User.js";
import { findMany, insertUser } from "../services/usersService.js";

export function postUser(req: Request, res: Response) {
  const newUser = req.body as NewUserBody;
  insertUser(newUser);

  res.sendStatus(200);
}

export async function getUsers(req: Request, res: Response) {
  const userName = req.query.name as string;
  const users = await findMany(userName);

  res.send(users);
}
