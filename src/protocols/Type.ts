import { Type } from "@prisma/client";

export type TypeBody = Omit<Type, "created_at" | "updated_at">;
