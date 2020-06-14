"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNodeProxy {
    constructor(itemId, hashTable, treeNode = null) {
        this.itemId = itemId;
        this.hashTable = hashTable;
        this.treeNode = treeNode;
    }
    loadNode() {
        if (this.treeNode === null) {
            this.treeNode = this.hashTable.get(this.itemId);
        }
    }
    findNext(parentId, end) {
        this.loadNode();
        return this.treeNode.findNext();
    }
    setChildrenUnvisited() {
        if (this.treeNode !== null)
            this.treeNode.setChildrenUnvisited();
    }
    getId() {
        this.loadNode();
        return this.treeNode.getId();
    }
    getChildren() {
        this.loadNode();
        return this.treeNode.getChildren();
    }
    getCoords() {
        this.loadNode();
        return this.treeNode.getCoords();
    }
    addChild(child) {
        this.loadNode();
        return this.treeNode.addChild();
    }
    setChildren(children) {
        this.loadNode();
        this.treeNode.setChildren();
    }
}
exports.default = TreeNodeProxy;
//# sourceMappingURL=tree-node-proxy.js.map