
import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const treeNodeSchema = new Schema({
    itemId: {type: String, index: true},
    coords: {floor: {type: Number, index: true}, x: Number, y: Number},
    children: [String],
    building:  {type: String, index: true}
})

export const TreeNodeModel = mongoose.model('TreeNode', treeNodeSchema)
