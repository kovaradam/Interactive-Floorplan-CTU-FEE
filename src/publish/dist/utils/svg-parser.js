"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const svg_1 = __importDefault(require("./svg"));
var fs = require('fs');
class SvgObject {
    constructor(src, type) {
        this.src = src;
        this.type = type;
        this.getProp = (prop) => {
            const xIndex = this.src.indexOf(` ${prop}=`);
            if (xIndex === -1)
                return "";
            const offset = prop.length + 3;
            const endXindex = xIndex + offset + this.src.slice(xIndex + offset).indexOf('"');
            return this.src.slice(xIndex + offset, endXindex);
        };
        this.print = () => {
            if (this.type === 'rect') {
                return `{ x: "${this.getProp('x')}", y: "${this.getProp('y')}", height: "${this.getProp('height')}", id: "${this.getProp('id')}", transform: "${this.getProp('transform')}"},\n`;
            }
            else {
                return `{ x: 0, y: 0, id: "${this.getProp('id')}", d: "${this.getProp('d')}", type: Type.TUTORIAL},\n`;
            }
        };
    }
}
function getObjectsFromSvg(src, prop) {
    let ret = "";
    while (src.length > 0) {
        const rectIdx = src.indexOf('<' + prop);
        if (rectIdx === -1)
            break;
        const rectEndIdx = src.indexOf('/>');
        const rect = new SvgObject(src.slice(rectIdx + 5, rectEndIdx), prop);
        ret = ret.concat(rect.print());
        src = src.slice(rectEndIdx + 2);
    }
    return ret;
}
// const contents = fs.readFileSync('./svg-path.txt', 'utf8');
console.log(getObjectsFromSvg(svg_1.default, 'path'));
console.log(getObjectsFromSvg(svg_1.default, 'rect'));
//# sourceMappingURL=svg-parser.js.map