import { TreeNodeModel } from '../db/schemas';
import TreeNode from '../model/tree-node';
import { buildingCode, TreeCoords } from '../utils/utils';
import HashTable from '../utils/hash-table';

let loadedTree: TreeNode[] = [];

type dbNode = { itemId: string; coords: TreeCoords; building: buildingCode; children: string[] };

function createTreeNode(n: dbNode, table: any): TreeNode {
  return new TreeNode(
    n.itemId,
    {
      floor: n.coords.floor,
      x: n.coords.x,
      y: n.coords.y
    },
    n.building,
    n.children,
    table
  );
}

export async function getFloorTree(floor: number): Promise<TreeNode[]> {
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
    .lean()
    .then((dbNodes: dbNode[]) => {
      hashTable = new HashTable(dbNodes.length);
      dbNodes.forEach(n => {
        const newNode = createTreeNode(n, hashTable);
        treeNodes.push(newNode);
        hashTable.insert(newNode);
      });

      loadedTree = treeNodes;
      return treeNodes;
    });
}

export async function findNodeById(id: string): Promise<TreeNode> {
  return TreeNodeModel.findOne({ itemId: id }, '')
    .lean()
    .then((n: dbNode) => {
      return createTreeNode(n as dbNode, null);
    })
    .catch((e: any) => {
      e.id = id;
      throw e;
    });
}

export async function getAdjEntryOfBuilding(from: buildingCode): Promise<TreeNode> {
  return findNodeById(`entry${from}`);
}

export async function getTreeNodeCount(): Promise<number> {
  return TreeNodeModel.count({});
}
