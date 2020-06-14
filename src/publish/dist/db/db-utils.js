"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = require("./schemas");
const tree_nodes_1 = require("./data/tree-nodes");
const app_1 = __importDefault(require("../app"));
function dropCollection(collection) {
    app_1.default.dropCollection(collection, () => {
        console.log(`${collection} dropped`);
    });
}
async function createTreeNodes() {
    const dbNodeCount = await schemas_1.TreeNodeModel.countDocuments({});
    let localNodeCount = 0;
    for (const building in tree_nodes_1.treeNodes) {
        localNodeCount += tree_nodes_1.treeNodes[building].length;
    }
    if (dbNodeCount !== localNodeCount) {
        dropCollection('treenodes');
        for (const building in tree_nodes_1.treeNodes) {
            tree_nodes_1.treeNodes[building].forEach((d) => {
                const instance = new schemas_1.TreeNodeModel({
                    itemId: d[0],
                    coords: { floor: d[1][0], x: d[1][1], y: d[1][2] },
                    children: d[2],
                    building: building
                });
                instance.save();
            });
        }
        console.log('treenodes created');
    }
    for (const building in tree_nodes_1.treeNodes) {
        delete tree_nodes_1.treeNodes[building];
    }
}
exports.createTreeNodes = createTreeNodes;
//# sourceMappingURL=db-utils.js.map