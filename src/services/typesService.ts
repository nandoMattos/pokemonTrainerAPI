import { NewType } from "../protocols/Type.js";
import typeRepository from "../repositories/typeRepository.js";

export function insertNewTypes(types: NewType[]) {
  typeRepository.insertMany(types);
}
