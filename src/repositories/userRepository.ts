import { PrismaPromise, User } from "@prisma/client";
import prisma from "../database/db.js";
import { NewUserBody } from "../protocols/User.js";

function insertOne(newUser: NewUserBody) {
  return prisma.user.create({ data: newUser });
}

function findOneById(id: number): PrismaPromise<User> {
  return prisma.user.findFirst({ where: { id } });
}

function findOneByName(username: string): PrismaPromise<User> {
  return prisma.user.findFirst({ where: { name: username } });
}

function findMany(name: string): PrismaPromise<User[]> {
  return prisma.user.findMany({
    where: { name: { startsWith: name, mode: "insensitive" } },
  });
}

function connectUserToPokemon(userId: number, pokemonId: number) {
  return prisma.user.update({
    where: { id: userId },
    data: { pokemon: { connect: { id: pokemonId } } },
  });
}

const userRepository = {
  insertOne,
  findOneById,
  findOneByName,
  findMany,
  connectUserToPokemon,
};

export default userRepository;
