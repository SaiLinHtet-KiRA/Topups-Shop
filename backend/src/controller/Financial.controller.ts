import FinancialControllerType from "../interface/controller/Financial.controller.type";
import { Request, Response } from "express";

class FinancialController implements FinancialControllerType {
  async deposit(req: Request, res: Response): Promise<void> {
    try {
      if (req.file) res.status(200);
    } catch (error) {
      throw error;
    }
  }
}
export default new FinancialController();
