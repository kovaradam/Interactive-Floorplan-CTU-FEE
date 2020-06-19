import { PathResult, Path } from '../../utils/interfaces';

function getPathFloor(pathResult: PathResult) {
  return pathResult.floor < 0 ? -Math.floor(-pathResult.floor) : Math.floor(pathResult.floor);
}

export function buildPaths(pathResults: PathResult[], endFloor: number) {
  const ret: Path[] = [];
  for (let i = 0; i < pathResults.length; i++) {
    const res = pathResults[i]   
    const floorNumber = getPathFloor(res);
    const isEndPath = i === pathResults.length - 1
    ret.push({ floor: floorNumber, building: res.building, points: res.points, isEndPath: isEndPath });
}
  return ret;
}
