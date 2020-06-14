"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usermap_broker_1 = __importDefault(require("../utils/usermap-broker"));
const node_fetch_1 = __importDefault(require("node-fetch"));
async function getPersonFromUsermap(query) {
    const response = await node_fetch_1.default(usermap_broker_1.default.url(query), {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${usermap_broker_1.default.ACCESS_TOKEN}`
        }
    });
    const json = await response.json();
    return json;
}
exports.getPersonFromUsermap = getPersonFromUsermap;
//# sourceMappingURL=person.js.map