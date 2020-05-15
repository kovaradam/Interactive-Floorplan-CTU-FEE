"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils/utils");
const vertical_path_1 = __importDefault(require("../model/vertical-path"));
const vertical_paths_1 = require("../db/data/vertical-paths");
const path_search_1 = require("./path-search");
function findVerticals(startCoords, endCoords, accessibility = false, building) {
    const ret = [];
    let midFloorCoords = { ...startCoords };
    let reachedFloor = endCoords.floor;
    let reachedFloorIdx = utils_1.floorNums[building].findIndex(n => n === endCoords.floor);
    if (startCoords.floor % 1 !== 0 && reachedFloor % 1 !== 0) {
        const vertical = findCheapestVertical(midFloorCoords, { x: endCoords.x, y: endCoords.y, floor: reachedFloor }, accessibility, building);
        if (vertical)
            return [[vertical, startCoords.floor, endCoords.floor]];
        reachedFloor = findNearestCommonReachedFloor(startCoords.floor, endCoords.floor);
        // dir = reachedFloor <= midFloorCoords.floor? 1 : -1;
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
function findCheapestVertical(startCoords, endCoords, accessibility = false, building) {
    const verticals = vertical_paths_1.verticalPaths[building];
    let paths = verticals.filter(v => v[4].findIndex((f) => f === endCoords.floor) !== -1 &&
        v[4].findIndex((f) => f === startCoords.floor) !== -1 &&
        (accessibility ? utils_1.isAccessible(v[3]) === accessibility : true));
    if (paths.length > 0) {
        let closest;
        let minDistance = Number.MAX_VALUE;
        paths.forEach(p => {
            p = new vertical_path_1.default(p[0], p[1], { floor: p[2][0], x: p[2][1], y: p[2][2] }, p[3], p[4]);
            const dist = (path_search_1.calcDistance(startCoords, p.coords) +
                path_search_1.calcDistance(endCoords, p.coords))
                * getCostOfVertical(Math.abs(startCoords.floor - endCoords.floor), p.type);
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
function findNearestCommonReachedFloor(startFloor, endFloor, building = 'T2') {
    let reachedFloor = startFloor;
    let minDist = Number.MAX_VALUE;
    utils_1.floorNums[building].forEach(n => {
        if (doesFloorReach(building, n, startFloor, endFloor)) {
            const dist = Math.abs(startFloor - n) + Math.abs(endFloor - n);
            if (dist < minDist) {
                reachedFloor = n;
                minDist = dist;
            }
        }
    });
    return reachedFloor;
}
function doesFloorReach(building, floor, ...endFloors) {
    const verticals = vertical_paths_1.verticalPaths[building];
    for (let i = 0; i < verticals.length; i++) {
        const p = verticals[i];
        if (floorInRange(p[4], floor)) {
            for (let i = 0; i < endFloors.length; i++) {
                if (floorInRange(p[4], endFloors[i])) {
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
        return dist;
    }
    else if (type === utils_1.Type.ELEVATOR) {
        return 9 / dist;
    }
    else {
        return 4 / dist;
    }
}
//# sourceMappingURL=vertical-search.js.map