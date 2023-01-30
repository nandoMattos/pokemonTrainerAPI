import express, { json } from "express";
import pokemonRouter from "./routers/pokemonsRouter.js";
import usersRouter from "./routers/usersRouter.js";

const server = express();
server.use(json());
server.use(usersRouter);
server.use(pokemonRouter);

server.listen(4000, () => console.log("Server running in port 4000"));
