"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../util/error/errors");
class CheckID {
    async mobilelegends(id) {
        try {
            const res = await fetch("https://www.smile.one/ph/merchant/mobilelegends/checkrole", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(id),
            });
            const { code, username } = await res.json();
            return { code, username };
        }
        catch (error) {
            throw new errors_1.APIError("Api Error");
        }
    }
}
exports.default = CheckID;
//# sourceMappingURL=CheckId.service.js.map