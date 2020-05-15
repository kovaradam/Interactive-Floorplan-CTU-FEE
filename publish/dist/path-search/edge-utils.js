"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hashCodeOf(input) {
    var hash = 0, i, chr;
    for (i = 0; i < input.length; i++) {
        chr = input.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
function getEdgeId(a, b) {
    const add = b[b.length - 1] === a[a.length - 1] ? a[a.length - 1] : "";
    return (hashCodeOf(a) ^ hashCodeOf(b)) + add;
}
exports.getEdgeId = getEdgeId;
function getEdgesFromNodeIds(nodeIds, startId, endId) {
    const edgeIds = [getEdgeId(startId, nodeIds[0])];
    for (let i = 0; i < nodeIds.length - 1; i++) {
        edgeIds.push(getEdgeId(nodeIds[i], nodeIds[i + 1]));
    }
    edgeIds.push(getEdgeId(nodeIds[nodeIds.length - 1], endId));
    return edgeIds;
}
exports.getEdgesFromNodeIds = getEdgesFromNodeIds;
//# sourceMappingURL=edge-utils.js.map