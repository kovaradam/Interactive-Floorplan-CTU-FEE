"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectionString = process.env.DATABASE_URI || `mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;
console.log(process.env.NODE_ENV || 'development');
exports.default = {
    database: {
        connectionString: connectionString
    },
    usermap: {
        credentials: process.env.USERMAP_CREDENTIALS,
        tokenEndpoint: 'https://auth.fit.cvut.cz/oauth/token'
    },
    server: {
        port: process.env.APP_PORT
    }
};
//# sourceMappingURL=config.js.map