"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = requireAuth;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errors_1 = require("../util/error/errors");
function requireAuth(req, res, next) {
    try {
        console.log(req.session);
        const token = req.session.token;
        if (!token)
            throw new errors_1.AuthorizeError("User is not Authorized");
        const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "jwt_secret");
        console.log("payload", payload);
        req.user = payload;
        next();
    }
    catch (err) {
        console.log(err);
        return res.status(401).send("Invalid token");
    }
}
//# sourceMappingURL=requireAuth.js.map