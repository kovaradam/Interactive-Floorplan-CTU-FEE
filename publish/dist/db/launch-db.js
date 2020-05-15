"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = require("./schemas");
const tree_nodes_new_1 = require("./data/tree-nodes-new");
const vertical_paths_1 = require("./data/vertical-paths");
const app_1 = __importDefault(require("../app"));
function dropCollection(collection) {
    app_1.default.dropCollection(collection, function (err
    //result: any
    ) {
        console.log(`${collection} dropped`);
    });
}
async function createTreeNodes() {
    const dbNodeCount = await schemas_1.TreeNodeModel.countDocuments({});
    let localNodeCount = 0;
    for (const building in tree_nodes_new_1.treeNodes) {
        localNodeCount += tree_nodes_new_1.treeNodes[building].length;
    }
    if (dbNodeCount < localNodeCount) {
        dropCollection('treenodes');
        for (const building in tree_nodes_new_1.treeNodes) {
            tree_nodes_new_1.treeNodes[building].forEach((d) => {
                const instance = new schemas_1.TreeNodeModel({
                    itemId: d[0],
                    coords: { floor: d[1][0], x: d[1][1], y: d[1][2] },
                    children: d[2],
                    building: building
                });
                instance.save();
            });
        }
    }
    for (const building in tree_nodes_new_1.treeNodes) {
        delete tree_nodes_new_1.treeNodes[building];
    }
}
exports.createTreeNodes = createTreeNodes;
function createVerticals() {
    dropCollection('verticalpaths');
    for (const building in tree_nodes_new_1.treeNodes) {
        vertical_paths_1.verticalPaths[building].forEach(d => {
            const instance = new schemas_1.VerticalPathModel({
                _itemId: d[0],
                _building: d[1],
                _coords: { floor: d[2][0], x: d[2][1], y: d[2][2] },
                _type: d[3],
                _floors: d[4]
            });
            instance.save();
        });
    }
}
exports.createVerticals = createVerticals;
//# sourceMappingURL=launch-db.js.map