"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOT_TOKEN = exports.FRONTEND_URL = exports.BACKEND_URL = exports.COOKIE_SECRET = void 0;
_a = {
    COOKIE_SECRET: process.env.COOKIE_SECRET || "edenshopsai123pol",
    BACKEND_URL: process.env.BACKEND_URL || "http://localhost:4000",
    FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",
    BOT_TOKEN: process.env.FRONTEND_URL ||
        "7787789980:AAGkbA7kSDmVYwKiHc5s9Hv7hCPGcIWcb7c",
}, exports.COOKIE_SECRET = _a.COOKIE_SECRET, exports.BACKEND_URL = _a.BACKEND_URL, exports.FRONTEND_URL = _a.FRONTEND_URL, exports.BOT_TOKEN = _a.BOT_TOKEN;
//# sourceMappingURL=other.config.js.map