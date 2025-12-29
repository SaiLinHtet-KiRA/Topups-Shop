"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../model/user"));
const Topup_1 = __importDefault(require("../model/Topup"));
class TopupRepo {
    async create(data) {
        try {
            const newTopup = new Topup_1.default(data);
            return await newTopup.save();
            // return (
            //   await pool.query(
            //     "INSERT INTO topup (customer_id,game_id,user_id,zone_id,ingame_name,package_name,package_images,price,currency,payment) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING * ",
            //     [
            //       data.customer_id,
            //       data.game_id,
            //       data.user_id,
            //       data.zone_id,
            //       data.ingame_name,
            //       data.package_name,
            //       data.package_images,
            //       data.price,
            //       data.currency,
            //       data.payment,
            //     ]
            //   )
            // ).rows[0];
        }
        catch (error) {
            throw error;
        }
    }
    async get(user_id) {
        try {
            const _ = await user_1.default.findById(user_id, {
                topups: 1,
            });
            return _?.topups;
        }
        catch (error) {
            throw error;
        }
    }
    async getByid(id) {
        try {
            return await Topup_1.default.findById(id).populate({
                path: "game",
                select: { name: 1, icon: 1, _id: 0 },
            });
            // return (await pool.query("SELECT * FROM topup WHERE id=$1", [id]))
            //   .rows[0];
        }
        catch (error) {
            throw error;
        }
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
exports.default = TopupRepo;
//# sourceMappingURL=Topup.repo.js.map