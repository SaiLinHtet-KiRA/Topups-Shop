"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddGames = void 0;
const service_1 = require("../service");
const game_1 = __importDefault(require("../data/game"));
const fs_1 = __importDefault(require("fs"));
const AddGames = async () => {
    try {
        game_1.default.map(async ({ name, data }) => {
            const exist = await service_1.game.getGameByName(name);
            if (!exist) {
                fs_1.default.readFile(process.cwd() + "/json/games" + data, "utf8", (err, data) => {
                    if (err)
                        throw err;
                    service_1.game.createGame(JSON.parse(data));
                });
            }
        });
    }
    catch (error) {
        process.exit(1);
    }
};
exports.AddGames = AddGames;
//# sourceMappingURL=addGame.js.map