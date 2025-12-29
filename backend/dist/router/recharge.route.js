"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const Recharge_dto_1 = __importDefault(require("../dto/Recharge.dto"));
const express_1 = require("express");
const RequestBodyValidator_1 = __importDefault(require("../util/RequestBodyValidator"));
const multer_1 = __importDefault(require("multer"));
const multer_storage_1 = __importDefault(require("../util/multer-storage"));
const service_1 = require("../service");
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)({ storage: multer_storage_1.default });
router.post("/recharge", upload.single("receipt"), async (req, res) => {
    try {
        req.body.file = req.file?.path;
        req.body.customer_id = req.user?._id;
        const body = await (0, RequestBodyValidator_1.default)((0, class_transformer_1.plainToClass)(Recharge_dto_1.default, req.body));
        const newRecharge = await service_1.recharge.createRecharge(body);
        res.status(200).json(newRecharge);
    }
    catch (error) {
        throw error;
    }
});
exports.default = router;
//# sourceMappingURL=recharge.route.js.map