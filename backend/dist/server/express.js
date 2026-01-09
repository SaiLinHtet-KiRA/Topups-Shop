"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("../router"));
const cors_1 = __importDefault(require("cors"));
const cookie_session_1 = __importDefault(require("cookie-session"));
class ExpressServer {
    constructor() {
        this.app = (0, express_1.default)();
    }
    startServer() {
        this.app.set("trust proxy", 1);
        this.app.use((0, cors_1.default)({
            origin: ["http://localhost:5173", "https://topups-shop-1.onrender.com"],
            credentials: true,
        }));
        this.app.use((0, cookie_session_1.default)({
            name: "session",
            keys: ["your-secret-key"],
            maxAge: 24 * 60 * 60 * 1000, // 1 day
            secure: false,
            httpOnly: true,
            sameSite: "lax",
        }));
        this.app.use(express_1.default.json());
        this.app.use(router_1.default);
        // this.app.use(HandleErrorWithLogger);
        this.app.listen(4000, () => console.log("Express server is started in port ", 4000));
    }
}
exports.default = ExpressServer;
//# sourceMappingURL=express.js.map