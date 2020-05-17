export type TreeCoords = { floor: number; x: number; y: number };

export enum Type {
  SERVICES,
  FOOD,
  HEALTH,
  STUDY,
  WC,
  ACCESSIBILITY,
  STAIR,
  ELEVATOR,
  PATER
}

export type VerticalType = Type.STAIR | Type.ELEVATOR | Type.PATER

export const floorNums = {
  T2: [-1.1,-1.2, 0, 1, 2, 3, 4, 5.1, 6.1, 7.1, 8.1, 5.2, 6.2, 7.2, 8.2, 5.3,5.4,5.5],
  H: [0,1]
};

export type buildingCode = 'T2' | 'H' 

export const buildings = {
  T2: {
    adjacent: [
      {building: 'H', entry: 'entryH'}
    ]
  },
  H: {
    adjacent: [
      {building: 'T2', entry: 'entryT2'}
    ]
  },
}