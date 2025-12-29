"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repo_1 = __importDefault(require("../repo/user.repo"));
class UserService {
    async findOrCreateUser(id) {
        try {
            const user = await user_repo_1.default.getUserById(id);
            if (!user)
                throw Error("user dose not existed in DB");
            return user;
        }
        catch (error) {
            return await user_repo_1.default.createUser(id);
        }
    }
    getUsers(start, limit) {
        throw new Error("Method not implemented asds.");
    }
    getUserById(id) {
        throw new Error("Method not implemented.");
    }
    updateUserById(id, data) {
        throw new Error("Method not implemented.");
    }
    deleteUserById(id) {
        throw new Error("Method not implemented.");
    }
}
exports.default = new UserService();
//# sourceMappingURL=user.service.js.map