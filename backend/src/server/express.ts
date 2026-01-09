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
          "http://localhost:5173",
          "https://424nhtsn-5173.asse.devtunnels.ms",
          "https://unmetalised-elna-nonstrategical.ngrok-free.dev",
          "https://topups-shop-1.onrender.com",
        ],
        credentials: true,
      })
    );

    this.app.use(
      cookie({
        name: "eden_game_shop",
        secret: COOKIE_SECRET,
        maxAge: 2 * 24 * 60 * 1000,
        keys: ["secretkey"],
        httpOnly: true,
        secure: false,
        sameSite: "none",
      })
    );

    this.app.use(express.json());
    this.app.use(Routes);

    // this.app.use(HandleErrorWithLogger);
    this.app.listen(4000, () =>
      console.log("Express server is started in port ", 4000)
    );
  }
}
