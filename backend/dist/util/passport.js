"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config/config");
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const service_1 = require("../service");
passport_1.default.use(new passport_google_oauth20_1.Strategy({
    clientID: config_1.GOOGLE_CLIENT,
    clientSecret: config_1.GOOGLE_SECRET,
    callbackURL: config_1.BACKEND_URL + "/auth/google/callback",
}, async (accessToken, refreshToken, profile, cb) => {
    try {
        if (profile._json.email) {
            try {
                const existUser = await service_1.user.getUserByEmail(profile._json.email);
                return cb(null, existUser);
            }
            catch (error) {
                const newUser = await service_1.user.createUser({
                    email: profile._json.email,
                    firstName: profile._json.given_name,
                    lastName: profile._json.family_name,
                });
                return cb(null, newUser);
            }
        }
    }
    catch (error) {
        cb(error);
    }
}));
passport_1.default.serializeUser((user, cb) => {
    cb(null, user._id);
});
passport_1.default.deserializeUser(async (_id, cb) => {
    const existUser = await service_1.user.getUserById(_id);
    const { email, role, coin } = existUser;
    if (existUser)
        cb(null, { _id, email, role, coin });
});
//# sourceMappingURL=passport.js.map