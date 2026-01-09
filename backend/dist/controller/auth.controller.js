"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_service_1 = __importDefault(require("@/service/User.service"));
const createJwt_1 = require("@/util/createJwt");
class AuthController {
    async TelegramLogin(req, res) {
        try {
            const { id } = req.query;
            const user = await User_service_1.default.findOrCreateUser(id);
            const token = (0, createJwt_1.createJwt)({ id: user._id.toString() });
            req.session = { token };
            res.json({ message: "Logged in successfully" });
        }
        catch (error) {
            console.log(error);
            throw new Error("Method not implemented.");
        }
    }
    async getAccountInfo(req, res) {
        try {
            const { banned, balance } = await User_service_1.default.getUserById(req.user.id);
            res.status(200).json({ banned, balance });
        }
        catch (error) {
            console.log(error);
            throw new Error("Method not implemented.");
        }
    }
}
exports.default = new AuthController();
//# sourceMappingURL=auth.controller.js.map