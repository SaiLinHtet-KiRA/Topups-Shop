"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    host: config_1.POSTGRES_HOST,
    port: config_1.POSTGRES_PORT,
    user: config_1.POSTGRES_USERNAME,
    password: config_1.POSTGRES_PASSWORD,
    database: config_1.POSTGRES_DB,
});
exports.default = pool;
//# sourceMappingURL=postgres.js.map