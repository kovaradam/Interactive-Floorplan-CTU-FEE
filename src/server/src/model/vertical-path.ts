import { TreeCoords } from "../utils/utils";

export default class VerticalPath {
  constructor(
    public readonly id: string,
    public readonly building: string,
    public readonly coords: TreeCoords,
    public readonly type: number,
    public readonly floors: number[],
  ) {}
}
