import { PrismaPromise, User } from "@prisma/client";
import { NewUserBody } from "../protocols/User.js";
import userRepository from "../repositories/userRepository.js";

export async function insertUser(newUser: NewUserBody) {
  await userRepository.insertOne(newUser);
}

export async function findMany(name: string): Promise<PrismaPromise<User[]>> {
  return await userRepository.findMany(name);
}
