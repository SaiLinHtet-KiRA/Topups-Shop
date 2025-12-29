"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const Topup_dto_1 = __importDefault(require("../dto/Topup.dto"));
const express_1 = require("express");
const RequestBodyValidator_1 = __importDefault(require("../util/RequestBodyValidator"));
const service_1 = require("../service");
const checkAuthenticated_1 = require("../middleware/checkAuthenticated");
const router = (0, express_1.Router)();
router.use(checkAuthenticated_1.checkAuthenticated);
router.post("/topup", async (req, res) => {
    try {
        req.body.customer = req.user._id;
        const data = await (0, RequestBodyValidator_1.default)((0, class_transformer_1.plainToClass)(Topup_dto_1.default, req.body));
        const newTopup = await service_1.topup.createTopup(data);
        res.status(200).json(newTopup);
    }
    catch (error) {
        throw error;
    }
});
router.get("/topup", async (req, res) => {
    try {
        const topups = await service_1.topup.getTopups(req.user._id);
        res.status(200).json(topups);
    }
    catch (error) {
        throw error;
    }
});
router.get("/topup/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const topups = await service_1.topup.getTopup(id);
        res.status(200).json(topups);
    }
    catch (error) {
        throw error;
    }
});
exports.default = router;
//# sourceMappingURL=topup.route.js.map