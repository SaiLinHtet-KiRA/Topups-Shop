"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const class_transformer_1 = require("class-transformer");
const RequestBodyValidator_1 = __importDefault(require("../util/RequestBodyValidator"));
const Checkid_1 = __importDefault(require("../dto/Checkid"));
const service_1 = require("../service");
const router = (0, express_1.Router)();
router.post("/check_id/mobilelegends", async (req, res) => {
    try {
        const body = await (0, RequestBodyValidator_1.default)((0, class_transformer_1.plainToClass)(Checkid_1.default, req.body));
        const { code, username } = await service_1.checkID.mobilelegends(body);
        res.status(code).json(username);
    }
    catch (error) {
        throw error;
    }
});
exports.default = router;
//# sourceMappingURL=checkid.route.js.map