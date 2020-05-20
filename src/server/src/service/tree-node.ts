import { TreeNodeModel } from '../db/schemas';
import TreeNode from '../model/tree-node';
import { buildingCode, buildings } from '../utils/utils';
import HashTable from '../utils/hash-map';

let LOADED_TREE: TreeNode[] = [];

export async function getFloorTree(floor: Number) {
  let hashTable: HashTable;

  if (LOADED_TREE.length > 0) {
    if (LOADED_TREE[0].coords.floor == floor) {
      // console.log("loaded tree");
      return LOADED_TREE;
    } else {
      // console.log("loading tree");
      LOADED_TREE.splice(0, LOADED_TREE.length);
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
      LOADED_TREE = treeNodes;
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
