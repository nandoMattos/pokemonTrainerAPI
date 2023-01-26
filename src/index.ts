import express, { json } from "express";
import usersRouter from "./routers/usersRouter.js";

const server = express();
server.use(json());
server.use(usersRouter);

server.get("/health", (req, res) => res.send("ok"));

server.listen(4000, () => console.log("Server running in port 4000"));
