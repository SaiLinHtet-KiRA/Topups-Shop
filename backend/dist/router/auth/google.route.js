"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config/config");
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const router = (0, express_1.Router)();
router.get("/google", passport_1.default.authenticate("google", {
    scope: ["profile", "email"],
    successRedirect: config_1.BACKEND_URL + "/auth/google/callback",
}));
router.get("/google/callback", passport_1.default.authenticate("google", {
    failureRedirect: config_1.BACKEND_URL + "/auth/login",
}), function (req, res) {
    res.redirect(config_1.FRONTEND_URL);
});
exports.default = router;
//# sourceMappingURL=google.route.js.map