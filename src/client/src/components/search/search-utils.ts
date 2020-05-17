import { locations, buildings } from '../../data';

export const getBuilding = (title: string) => {
  for (let i = 0; i < locations.length; i++) {
    if (title === locations[i].title) {
      return locations[i];
    }
  }
};

export const isValidLocation = (id: string) => {
  const location = getLocationFromId(id);
  return locations.findIndex(l => l.title === location) > 0;
};
export const getLocationFromId = (id: string) => {
  return id.slice(0, id.indexOf(':')).toUpperCase();
};
export const getDeptFromId = (id: string) => {
  return id.slice(id.indexOf(':') + 1, id.indexOf('-') + 2 - id.indexOf(':')).toUpperCase();
};
export const getNumberFromId = (id: string) => {
  return id.slice(id.indexOf('-') + 1).toLowerCase();
};

export const getfloorNumber = (id: string) => {
  if (id.length <= 2) return 0;
  if (id.length === 3 && isNaN(id[id.length - 1] as any)) return 0;
  const number = id.slice(0, 1);
  if (number === 's' || number === 'S') {
    return -1;
  } else {
    return Number.parseInt(number);
  }
};

export const findRoom = (location: string, dept: string, number: string) => {
  const floorNumber = getfloorNumber(number);
  for (let i = 0; i < locations.length; i++) {
    for (let ii = 0; ii < locations[i].buildings.length; ii++) {
      const building = locations[i].buildings[ii];
      const range = buildings[building]!.floorRange;
      if (range.from <= floorNumber && range.to >= floorNumber) {
        const classrooms = buildings[building][floorNumber].classrooms;
        const id = location + ':' + dept + '-' + number;
        for (let i = 0; i < classrooms.length; i++) {
          if (id === classrooms[i].id) {
            classrooms[i].floor = floorNumber;
            classrooms[i].building = building;
            return classrooms[i];
          }
        }
      }
    }
  }
  return null;
};

export const findRoomById = (id: string) => {
  const building = getLocationFromId(id);
  const dept = getDeptFromId(id);
  const number = getNumberFromId(id);
  const ret = findRoom(building, dept, number);
  if (ret) {
    return ret;
  }
  throw Error;
};

