"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FloorPath {
    constructor(startId, endId, building, floor, nodes, points = '') {
        this.startId = startId;
        this.endId = endId;
        this.building = building;
        this.floor = floor;
        this.points = points;
        nodes.forEach(n => {
            this.points += `${n.coords.x},${n.coords.y} `;
        });
    }
}
exports.default = FloorPath;
//# sourceMappingURL=floor-path.js.map