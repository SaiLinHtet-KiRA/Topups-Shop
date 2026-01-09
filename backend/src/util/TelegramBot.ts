import TelegramBot from "node-telegram-bot-api";

const TOKEN = process.env.BOT_TOKEN as string;
const ADMIN_CHAT_ID = Number(process.env.ADMIN_CHAT_ID);

if (!TOKEN || !ADMIN_CHAT_ID) {
  throw new Error("Missing BOT_TOKEN or ADMIN_CHAT_ID");
}

export default new TelegramBot(TOKEN, { polling: true });
