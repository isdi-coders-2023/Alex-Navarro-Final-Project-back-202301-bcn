import { Router } from "express";
import { validate } from "express-validation";
import {
  loginUser,
  registerUser,
} from "../server/controllers/userControllers.js";
import loginUserSchema from "../server/schemas/loginUserSchema.js";

export const usersRouter = Router();

usersRouter.post(
  "/login",
  validate(loginUserSchema, {}, { abortEarly: false }),
  loginUser
);

usersRouter.post("/register", registerUser);
