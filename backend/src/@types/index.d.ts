import * as express from "express";
import Type, { AccountInfo } from "../interface/types/User";

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
