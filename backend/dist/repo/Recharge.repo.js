"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postgres_1 = __importDefault(require("../config/DB/postgres"));
class RechargeRepo {
    async create(data) {
        try {
            return (await postgres_1.default.query("INSERT INTO recharge (customer_id,coin,price,currency,payment,file) VALUES ($1,$2,$3,$4,$5,$6) RETURNING * ", [
                data.customer_id,
                data.coin,
                data.price,
                data.currency,
                data.payment,
                data.file,
            ])).rows[0];
        }
        catch (error) {
            throw error;
        }
    }
    get() {
        throw new Error("Method not implemented.");
    }
    getByid(id) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
exports.default = RechargeRepo;
//# sourceMappingURL=Recharge.repo.js.map