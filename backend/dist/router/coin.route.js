"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const service_1 = require("../service");
const errors_1 = require("../util/error/errors");
const helper_1 = require("../helper");
const router = (0, express_1.Router)();
router.get("/coin/:currency", async (req, res) => {
    try {
        const { currency } = req.params;
        const collection = (0, helper_1.getCollecionOnCurrency)(currency);
        if (!collection)
            throw new errors_1.APIError("This Path is not valied");
        const coins = await service_1.coin.getCoins(collection);
        res.status(200).json(coins);
    }
    catch (error) {
        throw error;
    }
});
exports.default = router;
//# sourceMappingURL=coin.route.js.map