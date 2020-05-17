"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = require("../db/schemas");
const tree_node_1 = __importDefault(require("../model/tree-node"));
const hash_map_1 = __importDefault(require("../utils/hash-map"));
let LOADED_TREE = [];
async function getFloorTree(floor) {
    let hashMap;
    if (LOADED_TREE.length > 0) {
        if (LOADED_TREE[0].coords.floor == floor) {
            // console.log("loaded tree");
            return LOADED_TREE;
        }
        else {
            // console.log("loading tree");
            LOADED_TREE.splice(0, LOADED_TREE.length);
        }
    }
    const treeNodes = [];
    return schemas_1.TreeNodeModel.find({ 'coords.floor': floor })
        .then((dbNodes) => {
        hashMap = new hash_map_1.default(dbNodes.length);
        dbNodes.forEach(n => {
            const newNode = new tree_node_1.default(n.itemId, {
                floor: n.coords.floor,
                x: n.coords.x,
                y: n.coords.y
            }, n.building);
            treeNodes.push(newNode);
            hashMap.insert(newNode);
        });
        for (let i = 0; i < treeNodes.length; i++) {
            dbNodes[i].children.forEach((childId) => {
                treeNodes[i].addChild(hashMap.get(childId));
            });
        }
        LOADED_TREE = treeNodes;
        // console.log(hashMap.stats)
        return treeNodes;
    });
}
exports.getFloorTree = getFloorTree;
async function findNodeById(id) {
    return schemas_1.TreeNodeModel.findOne({ itemId: id }, '')
        .then((n) => {
        return new tree_node_1.default(n.itemId, {
            floor: n.coords.floor,
            x: n.coords.x,
            y: n.coords.y
        }, n.building);
    })
        .catch((e) => {
        // console.log(e, id);
        e.id = id;
        throw e;
    });
}
exports.findNodeById = findNodeById;
async function getAdjEntryOfBuilding(from) {
    return findNodeById(`entry${from}`);
}
exports.getAdjEntryOfBuilding = getAdjEntryOfBuilding;
async function getTreeNodeCount() {
    return schemas_1.TreeNodeModel.count({});
}
exports.getTreeNodeCount = getTreeNodeCount;
//# sourceMappingURL=tree-node.js.map