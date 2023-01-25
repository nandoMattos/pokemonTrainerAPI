import express from "express";
import { validateSchemaMiddleware } from "./middlewares/validateSchema.js";
import userSchema from "./schemas/userSchema.js";

const server = express();

server.get("/health", (req, res) => res.send("ok"));

server.post("/users", validateSchemaMiddleware(userSchema), postUser);

server.listen(4000, () => console.log("Server running in port 4000"));
