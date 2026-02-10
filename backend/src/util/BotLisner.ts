import ConfigService from "../service/Config.service";
import FinancialService from "../service/Financial.service";
import TopupService from "../service/Topup.service";
import TelegramBot from "./TelegramBot";
import Config from "../data/config";
import UserService from "../service/User.service";

TelegramBot.on("message", async (msg) => {
  try {
    const admin_password = await ConfigService.getConfigById(Config[0].name);
    if (admin_password.value == msg.text) {
      await UserService.updateByFindOne(
        { id: msg.chat.id.toString() },
        {
          role: "admin",
        },
      );
      TelegramBot.sendMessage(msg.chat.id, `Now you are admin!!`);
    }
  } catch (error) {
    TelegramBot.clearReplyListeners();
  }
});

TelegramBot.on("callback_query", async (query) => {
  if (!query.message) throw new Error("Messsage was not send from client");

  if (query.data) {
    const data: {
      status: "pending" | "success" | "fail";
      id: string;
      t: "topup" | "r";
    } = JSON.parse(query.data);
    if (data.t == "topup") {
      const topup = await TopupService.getTopup(data.id);
      if (topup.status == data.status) {
        TelegramBot.sendMessage(
          query.message!.chat.id,
          "That order is already updated",
        );
      }

      TopupService.updateTopup(data.id, { status: data.status } as any);
    } else if (data.t == "r") {
      const deposit = await FinancialService.getDepositById(data.id);
      if (deposit.status == data.status) {
        TelegramBot.sendMessage(
          query.message!.chat.id,
          "That order is already updated",
        );
      }
      FinancialService.updateDeposit(data.id, { status: data.status } as any);
    }
  }
  TelegramBot.answerCallbackQuery(query.id);
});
