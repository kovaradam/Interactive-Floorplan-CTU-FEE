import buildings from '../data/buildings';

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

export function getFloorString(n: number) {
  switch (n) {
    case -1:
      return ['suterén', 'basement'];
    case 0:
      return ['přízemí', 'ground floor'];
    case 1:
      return ['1. patro', '1st floor'];
    case 2:
      return ['2. patro', '2nd floor'];
    case 3:
      return ['3. patro', '3rd floor'];
    default:
      return [n + '. patro', n + 'th floor'];
  }
}

