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
    this.app.set("trust proxy", true);

    this.app.use(
      cookie({
        name: "Eden Game Shop",
        secret: COOKIE_SECRET,
        maxAge: 2 * 24 * 60 * 1000,
        httpOnly: true,
        secure: false,
        sameSite: "lax",
      })
    );

    this.app.use(
      cors({
        origin: ["https://unmetalised-elna-nonstrategical.ngrok-free.dev"],
        methods: ["*"],
        credentials: true,
      })
    );

    this.app.use(express.json());
    this.app.use(Routes);

    this.app.use(HandleErrorWithLogger);
    this.app.listen(4000, () =>
      console.log("Express server is started in port ", 4000)
    );
  }
}
