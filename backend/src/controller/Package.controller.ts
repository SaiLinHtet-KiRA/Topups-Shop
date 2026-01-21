import { Request, Response } from "express";
import PackageControllerType from "../interface/controller/Package.controller.type";
import GameService from "../service/Game.service";
import PackageService from "../service/Package.service";

class PackageController implements PackageControllerType {
  async getPackages(
    req: Request<null, null, null, { page: number; limit: number }>,
    res: Response,
  ): Promise<void> {
    try {
      const { page, limit } = req.query;
      const games = await PackageService.getPackages(page, limit);

      res.status(200).json(games);
    } catch (error) {
      throw error;
    }
  }
  async searchPackages(
    req: Request<null, null, null, { s: string }>,
    res: Response,
  ): Promise<void> {
    try {
      const { s } = req.query;
      const games = await GameService.searchByField("name", s);
      res.status(200).json(games);
    } catch (error) {
      throw error;
    }
  }
}
export default new PackageController();
