import prisma from "../database/db.js";
import { NewType } from "../protocols/Type.js";

function insertMany(types: NewType[]) {
  return prisma.type.createMany({ data: types });
}

const typeRepository = {
  insertMany,
};

export default typeRepository;
