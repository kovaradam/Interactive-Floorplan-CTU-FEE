"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vertical_utils_1 = require("../../path-search/vertical-utils");
const test_utils_1 = require("../test-utils");
test("cheapest vertical from A4 to 3 should return stairA4", () => {
    expect(vertical_utils_1.findCheapestVertical({ x: 0, y: 0, floor: 0 }, test_utils_1.coords(0, 0, 3))).toMatchObject({
        _itemId: "stairA4"
    });
});
test("cheapest vertical from C4 to 3 should return stairC4", () => {
    expect(vertical_utils_1.findCheapestVertical({ x: 3.8, y: 5, floor: 0 }, test_utils_1.coords(3.8, 4, 8.1))).toMatchObject({
        _itemId: "stairC4"
    });
});
test("cheapest vertical from A2 to 3 should return stairA2", () => {
    expect(vertical_utils_1.findCheapestVertical({ x: 13, y: 0, floor: 0 }, test_utils_1.coords(13, 0, 3))).toMatchObject({
        _itemId: "stairA2"
    });
});
test("cheapest vertical from A2 to 6.2 should return pater1", () => {
    expect(vertical_utils_1.findCheapestVertical({ x: 13, y: 0, floor: 0 }, test_utils_1.coords(11, 7, 6.2))).toMatchObject({
        _itemId: "pater1"
    });
});
test("cheapest vertical from B3[6.1] to 8.1 should return stairB3", () => {
    expect(vertical_utils_1.findCheapestVertical({ x: 4, y: 8, floor: 6.1 }, test_utils_1.coords(4, 8, 8.1))).toMatchObject({ _itemId: "stairB3" });
});
test("cheapest vertical from B3[6.1] to 6.2 should return null", () => {
    expect(vertical_utils_1.findCheapestVertical({ x: 13, y: 0, floor: 6.1 }, test_utils_1.coords(13, 0, 8.2))).toBe(null);
});
test("[temp] accessible should return null", () => {
    expect(vertical_utils_1.findCheapestVertical({ x: 13, y: 0, floor: 0 }, test_utils_1.coords(13, 0, 3), true)).toBe(null);
});
test("findVerticals from B3[6.1] to B2[6.2] should return two verticals", () => {
    var _a;
    expect((_a = vertical_utils_1.findVerticals({ x: 4, y: 8, floor: 6.1 }, test_utils_1.coords(10, 8, 6.2))) === null || _a === void 0 ? void 0 : _a.length).toBe(2);
});
test("findVerticals from B3[3] to B2[6.2] should return one vertical", () => {
    var _a;
    expect((_a = vertical_utils_1.findVerticals({ x: 4, y: 8, floor: 3 }, test_utils_1.coords(10, 8, 6.2))) === null || _a === void 0 ? void 0 : _a.length).toBe(1);
});
//# sourceMappingURL=verticals.spec.js.map