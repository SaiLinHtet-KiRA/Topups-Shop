"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        if (!fs_1.default.existsSync("./public" + req.url))
            fs_1.default.mkdirSync("./public" + req.url, { recursive: true });
        cb(null, "./public" + req.url);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "." + file.originalname.split(".")[1]);
    },
});
exports.default = storage;
//# sourceMappingURL=multer-storage.js.map