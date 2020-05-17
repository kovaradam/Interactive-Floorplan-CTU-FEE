"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config/config"));
const base_64_1 = __importDefault(require("base-64"));
const node_fetch_1 = __importDefault(require("node-fetch"));
class UsermapBroker {
    static url(username) {
        return encodeURI(`https://kosapi.fit.cvut.cz/usermap/v1/people?query=name=="${username}"`);
    }
    static async getAccessToken() {
        const url = config_1.default.usermap.tokenEndpoint;
        const credentials = base_64_1.default.encode(config_1.default.usermap.credentials);
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${credentials}`
            // Scope: 'urn:ctu:oauth:umapi.read'
        };
        const response = await node_fetch_1.default(url, {
            method: "POST",
            headers: headers,
            body: "grant_type=client_credentials"
        });
        this.ACCESS_TOKEN = (await response.json()).access_token;
    }
}
exports.default = UsermapBroker;
UsermapBroker.ACCESS_TOKEN = "";
//# sourceMappingURL=usermap-broker.js.map