"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repo_1 = require("../repo");
const service_1 = require("../service");
const helper_1 = require("../helper");
const errors_1 = require("../util/error/errors");
class RechargeService {
    async createRecharge(data) {
        try {
            const Collection = (0, helper_1.getCollecionOnCurrency)(data.currency);
            if (!Collection)
                throw new errors_1.ValidationError("Currency is not MMK or THB");
            const CoinPackage = await service_1.coin.getCoinById(data.package_id, Collection);
            if (!CoinPackage)
                throw new errors_1.NotFoundError("CoinPackage is not MMK or THB");
            const rawRecharge = {
                ...data,
                coin: CoinPackage.amount,
                price: CoinPackage.price,
            };
            const newRecharge = await repo_1.rechargeRepo.create(rawRecharge);
            await service_1.user.addRecharge(newRecharge.customer_id, newRecharge.id);
            return newRecharge;
        }
        catch (error) {
            throw error;
        }
    }
    getRecharges() {
        throw new Error("Method not implemented.");
    }
    getRecharge(id) {
        throw new Error("Method not implemented.");
    }
    deleteRecharge(id) {
        throw new Error("Method not implemented.");
    }
}
exports.default = RechargeService;
//# sourceMappingURL=Recharge.service.js.map