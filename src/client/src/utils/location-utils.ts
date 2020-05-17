import { buildings } from '../data';

export function deptInBuilding(deptId: string, building: string) {
  return buildings[building].depts.findIndex(d => d.id === deptId) !== -1;
}

export function getBuildingOfDept(deptId: string) {
  for (const building in buildings) {
    if (deptInBuilding(deptId, building)) return building;
  }
  throw Error;
}

export function getLocationOfBuilding(building: string) {
  return buildings[building].location;
}
