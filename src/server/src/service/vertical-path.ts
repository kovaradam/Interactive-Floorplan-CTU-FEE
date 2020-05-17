import VerticalPath from "../model/vertical-path";
import { VerticalPathModel } from "../db/schemas";

export async function getVerticalPaths() {
    const verticals: VerticalPath[] = [];
    return VerticalPathModel.find().then((res: any[]) => {
        res.forEach(v => {
            let coords = {floor: v._coords.floor, x: v._coords.x, y: v._coords.y}
            verticals.push(new VerticalPath(v._itemId, v._building, coords, v._type, v._floors))
        })
        return verticals;
    })
}

export async function getVerticalPathsOfBuilding(building: string) {
    const verticals: VerticalPath[] = [];
    return VerticalPathModel.find({"_building": building}).then((res: any[]) => {
        res.forEach(v => {
            let coords = {floor: v._coords.floor, x: v._coords.x, y: v._coords.y}
            verticals.push(new VerticalPath(v._itemId, v._building, coords, v._type, v._floors))
        })
        return verticals;
    })
}