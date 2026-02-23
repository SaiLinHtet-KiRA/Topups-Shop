import express, { Express } from "express";
import Routes from "../router";

import { HandleErrorWithLogger } from "../util/error/handler";
import cors from "cors";
import cookie from "cookie-session";
import { COOKIE_SECRET } from "../config/config";

export default class ExpressServer {
  private app: Express;
  constructor() {
    this.app = express();
  }
  startServer() {
    this.app.set("trust proxy", 1);
    this.app.use(
      cors({
        origin: [
          "https://collectorparadise.xyz",
          "http://172.20.10.3:5173",
          "https://unmetalised-elna-nonstrategical.ngrok-free.dev",
        ],
        credentials: true,
      }),
    );

    this.app.use(
      cookie({
        name: "session",
        keys: ["your-secret-key"],
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        secure: false,
        httpOnly: true,
        sameSite: "lax",
      }),
    );

    this.app.use(express.json());
    this.app.use(Routes);

    this.app.use(HandleErrorWithLogger);
    this.app.listen(4000, () =>
      console.log("Express server is started in port ", 4000),
    );
  }
}
