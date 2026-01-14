import FinancialService from "../service/Financial.service";
import TelegramBot from "./TelegramBot";

TelegramBot.on("callback_query", async (query) => {
  if (!query.message) throw new Error("Messsage was not send from client");
  if (query.data) {
    const data: { status: "pending" | "success" | "fail"; id: string } =
      JSON.parse(query.data);
    const deposit = await FinancialService.getDepositById(data.id);
    if (deposit.status == data.status) {
      TelegramBot.sendMessage(
        query.message!.chat.id,
        "That order is already updated"
      );
    }
    if (data.status === "success") {
      FinancialService.updateDeposit(data.id, { status: data.status } as any);
    } else if (data.status === "fail") {
      FinancialService.updateDeposit(data.id, { status: data.status } as any);
    }
  }
  TelegramBot.answerCallbackQuery(query.id);
});
