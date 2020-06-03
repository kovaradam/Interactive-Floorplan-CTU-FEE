"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tree_node_1 = require("../service/tree-node");
const path_search_1 = require("../path-search");
exports.getPath = async (req, res, next) => {
    const { startId, endId } = req.query;
    const accessibility = req.query.accessibility === "true";
    let start, end;
    try {
        start = await tree_node_1.findNodeById(startId);
        end = await tree_node_1.findNodeById(endId);
    }
    catch (e) {
        res.status(400).json({
            message: `Node ${e.id} not in database`,
            error: "nodeNotInDatabase",
        });
        return;
    }
    try {
        const paths = await path_search_1.findPath(start, end, accessibility);
        res.status(200).json(paths);
    }
    catch (e) {
        res.status(500).json({ message: "Could not find path", error: e.message });
    }
};
//# sourceMappingURL=path.js.map