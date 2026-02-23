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
      // const { user } = req.body;
      // console.log("user", user);
      const user = {
        user: {
          id: 1665560632,
          first_name: "Kira",
          last_name: "",
          username: "kira16ok",
          language_code: "en",
          allows_write_to_pm: true,
          photo_url:
            "https://t.me/i/userpic/320/Ktkayo1PFBb6iZlY3fTsG7IAncjkmQHmMfyyZVWAckc.svg",
        },
        chat_instance: "-7776823432591278099",
        chat_type: "sender",
        auth_date: "1771852561",
        signature:
          "jNwTF9MDCe9Wtg8PxQ9_W1OMaIhnVc-2wBRvw6s4vj9kmiGv-4X7uAn0MJr2yjHaefbEEy8syCC_ZFQl7EGUBQ",
        hash: "f9727b5d82f90cf313c02d49d0234a0edfb0f70a06e0d13082288048c5b4fc6b",
      };
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
