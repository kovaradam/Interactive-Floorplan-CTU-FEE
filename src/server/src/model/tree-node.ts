import { TreeCoords, buildingCode } from "../utils/utils";
import { calcDistance } from "../path-search/path-search";

export default class TreeNode {
  constructor(
    public readonly itemId: string,
    public readonly coords: TreeCoords,
    public readonly building: buildingCode,
    public children: [TreeNode, boolean][] = [],
    public parentId?: string
  ) {}

  public findNext(parentId: string, end: TreeNode): TreeNode | null {
    
    if(!this.parentId) {
      this.parentId = parentId;
    }
    let retIndex;
    let minDistance = Number.MAX_VALUE;
    
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      if(this.children[i][0].id === end.id){
        retIndex = i;
        break;
      }
      if (!child[1] && child[0].id !== this.parentId) {
        const tempDist = calcDistance(
          child[0].coords,
          end.coords
        );
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

  public setChildrenUnvisited(): void {
    this.parentId = undefined;
    this.children.forEach(c => c[1] = false);
  }

  get id() {
    return this.itemId;
  }

  public addChild(child: TreeNode) {
    this.children.push([child, false])
  }

  public setChildren(children: TreeNode[]) {
    children.forEach(c => {
      this.children.push([c, false]);
    });
  }
}
