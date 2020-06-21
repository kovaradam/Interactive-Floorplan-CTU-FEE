import { Type } from '../utils/misc-utils';

export default {
  T2: [
    { id: 'stairA2', from: -1, to: 5, accessibility: false, type: Type.STAIR, x: 138, y: 325, height: 25, icon: 'stairA' },
    { id: 'stairA3', from: -1, to: 5, accessibility: false, type: Type.STAIR, x: 364, y: 325, height: 25, icon: 'stairA' },
    { id: 'stairA4', from: -1, to: 5, accessibility: false, type: Type.STAIR, x: 660, y: 325, height: 25, icon: 'stairA' },
    { id: 'stairB2', from: -1, to: 8, accessibility: false, type: Type.STAIR, x: 233, y: 90, height: 15, width: 25, icon: 'stairB' },
    { id: 'stairB3', from: -1, to: 8, accessibility: false, type: Type.STAIR, x: 495, y: 90, height: 15, width: 25, icon: 'stairB' },
    { id: 'stairC3', from: -1, to: 8, accessibility: false, type: Type.STAIR, x: 267, y: 264, height: 30, width: 27, icon: 'stairC' },
    { id: 'stairC4', from: -1, to: 8, accessibility: false, type: Type.STAIR, x: 528, y: 264, height: 30, width: 27, icon: 'stairC' },
    { id: 'stair_cloak0', from: -1, to: 0, accessibility: false, type: Type.STAIR, x: 530, y: 358, height: 20, icon: 'stairL', transform: 'scale(-1, 1)' },
    { id: 'stair_cloak1', from: -1, to: 0, accessibility: false, type: Type.STAIR, x: 500, y: 358, height: 20, icon: 'stairL',},
    { id: 'pater0', from: -1, to: 8, accessibility: false, type: Type.PATER, x: 500, y: 264, height: 20, width: 17 },
    { id: 'pater1', from: -1, to: 8, accessibility: false, type: Type.PATER, x: 240, y: 264, height: 20, width: 17 },
    { id: 'elevA4', from: -1, to: 5, accessibility: true, type: Type.ELEVATOR, x: 627, y: 328, height: 20 },
    { id: 'elevB2', from: -1, to: 8, accessibility: true, type: Type.ELEVATOR, x: 234, y: 110, height: 20 },
    { id: 'elevB3', from: -1, to: 8, accessibility: true, type: Type.ELEVATOR, x: 495, y: 110, height: 20 },
    { id: 'elevA2', from: -1, to: 5, accessibility: true, type: Type.ELEVATOR, x: 105, y: 328, height: 20 },
    { id: 'elevA3', from: -1, to: 5, accessibility: true, type: Type.ELEVATOR, x: 400, y: 328, height: 20 }
  ],
  KN: [],
  H: [
    { id: 'stairE1', from: 0, to: 1, accessibility: false, type: Type.STAIR, x: 205, y: 115, height: 25, icon: 'stairA', transform:'rotate(45deg)' },
    { id: 'stairF1', from: 0, to: 1, accessibility: false, type: Type.STAIR, x: 205, y: 400, height: 25, icon: 'stairL' },
    { id: 'stairG1', from: 0, to: 1, accessibility: false, type: Type.STAIR, x: 615, y: 400, height: 25, icon: 'stairC' },
  ]
};
