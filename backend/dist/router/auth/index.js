"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const telegram_route_1 = __importDefault(require("./telegram.route"));
const auth_controller_1 = __importDefault(require("../../controller/auth.controller"));
const requireAuth_1 = __importDefault(require("../../middleware/requireAuth"));
const router = (0, express_1.Router)();
router.get("/profile", requireAuth_1.default, auth_controller_1.default.getAccountInfo);
router.use(telegram_route_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map