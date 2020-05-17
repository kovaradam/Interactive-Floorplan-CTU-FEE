import TreeNode from './tree-node';

export default class FloorPath {
  constructor(
    private readonly startId: string,
    private readonly endId: string,
    private readonly building: string,
    private readonly floor:number,
    nodes: TreeNode[],
    private points = ''
  ) {
      nodes.forEach(n => {
        this.points += `${n.coords.x},${n.coords.y} `;
      });
  }
}
