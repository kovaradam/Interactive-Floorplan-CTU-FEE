"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils/utils");
exports.verticalPaths = {
    T2: [
        ['stair_cloak0', 'T2', [-1, 439, 286], utils_1.Type.STAIR, [-1.1, 0]],
        ['stair_cloak1', 'T2', [-1, 410, 286], utils_1.Type.STAIR, [-1.1, 0]],
        ['stairA2', 'T2', [-1, 120, 254], utils_1.Type.STAIR, [-1.1, ...utils_1.floorNums['T2'].slice(2, 7), 5.5]],
        ['elevA2', 'T2', [-1, 93, 254], utils_1.Type.ELEVATOR, [-1.1, ...utils_1.floorNums['T2'].slice(2, 7), 5.5]],
        ['stairA3', 'T2', [-1, 304, 254], utils_1.Type.STAIR, [-1.1, ...utils_1.floorNums['T2'].slice(2, 7), 5.4]],
        ['elevA3', 'T2', [-1, 331, 253], utils_1.Type.ELEVATOR, [-1.1, ...utils_1.floorNums['T2'].slice(2, 7), 5.4]],
        ['stairA4', 'T2', [-1, 542, 254], utils_1.Type.STAIR, [-1.1, ...utils_1.floorNums['T2'].slice(2, 7), 5.3]],
        ['elevA4', 'T2', [-1, 513, 253], utils_1.Type.ELEVATOR, [-1.1, ...utils_1.floorNums['T2'].slice(2, 7), 5.3]],
        ['stairC3', 'T2', [-1, 226, 209], utils_1.Type.STAIR, [-1.1, ...utils_1.floorNums['T2'].slice(2, 7), ...utils_1.floorNums['T2'].slice(11, 15)]],
        ['stairC4', 'T2', [-1, 437, 209], utils_1.Type.STAIR, [-1.1, ...utils_1.floorNums['T2'].slice(2, 11)]],
        ['stairB2', 'T2', [-1, 198, 60], utils_1.Type.STAIR, [-1.1, ...utils_1.floorNums['T2'].slice(2, 7), ...utils_1.floorNums['T2'].slice(11, 15)]],
        ['elevB2', 'T2', [-1, 198, 70], utils_1.Type.ELEVATOR, [-1.1, ...utils_1.floorNums['T2'].slice(2, 7), ...utils_1.floorNums['T2'].slice(11, 15)]],
        ['stairB3', 'T2', [-1, 408, 60], utils_1.Type.STAIR, utils_1.floorNums['T2'].slice(1, 11)],
        ['elevB3', 'T2', [-1, 408, 70], utils_1.Type.ELEVATOR, utils_1.floorNums['T2'].slice(1, 11)],
        ['pater0', 'T2', [-1, 408, 209], utils_1.Type.PATER, [-1.1, ...utils_1.floorNums['T2'].slice(2, 11)]],
        ['pater1', 'T2', [-1, 198, 209], utils_1.Type.PATER, [-1.1, ...utils_1.floorNums['T2'].slice(2, 7), ...utils_1.floorNums['T2'].slice(11, 15)]]
    ],
    H: [
        ['stairE1', 'H', [-1, 180, 97], utils_1.Type.STAIR, utils_1.floorNums['H']],
        ['stairF1', 'H', [-1, 170, 310], utils_1.Type.STAIR, utils_1.floorNums['H']],
        ['stairG1', 'H', [-1, 510, 310], utils_1.Type.STAIR, utils_1.floorNums['H']]
    ],
};
//# sourceMappingURL=vertical-paths.js.map