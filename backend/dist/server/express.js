"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("../router"));
const handler_1 = require("../util/error/handler");
const cors_1 = __importDefault(require("cors"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const config_1 = require("../config/config");
class ExpressServer {
    constructor() {
        this.app = (0, express_1.default)();
    }
    startServer() {
        this.app.set("trust proxy", true);
        this.app.use((0, cors_1.default)({
            origin: [
                "http://localhost:5173",
                "https://424nhtsn-5173.asse.devtunnels.ms",
            ],
            credentials: true,
        }));
        this.app.use((0, cookie_session_1.default)({
            name: "Eden Game Shop",
            secret: config_1.COOKIE_SECRET,
            maxAge: 2 * 24 * 60 * 1000,
            keys: ["secretkey"],
            httpOnly: true,
            secure: true,
            sameSite: "none",
        }));
        this.app.use(express_1.default.json());
        this.app.use(router_1.default);
        this.app.use(handler_1.HandleErrorWithLogger);
        this.app.listen(4000, () => console.log("Express server is started in port ", 4000));
    }
}
exports.default = ExpressServer;
//# sourceMappingURL=express.js.map