"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class Preferrences {
    static getCostOfType(type) {
        if (type == utils_1.Type.STAIR)
            return this.stairCost;
        if (type == utils_1.Type.ELEVATOR)
            return this.elevatorCost;
        else
            return this.paternosterCost;
    }
}
exports.Preferrences = Preferrences;
Preferrences.stairCost = 2;
Preferrences.elevatorCost = 3;
Preferrences.paternosterCost = 1;
//# sourceMappingURL=preferrences.js.map