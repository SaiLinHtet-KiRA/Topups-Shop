import { NextFunction, Request, Response } from "express";
import { ValidationError } from "../util/error/errors";

export default function checkFileExist(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (req.file) return next();
  throw new ValidationError("File is missing.Please add file.");
}
