import { PrismaPromise } from "@prisma/client";
import prisma from "../database/db.js";
import { NewType, TypeBody } from "../protocols/Type.js";

function findManyWithName(types: NewType[]): PrismaPromise<TypeBody[]> {
  return prisma.type.findMany({
    where: {
      OR: types,
    },
  });
}

const typesRepository = {
  findManyWithName,
};

export default typesRepository;
