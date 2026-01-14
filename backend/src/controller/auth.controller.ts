import AuthControllerType from "../interface/controller/Auth.controller.type";
import userService from "../service/User.service";
import { Request, Response } from "express";
import { createJwt } from "../util/createJwt";

class AuthController implements AuthControllerType {
  async TelegramLogin(
    req: Request<null, null, null, { id: string }>,
    res: Response
  ): Promise<void> {
    try {
      const { id } = req.query;
      const user = await userService.findOrCreateUser(id);
      const token = createJwt({ id: user._id.toString() });
      req.session = { token };

      res.json({ message: "Logged in successfully" });
    } catch (error) {
      console.log(error);
      throw new Error("Method not implemented.");
    }
  }
  async getAccountInfo(
    req: Request<null, null, null, { id: string }>,
    res: Response
  ): Promise<void> {
    try {
      const { banned, balance } = await userService.getById(req.user.id);

      res.status(200).json({ banned, balance });
    } catch (error) {
      console.log(error);
      throw new Error("Method not implemented.");
    }
  }
}
export default new AuthController();
