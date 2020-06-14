import { TreeNodeModel } from './schemas';
import { treeNodes } from './data/tree-nodes';
import connection from '../app';

function dropCollection(collection: string): void {
  connection.dropCollection(collection, () => {
    console.log(`${collection} dropped`);
  });
}

export async function createTreeNodes(): Promise<any> {
  const dbNodeCount = await TreeNodeModel.countDocuments({});
  let localNodeCount = 0;
  for (const building in treeNodes) {
    localNodeCount += treeNodes[building].length;
  }
  if (dbNodeCount !== localNodeCount) {
    dropCollection('treenodes');
    for (const building in treeNodes) {
      treeNodes[building].forEach((d: any) => {
        const instance = new TreeNodeModel({
          itemId: d[0],
          coords: { floor: d[1][0], x: d[1][1], y: d[1][2] },
          children: d[2],
          building: building
        });
        instance.save();
      });
    }
    console.log('treenodes created');
  }
  for (const building in treeNodes) {
    delete treeNodes[building];
  }
}
