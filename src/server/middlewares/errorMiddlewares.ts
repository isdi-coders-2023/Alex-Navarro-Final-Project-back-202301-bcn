import createDebug from "debug";
import { type NextFunction, type Request, type Response } from "express";
import { CustomError } from "../../CustomError/CustomError";

const debug = createDebug("spotter-api:errorMiddlewares");

export const notFoundError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new CustomError("Endpoint not found", 404, "Page not found");

  next(error);
};