import { TreeNodeModel, VerticalPathModel } from './schemas';
import { treeNodes } from './data/tree-nodes-new';
import { verticalPaths } from './data/vertical-paths';
import connection from '../app';

function dropCollection(collection: string) {
  connection.dropCollection(collection, function (
    err: any
    //result: any
  ) {
    console.log(`${collection} dropped`);
  });
}

export async function createTreeNodes() {
  const dbNodeCount = await TreeNodeModel.countDocuments({});
  let localNodeCount = 0;
  for (const building in treeNodes) {
    localNodeCount += treeNodes[building].length;
  }
  if (dbNodeCount < localNodeCount) {
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
  }
  for (const building in treeNodes) {
    delete treeNodes[building];
  }
}

export function createVerticals() {
  dropCollection('verticalpaths');
  for (const building in treeNodes) {
    verticalPaths[building].forEach(d => {
      const instance = new VerticalPathModel({
        _itemId: d[0],
        _building: d[1],
        _coords: { floor: d[2][0], x: d[2][1], y: d[2][2] },
        _type: d[3],
        _floors: d[4]
      });
      instance.save();
    });
  }
}
