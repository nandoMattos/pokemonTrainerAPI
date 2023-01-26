import { Router } from "express";
import { getAllUsers, postUser } from "../controllers/usersController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { userSchema } from "../schemas/userSchema.js";

const router = Router();

router.post("/users", validateSchemaMiddleware(userSchema), postUser);
router.get("/users", getAllUsers);

export default router;
