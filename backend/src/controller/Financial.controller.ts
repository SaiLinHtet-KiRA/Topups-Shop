import FinancialControllerType from "../interface/controller/Financial.controller.type";
import { Request, Response } from "express";
import FinancialService from "../service/Financial.service";
import Receipt from "../interface/other/Receipt";

class FinancialController implements FinancialControllerType {
  async deposit(
    req: Request<any, any, Omit<Receipt, "receipt" | "userID">>,
    res: Response,
  ): Promise<void> {
    try {
      if (req.file)
        await FinancialService.createDeposit({
          receipt: req.file.buffer,
          userID: req.user.id,
          ...req.body,
        });

      res.status(200);
    } catch (error) {
      throw error;
    }
  }
  async getReceipts(
    req: Request<null, null, null, { page: number; limit: number }>,
    res: Response,
  ): Promise<void> {
    try {
      const { page, limit } = req.query;
      const receipts = await FinancialService.getReceipts(page, limit);
      res.status(200).json(receipts);
    } catch (error) {
      throw error;
    }
  }
}
export default new FinancialController();
