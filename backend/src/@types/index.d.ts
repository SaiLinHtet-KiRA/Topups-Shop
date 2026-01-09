import * as express from "express";
import Type, { AccountInfo } from "../interface/types/User";
import { type Field } from "multer";
declare global {
  namespace Express {
    interface User extends AccountInfo {
      coin: number;
    }
    interface Request {
      user?: AccountInfo & { coin: number };
      session: { token: string };
    }
  }
}
