import TreeNode from "../model/tree-node";
import FloorPath from "../model/floor-path";
import { TreeCoords,buildings, buildingCode } from "../utils/utils";
import { findVerticals } from "./vertical-search";
import { getFloorTree, getAdjEntryOfBuilding } from "../service/tree-node";

export async function findPath(
  start: TreeNode,
  end: TreeNode,
  accessibility = false
) {
  const startBuilding = start.building
  const endBuilding = end.building

  if(startBuilding !== endBuilding){
    if (!areBuildingsAdjacent(startBuilding,endBuilding)) throw Error(`buildingsNotAdjacent`);
    return await getPathsBetweenBuildings(start, end, accessibility)
  }

  return await getPathInBuilding(start, end, accessibility)
}

async function getPathInBuilding (
  start: TreeNode,
  end: TreeNode,
  accessibility = false
  ){
    if (start.coords.floor === end.coords.floor) {
      const path = await AStar(start.id, end.id, start.coords.floor);
      return [path];
    } else {
      return await getSubPaths(start, end, accessibility);
    }
    
}

export default async function AStar(
  startId: string,
  endId: string,
  floor: number
) {
  const treeNodes = await getFloorTree(floor);
  let startNode = treeNodes.find((n: TreeNode) => n.id == startId) as TreeNode;
  let endNode = treeNodes.find((n: TreeNode) => n.id == endId);
  let ret: TreeNode[] = [];
  let visited: TreeNode[] = [];
  let pathComplete = false;

  let next: TreeNode | null = startNode.findNext(startNode.id, endNode!);
  visited.push(startNode);

  while (!pathComplete) {
    if (next !== null) {
      if (next.id === endNode!.id) {
        visited.push(next);
        pathComplete = true;
        break;
      }
      if (ret.length === 0 || ret[ret.length - 1].id !== next.id) {
        ret.push(next);
        visited.push(next);
      }
      const parent = ret.length >= 2 ? ret[ret.length - 2].id : startNode.id;
      next = next.findNext(parent, endNode!);
    } else {
      ret.pop();
      if (ret.length === 0) {
        if (startNode.children.filter((c) => c[1] == false).length == 0) {
          visited.forEach((node) => node.setChildrenUnvisited());
          // console.log(`Path search fail from ${startId} to ${endId} in Astar`);
          throw Error("AStarFail");
        } else {
          next = startNode.findNext(startNode.id, endNode!);
        }
      } else {
        next = ret[ret.length - 1];
      }
    }
  }
  visited.forEach((node) => node.setChildrenUnvisited());
  // return [startNode!,...ret, endNode!];
  const path = new FloorPath(
    startId,
    endId,
    startNode.building,
    startNode.coords.floor,
    [startNode!,...ret, endNode!]
  );
  return path;
}

export async function getSubPaths(
  start: TreeNode,
  end: TreeNode,
  accessibility = false
) {
  const verticals = findVerticals(
    start.coords,
    end.coords,
    accessibility,
    start.building
  ) as any;
  if (!verticals) throw Error(`verticalNotFound`);
  let paths: FloorPath[] = [];
  await AStar(
    start.id,
    verticals[0][0].id + "_" + verticals[0][1],
    verticals[0][1],
  ).then(async path => {
    paths.push(path);
  });
  let i = 0;
  for (; i < verticals.length - 1; i++) {
    let from = verticals[i][0].id + "_" + verticals[i][2];

    let to = verticals[i + 1][0].id + "_" + verticals[i + 1][1];

    await AStar(from, to, verticals[i][2]).then(async path => {
      paths.push(path);
    });
  }
  return AStar(
    verticals[i][0].id + "_" + verticals[i][2],
    end.id,
    verticals[i][2]
  ).then(async path => {
    paths.push(path);
    return paths;
  });
}

export function calcDistance(start: TreeCoords, end: TreeCoords): number {
  return Math.abs(start.x - end.x) + Math.abs(start.y - end.y);
}

async function getPathsBetweenBuildings(start:TreeNode, end:TreeNode, accessibility:boolean){
  const ret: FloorPath[] = []
  let entry = await getAdjEntryOfBuilding(end.building)
  let path = await getPathInBuilding(start, entry, accessibility)
  ret.push(...path)
  entry = await getAdjEntryOfBuilding(start.building)
  path = await getPathInBuilding(entry,end, accessibility)
  ret.push(...path)
  return ret
}

function areBuildingsAdjacent(a:buildingCode, b:buildingCode){
  return (buildings[a].adjacent.find(adj => adj.building === b)) !== null
}