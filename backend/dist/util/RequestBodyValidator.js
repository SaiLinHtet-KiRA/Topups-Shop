"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RequestBodyValidation;
const class_validator_1 = require("class-validator");
const errors_1 = require("./error/errors");
async function RequestBodyValidation(input) {
    const keys = Object.keys(input);
    for (const key of keys) {
        if (!isNaN(Number(input[key])))
            input[key] = Number(input[key]);
    }
    const error = await (0, class_validator_1.validate)(input, {
        ValidationError: { target: true },
    });
    if (error.length) {
        const ErrorField = Object.keys(error[0].constraints);
        throw new errors_1.ValidationError(error[0].constraints[ErrorField[0]]);
    }
    return input;
}
//# sourceMappingURL=RequestBodyValidator.js.map