import prisma from "../database/db.js";
import { NewUserBody } from "../protocols/User.js";

function insertOne(newUser: NewUserBody) {
  return prisma.user.create({ data: newUser });
}

function findAll() {
  return prisma.user.findMany();
}

const pokemonRepository = {
  insertOne,
  findAllUsers,
};

export default pokemonRepository;
