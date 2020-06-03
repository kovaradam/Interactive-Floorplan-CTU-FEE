"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NodeHashTable {
    constructor(size, collisionCountOnInsert = 0, collisionCountOnGet = 0) {
        this.collisionCountOnInsert = collisionCountOnInsert;
        this.collisionCountOnGet = collisionCountOnGet;
        this.data = [];
        this.insert = (node) => {
            let idx = this.hash(node.itemId);
            const startIdx = idx;
            while (this.data[idx] !== null) {
                this.collisionCountOnInsert++;
                idx = (idx + 1) % this.data.length;
                if (idx === startIdx)
                    throw Error(`hashMapInsertFail`);
            }
            this.data[idx] = node;
        };
        this.get = (id) => {
            let idx = this.hash(id);
            let result = this.data[idx];
            if (result === null)
                throw Error(`hashMapGetElemFail`);
            const startIdx = idx;
            while (result.itemId !== id) {
                this.collisionCountOnGet++;
                idx = (idx + 1) % this.size;
                result = this.data[idx];
                if (idx === startIdx)
                    throw Error('hashMapItemNotFound');
            }
            return result;
        };
        size *= 3;
        for (let i = 0; i < size; i++) {
            this.data.push(null);
        }
    }
    hash(id) {
        var hash = 0;
        if (id.length == 0)
            return hash;
        for (var i = 0; i < id.length; i++) {
            hash = (hash << 5) - hash;
            hash = hash + id.charCodeAt(i);
            hash = hash & hash;
        }
        return Math.abs(hash % this.size);
    }
    get size() {
        return this.data.length;
    }
    get stats() {
        return `Hashmap - size: ${this.size} collisions on get: ${this.collisionCountOnGet} collisions on insert: ${this.collisionCountOnInsert}`;
    }
}
exports.default = NodeHashTable;
//# sourceMappingURL=hash-table.js.map