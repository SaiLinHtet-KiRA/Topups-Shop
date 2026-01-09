"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_repo_1 = __importDefault(require("@/repo/User.repo"));
class UserService {
    async findOrCreateUser(id) {
        try {
            const user = await User_repo_1.default.getUserByFindOne(id);
            return user;
        }
        catch (error) {
            return await User_repo_1.default.createUser(id);
        }
    }
    getUsers(start, limit) {
        throw new Error("Method not implemented asds.");
    }
    async getUserById(id) {
        try {
            const user = await User_repo_1.default.getUserByID(id);
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    updateUserById(id, data) {
        throw new Error("Method not implemented.");
    }
    deleteUserById(id) {
        throw new Error("Method not implemented.");
    }
}
exports.default = new UserService();
//# sourceMappingURL=User.service.js.map