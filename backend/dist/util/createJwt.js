"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJwt = createJwt;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function createJwt(payload) {
    const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET || "jwt_secret", {
        expiresIn: 7 * 24 * 60 * 60,
    });
    return token;
}
//# sourceMappingURL=createJwt.js.map