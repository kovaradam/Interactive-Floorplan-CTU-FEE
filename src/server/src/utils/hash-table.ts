import TreeNode from '../model/tree-node';

export default class NodeHashTable {
  private data: (TreeNode | null)[] = [];

  constructor(size: number, private collisionCountOnInsert = 0, private collisionCountOnGet = 0) {
    size *= 3;
    for (let i = 0; i < size; i++) {
      this.data.push(null);
    }
  }

  public insert = (node: TreeNode): void => {
    let idx = this.hash(node.itemId);
    const startIdx = idx;
    while (this.data[idx] !== null) {
      this.collisionCountOnInsert++;
      idx = (idx + 1) % this.data.length;
      if (idx === startIdx) throw Error(`hashMapInsertFail`);
    }
    this.data[idx] = node;
  };

  public get = (id: string): TreeNode | null => {
    let idx = this.hash(id);
    let result = this.data[idx];
    if (result === null) throw Error(`hashMapGetElemFail`);
    const startIdx = idx;
    while (result!.itemId !== id) {
      this.collisionCountOnGet++;
      idx = (idx + 1) % this.size;
      result = this.data[idx];
      if (idx === startIdx) throw Error('hashMapItemNotFound');
    }
    return result;
  };

  private hash(id: string): number {
    let hash = 0;
    if (id.length == 0) return hash;
    for (let i = 0; i < id.length; i++) {
      hash = (hash << 5) - hash;
      hash = hash + id.charCodeAt(i);
      hash = hash & hash;
    }
    return Math.abs(hash % this.size);
  }

  get size(): number {
    return this.data.length;
  }

  get stats(): string {
    return `Hashmap - size: ${this.size} collisions on get: ${this.collisionCountOnGet} collisions on insert: ${this.collisionCountOnInsert}`;
  }
}
