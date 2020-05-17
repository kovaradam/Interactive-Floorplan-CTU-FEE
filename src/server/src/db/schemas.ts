
import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const treeNodeSchema = new Schema({
    itemId: {type: String, index: true},
    coords: {floor: {type: Number, index: true}, x: Number, y: Number},
    children: [String],
    building:  {type: String, index: true}
})

export const verticalPathSchema = new Schema({
    id: String,
    building: String,
    coords: {floor: Number, x: Number, y: Number},
    type: Number,
    floors: []
})

export const TreeNodeModel = mongoose.model('TreeNode', treeNodeSchema)
export const VerticalPathModel = mongoose.model('VerticalPath', verticalPathSchema)
