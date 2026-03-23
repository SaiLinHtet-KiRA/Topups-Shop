import { Request, Response } from "express";
import FinancialService from "./Financial.service";
import Receipt from "../interface/other/Receipt";
import FinancialControllerType from "./types/Financial.controller.type";

class FinancialController implements FinancialControllerType {
  async deposit(
    req: Request<any, any, Omit<Receipt, "receipt" | "userID" | "chatId">>,
    res: Response,
  ): Promise<void> {
    try {
      if (req.file)
        await FinancialService.createDeposit({
          receipt: req.file!.buffer,
          userID: req.user._id,
          chatId: req.user.id,
          ...req.body,
        });

      res.status(200).json("Recharge order was successfully created");
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
