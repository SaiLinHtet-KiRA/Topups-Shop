import { Request, Response } from "express";
import TopupService from "./Topup.service";
import TopupDto from "../interface/dto/Topup.dto";
import TopupControllerType from "./types/Topup.controller.type";

class TopupController implements TopupControllerType {
  async createTopup(
    req: Request<null, null, TopupDto, null>,
    res: Response,
  ): Promise<void> {
    try {
      const data = req.body;
      const topup = await TopupService.createTopup(
        { _id: req.user._id, id: req.user.id },
        data,
      );
      res.status(200).json(topup);
    } catch (error) {
      throw error;
    }
  }
  async getTopups(
    req: Request<null, null, null, { page: number; limit: number }>,
    res: Response,
  ): Promise<void> {
    try {
      const { page, limit } = req.query;
      const Topups = await TopupService.getTopups(page, limit);
      res.status(200).json(Topups);
    } catch (error) {
      throw error;
    }
  }
}
export default new TopupController();
