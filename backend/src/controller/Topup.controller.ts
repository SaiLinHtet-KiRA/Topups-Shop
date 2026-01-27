import { Request, Response } from "express";
import TopupControllerType from "../interface/controller/Topup.controller.type";
import { Topup } from "../model/Topup.model";

class TopupController implements TopupControllerType {
  async createTopup(
    req: Request<null, Topup, null, null>,
    res: Response,
  ): Promise<void> {
    try {
      const data = req.body;
    } catch (error) {
      throw error;
    }
  }
  async getPackages(
    req: Request<null, null, null, { page: number; limit: number }>,
    res: Response,
  ): Promise<void> {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      throw error;
    }
  }
}
export default new TopupController();
