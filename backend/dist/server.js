"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { AddCoins } from "./util/addCoin";
const mongoose_1 = require("./config/DB/mongoose");
// import { AddGames } from "./util/addGame";
const index_1 = require("./server/index");
async function start() {
    await (0, mongoose_1.connectDB)();
    index_1.express.startServer();
}
start();
//# sourceMappingURL=server.js.map