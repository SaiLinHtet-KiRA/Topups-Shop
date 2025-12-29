import AuthControllerType from "../interface/controller/Auth.controller.type";
import AuthService from "../service/user.service";
import { Request, Response } from "express";
import { createJwt } from "../util/createJwt";

class AuthController implements AuthControllerType {
  async TelegramLogin(
    req: Request<null, null, null, { id: string }>,
    res: Response
  ): Promise<void> {
    try {
      const { id } = req.query;
      const user = await AuthService.findOrCreateUser(id);
      const token = createJwt({ id: user._id.toString() });
      req.session = { token };

      res.json({ message: "Logged in successfully" });
    } catch (error) {
      console.log(error);
      throw new Error("Method not implemented.");
    }
  }
  async getUser(
    req: Request<null, null, null, { id: string }>,
    res: Response
  ): Promise<void> {
    try {
      console.log(req.user);
      res.send({ message: "Logged in successfully" });
    } catch (error) {
      console.log(error);
      throw new Error("Method not implemented.");
    }
  }
}
export default new AuthController();
