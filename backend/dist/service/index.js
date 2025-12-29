"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.topup = exports.coin = exports.game = exports.user = exports.recharge = exports.checkID = void 0;
const Recharge_service_1 = __importDefault(require("./Recharge.service"));
const User_service_1 = __importDefault(require("./User.service"));
const Game_service_1 = __importDefault(require("./Game.service"));
const Topup_service_1 = __importDefault(require("./Topup.service"));
const CheckId_service_1 = __importDefault(require("./CheckId.service"));
const Coin_service_1 = __importDefault(require("./Coin.service"));
exports.checkID = new CheckId_service_1.default();
exports.recharge = new Recharge_service_1.default();
exports.user = new User_service_1.default();
exports.game = new Game_service_1.default();
exports.coin = new Coin_service_1.default();
exports.topup = new Topup_service_1.default();
//# sourceMappingURL=index.js.map