"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCoins = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const coin_1 = __importDefault(require("../data/coin"));
const fs_1 = __importDefault(require("fs"));
const service_1 = require("../service");
const AddCoins = async () => {
    try {
        coin_1.default.map(async ({ collection, data }) => {
            const collections = await mongoose_1.default
                .connection.useDb("Coins")
                .listCollections();
            const exist = collections.some((col) => col.name == collection);
            if (!exist) {
                fs_1.default.readFile(process.cwd() + "/json/coins" + data, "utf8", (err, data) => {
                    if (err)
                        throw err;
                    JSON.parse(data).map(async (data) => {
                        await service_1.coin.createCoin(data, collection.replace("s", ""));
                    });
                });
            }
        });
    }
    catch (error) {
        process.exit(1);
    }
};
exports.AddCoins = AddCoins;
//# sourceMappingURL=addCoin.js.map