"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        require: true,
        index: true,
        unique: true,
    },
    banned: {
        type: Boolean,
        default: false,
        indexedDB: true,
    },
    balance: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const UserModel = mongoose_1.default.connection
    .useDb("User")
    .model("User", UserSchema);
exports.default = UserModel;
//# sourceMappingURL=User.model.js.map