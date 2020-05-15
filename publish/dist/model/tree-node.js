"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_search_1 = require("../path-search/path-search");
class TreeNode {
    constructor(itemId, coords, building, children = [], parentId) {
        this.itemId = itemId;
        this.coords = coords;
        this.building = building;
        this.children = children;
        this.parentId = parentId;
    }
    findNext(parentId, end) {
        if (!this.parentId /* !== parentId*/) {
            this.parentId = parentId;
        }
        let retIndex;
        let minDistance = Number.MAX_VALUE;
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (this.children[i][0].id === end.id) {
                retIndex = i;
                break;
            }
            if (!child[1] && child[0].id !== this.parentId) {
                const tempDist = path_search_1.calcDistance(child[0].coords, end.coords);
                if (tempDist < minDistance) {
                    retIndex = i;
                    minDistance = tempDist;
                }
            }
        }
        if (retIndex === undefined)
            return null;
        this.children[retIndex][1] = true;
        return this.children[retIndex][0];
    }
    setChildrenUnvisited() {
        this.parentId = undefined;
        this.children.forEach(c => c[1] = false);
    }
    get id() {
        return this.itemId;
    }
    addChild(child) {
        this.children.push([child, false]);
    }
    setChildren(children) {
        children.forEach(c => {
            this.children.push([c, false]);
        });
    }
}
exports.default = TreeNode;
//# sourceMappingURL=tree-node.js.map