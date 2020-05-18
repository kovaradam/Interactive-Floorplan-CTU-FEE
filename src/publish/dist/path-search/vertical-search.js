"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils/utils");
const vertical_path_1 = __importDefault(require("../model/vertical-path"));
const vertical_paths_1 = require("../db/data/vertical-paths");
const path_search_1 = require("./path-search");
const verticals = {};
for (const building in vertical_paths_1.verticalPaths) {
    verticals[building] = [];
    vertical_paths_1.verticalPaths[building].forEach(p => {
        verticals[building].push(new vertical_path_1.default(p[0], p[1], { floor: p[2][0], x: p[2][1], y: p[2][2] }, p[3], p[4]));
    });
}
function findVerticals(startCoords, endCoords, accessibility = false, building) {
    const ret = [];
    let midFloorCoords = { ...startCoords };
    let reachedFloor = endCoords.floor;
    let reachedFloorIdx = utils_1.floorNums[building].findIndex(n => n === endCoords.floor);
    if (startCoords.floor % 1 !== 0 && reachedFloor % 1 !== 0) {
        const vertical = findCheapestVertical(midFloorCoords, { x: endCoords.x, y: endCoords.y, floor: reachedFloor }, accessibility, building);
        if (vertical)
            return [[vertical, startCoords.floor, endCoords.floor]];
        reachedFloor = findNearestCommonReachedFloor(startCoords.floor, endCoords.floor, building, accessibility);
    }
    while (reachedFloor !== startCoords.floor) {
        let vertical = findCheapestVertical(midFloorCoords, { x: endCoords.x, y: endCoords.y, floor: reachedFloor }, accessibility, building);
        if (vertical) {
            ret.push([vertical, midFloorCoords.floor, reachedFloor]);
            if (reachedFloor === endCoords.floor) {
                return ret;
            }
            else {
                midFloorCoords = vertical.coords; //test
                midFloorCoords.floor = reachedFloor;
                reachedFloor = endCoords.floor;
            }
        }
        else {
            reachedFloorIdx = (reachedFloorIdx += 1) % utils_1.floorNums[building].length;
            reachedFloor = utils_1.floorNums[building][reachedFloorIdx];
        }
    }
    // Something went wrong...
    return null;
}
exports.findVerticals = findVerticals;
function findCheapestVertical(startCoords, endCoords, accessibility, building) {
    let paths = verticals[building].filter(v => v.floors.findIndex((f) => f === endCoords.floor) !== -1 &&
        v.floors.findIndex((f) => f === startCoords.floor) !== -1 &&
        (accessibility ? isAccessible(v.type) === accessibility : true));
    if (paths.length > 0) {
        let closest;
        let minDistance = Number.MAX_VALUE;
        paths.forEach(p => {
            const dist = (path_search_1.calcDistance(startCoords, p.coords) + path_search_1.calcDistance(endCoords, p.coords)) *
                getCostOfVertical(Math.abs(startCoords.floor - endCoords.floor), p.type);
            if (dist < minDistance) {
                closest = p;
                minDistance = dist;
            }
        });
        return closest;
    }
    else {
        return null;
    }
}
exports.findCheapestVertical = findCheapestVertical;
function findNearestCommonReachedFloor(startFloor, endFloor, building, accessibility) {
    let reachedFloor = startFloor;
    let minDist = Number.MAX_VALUE;
    utils_1.floorNums[building].forEach(n => {
        if (doesFloorReach(building, accessibility, n, startFloor, endFloor)) {
            const dist = Math.abs(startFloor - n) + Math.abs(endFloor - n);
            if (dist < minDist) {
                reachedFloor = n;
                minDist = dist;
            }
        }
    });
    return reachedFloor;
}
function doesFloorReach(building, accessibility, floor, ...endFloors) {
    const verts = verticals[building].filter(v => accessibility ? isAccessible(v.type) : true);
    for (let i = 0; i < verts.length; i++) {
        const p = verts[i];
        if (floorInRange(p.floors, floor)) {
            for (let i = 0; i < endFloors.length; i++) {
                if (floorInRange(p.floors, endFloors[i])) {
                    endFloors.splice(i, 1);
                    i = i === 0 ? 0 : i - 1;
                }
            }
        }
        if (endFloors.length === 0)
            return true;
    }
    return false;
}
function floorInRange(range, floor) {
    return range.findIndex(n => n === floor) !== -1;
}
function getCostOfVertical(dist, type) {
    if (type === utils_1.Type.STAIR) {
        return Math.pow(dist * 0.7, 2);
    }
    else if (type === utils_1.Type.ELEVATOR) {
        return 25 / dist;
    }
    else {
        return dist;
    }
}
function isAccessible(type) {
    if (type == utils_1.Type.ELEVATOR)
        return true;
    return false;
}
//# sourceMappingURL=vertical-search.js.map