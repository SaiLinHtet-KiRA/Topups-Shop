import FinancialServiceType from "../interface/service/Financial.service.type";
import { DepositDocument } from "../model/Deposit.model";
import FinancialRepo from "../repo/Financial.repo";
import TelegramBot from "../util/TelegramBot";

class FinancialService implements FinancialServiceType {
  async createDeposit(): Promise<DepositDocument> {
    try {
      const deposit = await FinancialRepo.create();
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
      throw new Error("Method not implemented.");
    } catch (error) {
      throw error;
    }
  }
}

export default new FinancialService();
