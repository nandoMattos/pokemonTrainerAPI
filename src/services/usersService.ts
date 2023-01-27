import { prisma, PrismaPromise, User } from "@prisma/client";
import conflictError from "../errors/conflictError.js";
import { NewUserBody } from "../protocols/User.js";
import userRepository from "../repositories/userRepository.js";

export async function insertUser(newUser: NewUserBody) {
  const existentUser = await userRepository.findOneByName(newUser.name);
  if (existentUser) {
    throw conflictError(`Username ${newUser.name} already registered.`);
  }

  await userRepository.insertOne(newUser);
}

export async function findMany(name: string): Promise<PrismaPromise<User[]>> {
  return await userRepository.findMany(name);
}
