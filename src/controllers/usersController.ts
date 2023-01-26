import { Request, Response } from "express";
import { UserBody } from "../protocols/User.js";
import userRepository from "../repositories/userRepository.js";

type ReqUserBody = Omit<UserBody, "id">;
export async function postUser(req: Request, res: Response) {
  const newUser: ReqUserBody = req.body;

  await userRepository.insertOne(newUser);

  res.sendStatus(200);
}

export async function getAllUsers(req: Request, res: Response) {
  const users = await userRepository.findAllUsers();
  res.send(users);
}
