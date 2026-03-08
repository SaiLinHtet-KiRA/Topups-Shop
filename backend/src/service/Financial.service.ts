import Receipt from "../interface/other/Receipt";
import FinancialServiceType from "../interface/service/Financial.service.type";
import { Deposit, DepositDocument } from "../model/Deposit.model";
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
    chatId,
  }: Receipt): Promise<DepositDocument> {
    try {
      const deposit = await FinancialRepo.create({
        name,
        amount,
        banking,
        userID,
      } as Deposit);
      const Admins = await UserService.findAdmins();

      Admins.map(({ id }) => {
        TelegramBot.sendPhoto(Number(id), receipt, {
          caption: `Order ID:  ${deposit.id}\nName: ${name}\nAmount: ${amount} \nBanking:  ${banking}`,
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "✅",
                  callback_data: `${deposit._id.toString()}:${id}:recharge:success`,
                },
                {
                  text: "❌",
                  callback_data: `${deposit._id.toString()}:${id}:recharge:fail`,
                },
              ],
            ],
          },
        });
      });
      TelegramBot.sendMessage(
        chatId,
        `သင့် ငွေဖြည့်သွင်းမှု အမှတ်စဉ် ${deposit.id} ကို adminတွေဆီ ပေးပို့ပြီးပါပြီးရှင့်

ကျေးဇူးပါ၍ စောင့်ဆိုင်းပေးပါရှင့်🥰`,
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
  async getReceipts(page: number, limit: number): Promise<DepositDocument[]> {
    try {
      return await FinancialRepo.getMany(page, limit);
    } catch (error) {
      throw error;
    }
  }
}

export default new FinancialService();
