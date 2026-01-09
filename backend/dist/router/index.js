"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("./auth/index"));
const Deposit_route_1 = __importDefault(require("./Deposit.route"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("all good");
    res.json("all good").status(200);
});
router.use("/auth", index_1.default);
router.use("/deposit", Deposit_route_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map