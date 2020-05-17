import TreeNode from "../model/tree-node";

export default class MyHashMap {
  private data: (TreeNode | null)[] = [];
  public collisionCount = 0;
  constructor(size: number) {
    size *= 3
    for (let i = 0; i < size; i++) {
      this.data.push(null);
    }
  }

  public insert = (node: TreeNode) => {
    let idx = this.hash(node.itemId);
    const startIdx = idx;
    while (this.data[idx] !== null) {
      idx = (idx + 1) % this.data.length;
      if (idx === startIdx) throw Error(`hashMapInsertFail`);
    }
    this.data[idx] = node;
  };
  
  public get = (id: string) => {
    let idx = this.hash(id);
    let result = this.data[idx];
    if (result === null) throw Error(`hashMapGetElemFail`);
    const startIdx = idx;
    while (result!.itemId !== id) {
      this.collisionCount++;
      idx = (idx + 1) % this.size;
      result = this.data[idx];
      if (idx === startIdx) throw Error('hashMapItemNotFound');
    }
    return result;
  };

  private hash(id: string) {
    var hash = 0;
    if (id.length == 0) return hash;
    for (var i = 0; i < id.length; i++) {
        hash = (hash<<5) - hash;
        hash = hash + id.charCodeAt(i);
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash % this.size);
  }

  get size() {
    return this.data.length
  }

  get stats(){
    return `Hashmap - size: ${this.size} collisions: ${this.collisionCount}`
  }
}