import { TreeCoords, buildingCode } from '../utils/utils';
import { calcDistance } from '../path-search/path-search';
import NodeHashTable from '../utils/hash-table';

export default class TreeNode {
  constructor(
    public readonly itemId: string,
    public readonly coords: TreeCoords,
    public readonly building: buildingCode,
    private readonly childrenIds: string[],
    private readonly nodeTable: NodeHashTable,
    public children: [TreeNode, boolean][] = [],
    public parentId?: string
  ) {}

  public findNext(parentId: string, end: TreeNode): TreeNode | null {
    if (this.children.length === 0) {
      this.childrenIds.forEach(id => {
        this.addChild(this.nodeTable.get(id)!);
      });
    }
    if (!this.parentId) {
      this.parentId = parentId;
    }
    let retIndex;
    let minDistance = Number.MAX_VALUE;

    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      if (this.children[i][0].id === end.id) {
        retIndex = i;
        break;
      }
      if (!child[1] && child[0].id !== this.parentId) {
        const tempDist = calcDistance(child[0].coords, end.coords);
        if (tempDist < minDistance) {
          retIndex = i;
          minDistance = tempDist;
        }
      }
    }
    if (retIndex === undefined) return null;
    this.children[retIndex][1] = true;
    return this.children[retIndex][0];
  }

  get id(): string {
    return this.itemId;
  }

  public setChildrenUnvisited(): void {
    this.parentId = undefined;
    this.children.forEach(c => (c[1] = false));
  }

  public addChild(child: TreeNode): void {
    this.children.push([child, false]);
  }

  public setChildren(children: TreeNode[]): void {
    children.forEach(c => {
      this.children.push([c, false]);
    });
  }
}
