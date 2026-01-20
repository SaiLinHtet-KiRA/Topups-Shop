// import { AddCoins } from "./util/addCoin";
import { connectDB } from "./config/DB/mongoose";
// import { AddGames } from "./util/addGame";
import { express } from "./server/index";
import "./util/BotLisner";
import AddData from "./util/addData";

async function start() {
  await connectDB();
  await AddData();
  express.startServer();
}

start();
