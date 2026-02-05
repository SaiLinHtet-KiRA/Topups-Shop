import Receipt from "../interface/other/Receipt";
import FinancialServiceType from "../interface/service/Financial.service.type";
import { DepositDocument } from "../model/Deposit.model";
import FinancialRepo from "../repo/Financial.repo";
import TelegramBot from "../util/TelegramBot";
import UserService from "./User.service";

class FinancialService implements FinancialServiceType {
  async createDeposit({
    name,
    amount,
    banking,
    receipt,
    userID,
  }: Receipt): Promise<DepositDocument> {
    try {
      const deposit = await FinancialRepo.create({
        name,
        amount,
        banking,
        userID,
      } as DepositDocument);
      const Admins = await UserService.findAdmins();
      Admins.map((id) =>
        TelegramBot.sendPhoto(Number(id), receipt, {
          caption: `Order ID:  ${deposit.id}\nName: ${name}\nAmount: ${amount} \nBanking:  ${banking}`,
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "✅",
                  callback_data: JSON.stringify({
                    id: deposit._id.toString(),
                    t: "recharge",
                    status: "success",
                  }),
                },
                {
                  text: "❌",
                  callback_data: JSON.stringify({
                    id: deposit._id.toString(),
                    t: "recharge",
                    status: "fail",
                  }),
                },
              ],
            ],
          },
        }),
      );

      return deposit;
    } catch (error) {
      throw error;
    }
  }
  async updateDeposit(
    id: string,
    deposit: DepositDocument,
  ): Promise<DepositDocument> {
    try {
      return await FinancialRepo.updateById(id, deposit);
    } catch (error) {
      throw error;
    }
  }
  async getDepositById(id: string): Promise<DepositDocument> {
    try {
      return await FinancialRepo.getById(id);
    } catch (error) {
      throw error;
    }
  }
}

export default new FinancialService();
