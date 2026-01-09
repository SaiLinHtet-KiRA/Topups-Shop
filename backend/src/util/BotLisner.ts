import TelegramBot from "./TelegramBot";

TelegramBot.on("callback_query", (query) => {
  console.log(query);
  if (query.data === "btn_1") {
    TelegramBot.sendMessage(query.from.id, "You clicked Button 1!");
  } else if (query.data === "btn_2") {
    TelegramBot.sendMessage(query.from.id, "You clicked Button 2!");
  }
  TelegramBot.answerCallbackQuery(query.id);
});
