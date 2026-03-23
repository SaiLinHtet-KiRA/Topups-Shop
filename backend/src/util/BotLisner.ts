import ConfigService from "../Other/Util.service";
import FinancialService from "../Financial/Financial.service";
import TopupService from "../Topup/Topup.service";
import TelegramBot from "./TelegramBot";
import Config from "../data/config";
import UserService from "../User/User.service";

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
    const data = query.data.split(":");

    if (data[2] == "topup") {
      const topup = await TopupService.getTopup(data[0]);
      if (topup.status == data[3]) {
        TelegramBot.sendMessage(
          query.message!.chat.id,
          "That order is already updated",
        );
      } else {
        const topup = await TopupService.updateTopup(data[0], {
          status: data[3],
        } as any);
        if (data[3] == "success")
          TelegramBot.sendMessage(
            data[1],
            `${topup.package.name} ကို ဖြည့်သွင်းပေးမှု အောင်မြင်ပါတယ်ရှင့်😻

ဝယ်ယူအားပေးမှုကို ကျေးဇူးတင်ပါတယ်ရှင့်🥰`,
          );
        else if (data[3] == "fail")
          TelegramBot.sendMessage(
            data[1],
            `${topup.package.name}ကို ဖြည့်သွင်းပေးမှု မအောင်မြင်ပါဘူးရှင့်😔

ကျေးဇူးပြု၍ admin ကို ဆက်သွယ်ပေးပါရှင့်🥰

admin - @lucius_playz`,
          );
      }
    } else if (data[2] == "recharge") {
      const deposit = await FinancialService.getDepositById(data[0]);

      if (deposit.status == data[3]) {
        TelegramBot.sendMessage(
          query.message!.chat.id,
          "That order is already updated",
        );
      } else {
        FinancialService.updateDeposit(data[0], { status: data[3] } as any);
        if (data[3] == "success")
          TelegramBot.sendMessage(
            data[1],
            `ငွေဖြည့်သွင်းမှု အမှတ်စဉ် ${deposit.id} က အောင်မြင်ပါတယ်ရှင့်😍

Games items များကို စိတ်ကြိုက်ဝယ်ယူနိုင်ပါပြီရှင့်`,
          );
        else if (data[3] == "fail")
          TelegramBot.sendMessage(
            data[1],
            `ငွေဖြည့်သွင်းမှု အမှတ်စဉ် ${deposit.id} က မအောင်မြင်ပါဘူးရှင့်😔

ကျေးဇူးပြု၍ ထပ်မှန်ကြိုးစားပါရှင့်🥰`,
          );
      }
    }
  }
  TelegramBot.answerCallbackQuery(query.id);
});
