import { findCheapestVertical, findVerticals } from '../../path-search/vertical-search';
import { coords } from '../test-utils';

test('cheapest vertical from A4 to 3 should return stairA4', () => {
  expect(findCheapestVertical({ x: 0, y: 0, floor: 0 }, coords(0, 0, 3), false, 'T2')).toMatchObject({
    itemId: 'stairA4'
  });
});

test('cheapest vertical from C4 to 3 should return stairC4', () => {
  expect(findCheapestVertical({ x: 3.8, y: 5, floor: 0 }, coords(3.8, 4, 8.1), false, 'T2')).toMatchObject({
    itemId: 'stairC4'
  });
});

test('cheapest vertical from A2 to 3 should return stairA2', () => {
  expect(findCheapestVertical({ x: 13, y: 0, floor: 0 }, coords(13, 0, 3), false, 'T2')).toMatchObject({
    itemId: 'stairA2'
  });
});

test('cheapest vertical from A2 to 6.2 should return pater1', () => {
  expect(findCheapestVertical({ x: 13, y: 0, floor: 0 }, coords(11, 7, 6.2), false, 'T2')).toMatchObject({
    itemId: 'pater1'
  });
});

test('cheapest vertical from B3[6.1] to 8.1 should return stairB3', () => {
  expect(findCheapestVertical({ x: 4, y: 8, floor: 6.1 }, coords(4, 8, 8.1), false, 'T2')).toMatchObject({
    itemId: 'stairB3'
  });
});

test('cheapest vertical from B3[6.1] to 6.2 should return null', () => {
  expect(findCheapestVertical({ x: 13, y: 0, floor: 6.1 }, coords(13, 0, 8.2), false, 'T2')).toBe(null);
});

test('[temp] accessible should return null', () => {
  expect(findCheapestVertical({ x: 13, y: 0, floor: 0 }, coords(13, 0, 3), true, 'T2')).toBe(null);
});

test('findVerticals from B3[6.1] to B2[6.2] should return two verticals', () => {
  expect(findVerticals({ x: 4, y: 8, floor: 6.1 }, coords(10, 8, 6.2), false, 'T2')?.length).toBe(2);
});

test('findVerticals from B3[3] to B2[6.2] should return one vertical', () => {
  expect(findVerticals({ x: 4, y: 8, floor: 3 }, coords(10, 8, 6.2), false, 'T2')?.length).toBe(1);
});
