import AuthControllerType from "../interface/controller/Auth.controller.type";
import userService from "../service/User.service";
import { Request, Response } from "express";
import { createJwt } from "../util/createJwt";
import TgInitData from "../interface/other/TgInitData";

class AuthController implements AuthControllerType {
  async TelegramLogin(
    req: Request<null, null, { initData: string; user: TgInitData }, null>,
    res: Response,
  ): Promise<void> {
    try {
      const { user } = req.body;

      const existUser = await userService.findOrCreateUser(
        String(user.user.id),
      );

      const token = createJwt({ id: existUser._id.toString() });
      req.session = { token };

      res.json({ message: "Logged in successfully" });
    } catch (error) {
      console.log(error);
      throw new Error("Method not implemented.");
    }
  }
  async getAccountInfo(
    req: Request<null, null, null, { id: string }>,
    res: Response,
  ): Promise<void> {
    try {
      const { banned, balance, role, username } = await userService.getById(
        req.user.id,
      );
      res.status(200).json({ banned, balance, role, username });
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }
  async getHistory(
    req: Request<
      null,
      null,
      null,
      { type: string; page: number; limit: number }
    >,
    res: Response,
  ): Promise<void> {
    try {
      const { id } = req.user;
      const { type, page, limit } = req.query;
      const History = await userService.getHistory(id, type, page, limit);
      res.status(200).json(History);
    } catch (error) {
      throw error;
    }
  }
}
export default new AuthController();
