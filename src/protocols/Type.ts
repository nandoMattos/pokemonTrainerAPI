import { Type } from "@prisma/client";

export type TypeBody = Omit<Type, "created_at" | "updated_at">;

export type NewType = Omit<TypeBody, "id">;
