import { TreeCoords } from '../utils/utils';

export function coords(x: number, y: number, floor: number): TreeCoords {
  return { x: x, y: y, floor: floor };
}
