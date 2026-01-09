import TelegramBot from "@/util/TelegramBot";
import FinancialControllerType from "@/interface/controller/Financial.controller.type";
import { Request, Response } from "express";
import DepositModel from "@/model/Deposit.model";

class FinancialController implements FinancialControllerType {
  async deposit(req: Request, res: Response): Promise<void> {
    try {
      const deposit = new DepositModel();
      const newDeposit = await deposit.save();

      if (req.file)
        TelegramBot.sendPhoto(process.env.ADMIN_CHAT_ID!, req.file.buffer, {
          reply_markup: {
            inline_keyboard: [
              [
                { text: "✅", callback_data: "btn_1" },
                { text: "❌", callback_data: "btn_2" },
              ],
            ],
          },
        });

      res.status(200);
    } catch (error) {
      throw error;
    }
  }
}
export default new FinancialController();
