"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCollecionOnCurrency = void 0;
const getCollecionOnCurrency = (currency) => {
    const lowerCase = currency.toLowerCase();
    return lowerCase == "mmk" ? "mmkcoin" : currency == "thb" ? "thbcoin" : null;
};
exports.getCollecionOnCurrency = getCollecionOnCurrency;
//# sourceMappingURL=getCollecionOnCurrency.js.map