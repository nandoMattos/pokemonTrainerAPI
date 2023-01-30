import { PrismaPromise, User } from "@prisma/client";
import { Request, Response } from "express";
import conflictError from "../errors/conflictError.js";
import notFoundError from "../errors/notFoundError.js";
import { NewUserBody } from "../protocols/User.js";
import pokemonRepository from "../repositories/pokemonRepository.js";
import userRepository from "../repositories/userRepository.js";

export async function insertUser(newUser: NewUserBody) {
  const existentUser = await userRepository.findOneByName(newUser.name);
  if (existentUser) {
    throw conflictError(`Username ${newUser.name} already registered.`);
  }

  await userRepository.insertOne(newUser);
}

export async function findMany(name: string) {
  return await userRepository.findMany(name);
}

export async function handleCapture(userId: number, pokemonId: number) {
  const userExists = await userRepository.findOneById(userId);
  if (!userExists) {
    throw notFoundError(`User does not exists.`);
  }

  const pokemonExists = await pokemonRepository.findOneById(pokemonId);
  if (!pokemonExists) {
    throw notFoundError(`Pokemon does not exists`);
  }

  await userRepository.connectUserToPokemon(userId, pokemonId);
}

const usersService = {
  insertUser,
  findMany,
  handleCapture,
};

export default usersService;
