"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vertical_path_1 = __importDefault(require("../model/vertical-path"));
const schemas_1 = require("../db/schemas");
async function getVerticalPaths() {
    const verticals = [];
    return schemas_1.VerticalPathModel.find().then((res) => {
        res.forEach(v => {
            let coords = { floor: v._coords.floor, x: v._coords.x, y: v._coords.y };
            verticals.push(new vertical_path_1.default(v._itemId, v._building, coords, v._type, v._floors));
        });
        return verticals;
    });
}
exports.getVerticalPaths = getVerticalPaths;
async function getVerticalPathsOfBuilding(building) {
    const verticals = [];
    return schemas_1.VerticalPathModel.find({ "_building": building }).then((res) => {
        res.forEach(v => {
            let coords = { floor: v._coords.floor, x: v._coords.x, y: v._coords.y };
            verticals.push(new vertical_path_1.default(v._itemId, v._building, coords, v._type, v._floors));
        });
        return verticals;
    });
}
exports.getVerticalPathsOfBuilding = getVerticalPathsOfBuilding;
//# sourceMappingURL=vertical-path.js.map