// import { AddCoins } from "./util/addCoin";
import { connectDB } from "./config/DB/mongoose";
// import { AddGames } from "./util/addGame";
import { express } from "./server/index";
import "./util/BotLisner";

async function start() {
  await connectDB();
  express.startServer();
}

start();
