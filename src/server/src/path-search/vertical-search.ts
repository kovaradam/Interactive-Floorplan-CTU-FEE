import { TreeCoords, floorNums, VerticalType, Type, buildingCode } from '../utils/utils';
import VerticalPath from '../model/vertical-path';
import { verticalPaths } from '../db/data/vertical-paths';
import { calcDistance } from './path-search';

const verticals: { [key: string]: VerticalPath[] } = {};

for (const building in verticalPaths) {
  verticals[building] = [];
  verticalPaths[building].forEach(p => {
    verticals[building].push(new VerticalPath(p[0], p[1], { floor: p[2][0], x: p[2][1], y: p[2][2] }, p[3], p[4]));
  });
}

export function findVerticals(
  startCoords: TreeCoords,
  endCoords: TreeCoords,
  accessibility = false,
  building: buildingCode
) {
  const ret: [VerticalPath, number, number][] = [];
  let midFloorCoords = { ...startCoords };
  let reachedFloor = endCoords.floor;
  let reachedFloorIdx = floorNums[building].findIndex(n => n === endCoords.floor);
  if (startCoords.floor % 1 !== 0 && reachedFloor % 1 !== 0) {
    const vertical = findCheapestVertical(
      midFloorCoords,
      { x: endCoords.x, y: endCoords.y, floor: reachedFloor },
      accessibility,
      building
    );
    if (vertical) return [[vertical, startCoords.floor, endCoords.floor]];
    reachedFloor = findNearestCommonReachedFloor(startCoords.floor, endCoords.floor);
  }
  while (reachedFloor !== startCoords.floor) {
    let vertical = findCheapestVertical(
      midFloorCoords,
      { x: endCoords.x, y: endCoords.y, floor: reachedFloor },
      accessibility,
      building
    );
    if (vertical) {
      ret.push([vertical, midFloorCoords.floor, reachedFloor]);
      if (reachedFloor === endCoords.floor) {
        return ret;
      } else {
        midFloorCoords = vertical.coords; //test
        midFloorCoords.floor = reachedFloor;
        reachedFloor = endCoords.floor;
      }
    } else {
      reachedFloorIdx = (reachedFloorIdx += 1) % floorNums[building].length;
      reachedFloor = floorNums[building][reachedFloorIdx];
    }
  }

  // Something went wrong...

  return null;
}

export function findCheapestVertical(
  startCoords: TreeCoords,
  endCoords: TreeCoords,
  accessibility = false,
  building: buildingCode
): VerticalPath | null {

  let paths = verticals[building].filter(
    v =>
      v.floors.findIndex((f: number) => f === endCoords.floor) !== -1 &&
      v.floors.findIndex((f: number) => f === startCoords.floor) !== -1 &&
      (accessibility ? isAccessible(v.type) === accessibility : true)
  );
  if (paths.length > 0) {
    let closest: VerticalPath;
    let minDistance = Number.MAX_VALUE;
    paths.forEach(p => {
      const dist =
        (calcDistance(startCoords, p.coords) + calcDistance(endCoords, p.coords)) *
        getCostOfVertical(Math.abs(startCoords.floor - endCoords.floor), p.type);
      if (dist < minDistance) {
        closest = p;
        minDistance = dist;
      }
    });
    return closest!;
  } else {
    return null;
  }
}

function findNearestCommonReachedFloor(startFloor: number, endFloor: number, building: 'T2' = 'T2') {
  let reachedFloor = startFloor;
  let minDist = Number.MAX_VALUE;
  floorNums[building].forEach(n => {
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

function doesFloorReach(building: buildingCode, floor: number, ...endFloors: number[]) {
  for (let i = 0; i < verticals[building].length; i++) {
    const p = verticals[building][i];
    if (floorInRange(p.floors, floor)) {
      for (let i = 0; i < endFloors.length; i++) {
        if (floorInRange(p.floors, endFloors[i])) {
          endFloors.splice(i, 1);
          i = i === 0 ? 0 : i - 1;
        }
      }
    }
    if (endFloors.length === 0) return true;
  }
  return false;
}

function floorInRange(range: number[], floor: number) {
  return range.findIndex(n => n === floor) !== -1;
}

function getCostOfVertical(dist: number, type: VerticalType) {
  if (type === Type.STAIR) {
    return Math.pow(dist*0.7, 2);
  } else if (type === Type.ELEVATOR) {
    return 25 / dist;
  } else {
    return dist;
  }
}

function isAccessible(type: VerticalType) {
  if (type == Type.ELEVATOR) return true;
  return false;
}

