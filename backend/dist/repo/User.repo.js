"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_model_1 = __importDefault(require("@/model/User.model"));
const errors_1 = require("@/util/error/errors");
class UserRepo {
    async createUser(id) {
        try {
            const User = new User_model_1.default({ id });
            return await User.save();
        }
        catch (error) {
            throw new Error("Method not implemented.");
        }
    }
    async getUserByID(id) {
        try {
            const User = await User_model_1.default.findById(id);
            if (!User)
                throw new errors_1.NotFoundError(`User is not found in DB!!! ID=${id}`);
            return User;
        }
        catch (error) {
            throw new Error("Method not implemented.");
        }
    }
    async getUsers(start, limit) {
        throw new Error("Method not implemented.");
    }
    async getUserByFindOne(id) {
        try {
            const user = await User_model_1.default.findOne({ id });
            if (!user)
                throw new errors_1.NotFoundError(`User is not found in DB!!! ID=${id}`);
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async updateUserById(id, data) {
        throw new Error("Method not implemented.");
    }
    async deleteUserById(id) {
        throw new Error("Method not implemented.");
    }
}
exports.default = new UserRepo();
//# sourceMappingURL=User.repo.js.map