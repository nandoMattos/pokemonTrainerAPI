import prisma from "../database/db.js";
import { NewUserBody } from "../protocols/User.js";

function insertOne(newUser: NewUserBody) {
  return prisma.user.create({ data: newUser });
}

function findOneByName(username: string) {
  return prisma.user.findFirst({ where: { name: username } });
}

function findMany(name: string) {
  return prisma.user.findMany({
    where: { name: { startsWith: name, mode: "insensitive" } },
  });
}

const userRepository = {
  insertOne,
  findOneByName,
  findMany,
};

export default userRepository;
