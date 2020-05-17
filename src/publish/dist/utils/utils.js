"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Type;
(function (Type) {
    Type[Type["SERVICES"] = 0] = "SERVICES";
    Type[Type["FOOD"] = 1] = "FOOD";
    Type[Type["HEALTH"] = 2] = "HEALTH";
    Type[Type["STUDY"] = 3] = "STUDY";
    Type[Type["WC"] = 4] = "WC";
    Type[Type["ACCESSIBILITY"] = 5] = "ACCESSIBILITY";
    Type[Type["STAIR"] = 6] = "STAIR";
    Type[Type["ELEVATOR"] = 7] = "ELEVATOR";
    Type[Type["PATER"] = 8] = "PATER";
})(Type = exports.Type || (exports.Type = {}));
exports.floorNums = {
    T2: [-1.1, -1.2, 0, 1, 2, 3, 4, 5.1, 6.1, 7.1, 8.1, 5.2, 6.2, 7.2, 8.2, 5.3, 5.4, 5.5],
    H: [0, 1]
};
exports.buildings = {
    T2: {
        adjacent: [
            { building: 'H', entry: 'entryH' }
        ]
    },
    H: {
        adjacent: [
            { building: 'T2', entry: 'entryT2' }
        ]
    },
};
//# sourceMappingURL=utils.js.map