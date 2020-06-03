"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.treeNodeSchema = new Schema({
    itemId: { type: String, index: true },
    coords: { floor: { type: Number, index: true }, x: Number, y: Number },
    children: [String],
    building: { type: String, index: true }
});
exports.TreeNodeModel = mongoose_1.default.model('TreeNode', exports.treeNodeSchema);
//# sourceMappingURL=schemas.js.map