import { PathResult, Path } from '../../utils/interfaces';

function getPathFloor(pathResult: PathResult) {
  return pathResult.floor < 0 ? -Math.floor(-pathResult.floor) : Math.floor(pathResult.floor);
}

export function buildPaths(pathResults: PathResult[]) {
  const ret: Path[] = [];
  pathResults.forEach(res => {
    const floorNumber = getPathFloor(res);
    ret.push({ floor: floorNumber, building: res.building, points: res.points });
  });
  return ret;
}
