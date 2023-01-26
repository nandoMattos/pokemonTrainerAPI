import { User } from "@prisma/client";

export type UserBody = Omit<User, "created_at" | "updated_at">;

export type NewUserBody = Omit<UserBody, "id">;
