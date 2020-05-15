"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = __importDefault(require("../model/person"));
const usermap_broker_1 = __importDefault(require("../utils/usermap-broker"));
const person_2 = require("../service/person");
exports.getPerson = async (req, res, next) => {
    const username = req.params.username;
    person_2.getPersonFromUsermap(username).then(r => {
        if (r.error) {
            usermap_broker_1.default.getAccessToken().then(exports.getPerson(req, res, next));
            return;
        }
        if (r.errno == "ENOTFOUND") {
            res.status(500).json({ message: "No response from usermap", error: "noUsermapApiResponse" });
            return;
        }
        if (r.length === 0) {
            res.status(404).json({ message: "No person found", error: "noPersonFound" });
            return;
        }
        r = r.filter((p) => p.rooms.length > 0);
        if (r.length === 0) {
            res.status(404).json({ message: "No such person with rooms found", error: "noPersonWithRooms" });
            return;
        }
        let responsePayload = [];
        r.forEach((p) => {
            const newPerson = new person_1.default(p.fullName, p.username, p.rooms);
            //createPerson(newPerson);
            responsePayload.push(newPerson);
        });
        res.status(200).json(responsePayload);
    }).catch((e) => {
        console.log(e);
        res.status(404).json({ error: "noPersonFound" });
    });
};
//# sourceMappingURL=person.js.map