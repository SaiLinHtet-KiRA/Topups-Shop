"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.topupRepo = exports.coinRepo = exports.gameRepo = exports.userRepo = exports.rechargeRepo = void 0;
const Recharge_repo_1 = __importDefault(require("./Recharge.repo"));
const User_repo_1 = __importDefault(require("./User.repo"));
const Game_repo_1 = __importDefault(require("./Game.repo"));
const Topup_repo_1 = __importDefault(require("./Topup.repo"));
const Coin_repo_1 = __importDefault(require("./Coin.repo"));
exports.rechargeRepo = new Recharge_repo_1.default();
exports.userRepo = new User_repo_1.default();
exports.gameRepo = new Game_repo_1.default();
exports.coinRepo = new Coin_repo_1.default();
exports.topupRepo = new Topup_repo_1.default();
//# sourceMappingURL=index.js.map