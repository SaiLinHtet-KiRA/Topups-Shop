"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const game_1 = __importDefault(require("./game"));
const mongoose_sequence_1 = __importDefault(require("mongoose-sequence"));
const AutoIncrement = (0, mongoose_sequence_1.default)(mongoose_1.default);
const TopupSchema = new mongoose_1.Schema({
    customer: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    game: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: game_1.default,
    },
    user_id: { type: Number },
    zone_id: { type: Number },
    ingame_name: { type: String },
    currency: {
        type: String,
        enum: ["Coin", "MMK", "THB"],
        default: "Coin",
    },
    payment: {
        type: String,
        enum: ["Coin", "Kpay", "Wavepay", "Bangkok Bank"],
        default: "Coin",
    },
    total: { type: Number, required: true },
    packages: [
        {
            package_name: { type: String, required: true },
            package_images: { type: String, required: true },
            price: { type: Number, required: true },
        },
    ],
    status: {
        type: String,
        enum: ["pending", "success", "fail"],
        default: "pending",
    },
}, { timestamps: true, versionKey: false });
TopupSchema.plugin(AutoIncrement, { inc_field: "id" });
exports.default = mongoose_1.default.connection
    .useDb("Topups")
    .model("Topup", TopupSchema);
//# sourceMappingURL=Topup.js.map