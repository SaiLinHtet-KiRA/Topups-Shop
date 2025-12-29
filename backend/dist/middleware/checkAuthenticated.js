"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuthenticated = void 0;
const errors_1 = require("../util/error/errors");
const checkAuthenticated = (req, res, next) => {
    if (!req.user)
        throw new errors_1.AuthorizeError("Please Login First!!!");
    next();
};
exports.checkAuthenticated = checkAuthenticated;
//# sourceMappingURL=checkAuthenticated.js.map