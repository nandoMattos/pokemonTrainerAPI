import prisma from "../database/db.js";
import { UserBody } from "../protocols/User.js";

type ReqUserBody = Omit<UserBody, "id">;
function insertOne(newUser: ReqUserBody) {
  return prisma.user.create({ data: newUser });
}

function findAllUsers() {
  return prisma.user.findMany();
}

const userRepository = {
  insertOne,
  findAllUsers,
};

export default userRepository;
