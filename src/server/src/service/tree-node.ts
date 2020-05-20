import { TreeNodeModel } from '../db/schemas';
import TreeNode from '../model/tree-node';
import { buildingCode, buildings } from '../utils/utils';
import HashTable from '../utils/hash-table';

let loadedTree: TreeNode[] = [];

export async function getFloorTree(floor: Number) {
  let hashTable: HashTable;

  if (loadedTree.length > 0) {
    if (loadedTree[0].coords.floor == floor) {
      return loadedTree;
    } else {
      loadedTree = [];
    }
  }
  const treeNodes: TreeNode[] = [];
  return TreeNodeModel.find({ 'coords.floor': floor })
    .then((dbNodes: any[]) => {
      hashTable = new HashTable(dbNodes.length);
      dbNodes.forEach(n => {
        const newNode = new TreeNode(
          n.itemId,
          {
            floor: n.coords.floor,
            x: n.coords.x,
            y: n.coords.y
          },
          n.building
        );
        treeNodes.push(newNode);
        hashTable.insert(newNode);
      });
      
      for (let i = 0; i < treeNodes.length; i++) {
        dbNodes[i].children.forEach((childId: string) => {
          treeNodes[i].addChild(hashTable.get(childId)!);
        });
      }
      loadedTree = treeNodes;
      // console.log(hashTable.stats)
      return treeNodes;
    });
}

export async function findNodeById(id: string) {
  return TreeNodeModel.findOne({ itemId: id }, '')
    .then((n: any) => {
      return new TreeNode(
        n.itemId,
        {
          floor: n.coords.floor,
          x: n.coords.x,
          y: n.coords.y
        },
        n.building
      );
    })
    .catch((e: any) => {
      e.id = id;
      throw e;
    });
}

export async function getAdjEntryOfBuilding(from: buildingCode) {
  return findNodeById(`entry${from}`);
}

export async function getTreeNodeCount() {
  return TreeNodeModel.count({});
}
