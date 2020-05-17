"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const floor_path_1 = __importDefault(require("../model/floor-path"));
const utils_1 = require("../utils/utils");
const vertical_search_1 = require("./vertical-search");
const tree_node_1 = require("../service/tree-node");
async function findPath(start, end, accessibility = false) {
    const startBuilding = start.building;
    const endBuilding = end.building;
    if (startBuilding !== endBuilding) {
        if (!areBuildingsAdjacent(startBuilding, endBuilding))
            throw Error(`buildingsNotAdjacent`);
        return await getPathsBetweenBuildings(start, end, accessibility);
    }
    return await getPathInBuilding(start, end, accessibility);
}
exports.findPath = findPath;
async function getPathInBuilding(start, end, accessibility = false) {
    if (start.coords.floor === end.coords.floor) {
        const path = await AStar(start.id, end.id, start.coords.floor);
        return [path];
    }
    else {
        return await getSubPaths(start, end, accessibility);
    }
}
async function AStar(startId, endId, floor) {
    const treeNodes = await tree_node_1.getFloorTree(floor);
    let startNode = treeNodes.find((n) => n.id == startId);
    let endNode = treeNodes.find((n) => n.id == endId);
    let ret = [];
    let visited = [];
    let pathComplete = false;
    let next = startNode.findNext(startNode.id, endNode);
    visited.push(startNode);
    while (!pathComplete) {
        if (next !== null) {
            if (next.id === endNode.id) {
                visited.push(next);
                pathComplete = true;
                break;
            }
            if (ret.length === 0 || ret[ret.length - 1].id !== next.id) {
                ret.push(next);
                visited.push(next);
            }
            const parent = ret.length >= 2 ? ret[ret.length - 2].id : startNode.id;
            next = next.findNext(parent, endNode);
        }
        else {
            ret.pop();
            if (ret.length === 0) {
                if (startNode.children.filter((c) => c[1] == false).length == 0) {
                    visited.forEach((node) => node.setChildrenUnvisited());
                    // console.log(`Path search fail from ${startId} to ${endId} in Astar`);
                    throw Error("AStarFail");
                }
                else {
                    next = startNode.findNext(startNode.id, endNode);
                }
            }
            else {
                next = ret[ret.length - 1];
            }
        }
    }
    visited.forEach((node) => node.setChildrenUnvisited());
    // return [startNode!,...ret, endNode!];
    const path = new floor_path_1.default(startId, endId, startNode.building, startNode.coords.floor, [startNode, ...ret, endNode]);
    return path;
}
exports.default = AStar;
async function getSubPaths(start, end, accessibility = false) {
    const verticals = vertical_search_1.findVerticals(start.coords, end.coords, accessibility, start.building);
    if (!verticals)
        throw Error(`verticalNotFound`);
    let paths = [];
    await AStar(start.id, verticals[0][0].id + "_" + verticals[0][1], verticals[0][1]).then(async (path) => {
        paths.push(path);
    });
    let i = 0;
    for (; i < verticals.length - 1; i++) {
        let from = verticals[i][0].id + "_" + verticals[i][2];
        let to = verticals[i + 1][0].id + "_" + verticals[i + 1][1];
        await AStar(from, to, verticals[i][2]).then(async (path) => {
            paths.push(path);
        });
    }
    return AStar(verticals[i][0].id + "_" + verticals[i][2], end.id, verticals[i][2]).then(async (path) => {
        paths.push(path);
        return paths;
    });
}
exports.getSubPaths = getSubPaths;
function calcDistance(start, end) {
    return Math.abs(start.x - end.x) + Math.abs(start.y - end.y);
}
exports.calcDistance = calcDistance;
async function getPathsBetweenBuildings(start, end, accessibility) {
    const ret = [];
    let entry = await tree_node_1.getAdjEntryOfBuilding(end.building);
    let path = await getPathInBuilding(start, entry, accessibility);
    ret.push(...path);
    entry = await tree_node_1.getAdjEntryOfBuilding(start.building);
    path = await getPathInBuilding(entry, end, accessibility);
    ret.push(...path);
    return ret;
}
function areBuildingsAdjacent(a, b) {
    return (utils_1.buildings[a].adjacent.find(adj => adj.building === b)) !== null;
}
//# sourceMappingURL=path-search.js.map