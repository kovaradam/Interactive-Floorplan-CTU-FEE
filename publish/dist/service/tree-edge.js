"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = require("../db/schemas");
async function findEdgeById(id) {
    return schemas_1.TreeEdgeModel.findOne({ edgeId: id }, "");
}
exports.findEdgeById = findEdgeById;
async function findEdgesByIds(id) {
    return schemas_1.TreeEdgeModel.find({ edgeId: id });
}
exports.findEdgesByIds = findEdgesByIds;
//# sourceMappingURL=tree-edge.js.map