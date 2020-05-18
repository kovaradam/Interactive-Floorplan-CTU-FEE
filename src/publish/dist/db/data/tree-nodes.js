"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// private readonly _itemId: string,
// private readonly _coords: TreeCoords,
// private _children: [TreeNode, boolean][] = [],
// private _parentId?: string
exports.treeNodes = {
    T2: [
        ['cloakroom', [-1, 4, 4], [/*'node4_5_-1','node4.5_4_-1',*/ 'node3.5_4_-1']],
        ['stair_cloak0_-1', [-1, 3.5, 3.5], ['node3.5_4_-1']],
        ['stair_cloak1_-1', [-1, 4.5, 3.5], ['node4.5_4_-1']],
        ['node3.5_4_-1', [-1, 3.5, 4], ['cloakroom', 'stair_cloak0_-1', 'node4_5_-1']],
        ['node4.5_4_-1', [-1, 4.5, 4], [/*'cloakroom',*/ 'stair_cloak1_-1', 'node4_5_-1']],
        ['photo-studio', [-1, 6.5, 1.5], ['node7_1_-1']],
        ['stairA3_-1', [-1, 7.5, 4], ['node7_4_-1']],
        ['stairA4_-1', [-1, 0.8, 4.2], ['node1_4.5_-1']],
        ['stairC4_-1', [-1, 3.8, 5.5], ['node4_5_-1']],
        ['stairC3_-1', [-1, 9.8, 5.5], ['node10_5_-1']],
        ['stairA2_-1', [-1, 12.5, 4], ['node13_4_-1', 'node13_5_-1']],
        ['stairB3_-1', [-1, 4.5, 10], ['node4_10_-1']],
        ['stairB2_-1', [-1, 10.5, 10], ['node10_10_-1']],
        ['pater0_-1', [-1, 4.5, 5.5], ['node4.5_5_-1']],
        ['pater1_-1', [-1, 10.5, 5.5], ['node10.5_5_-1']],
        ['T2:C4-s150', [-1, 3, 5.2], ['node3_4.5_-1']],
        ['T2:C4-s151b', [-1, 2.1, 5.2], ['node2_4.5_-1']],
        ['T2:C4-s152', [-1, 1.2, 5.2], ['node1_4.5_-1']],
        ['T2:B3-s161', [-1, 3.5, 9], ['node4_9_-1']],
        ['T2:C3-s143', [-1, 5.2, 7.8], ['node8_4.5_-1']],
        ['T2:B2-s141a', [-1, 9.6, 6.5], ['node10_6.5_-1']],
        ['T2:B2-s141b', [-1, 9.6, 7.1], ['node10_7.1_-1']],
        ['T2:B2-s141d', [-1, 9.6, 8.2], ['node10_8_-1']],
        ['T2:B2-s141e', [-1, 9.5, 9], ['node10_9_-1']],
        ['T2:B2-s141k', [-1, 10.5, 8], ['node10_6.5_-1']],
        ['T2:B2-s141j', [-1, 10.5, 6.5], ['node10_8_-1']],
        ['node4_5_-1', [-1, 4.1, 4.8], ['node4.5_4_-1', 'stairC4_-1', 'node3.5_4_-1', 'node3_4.5_-1', 'node4_9_-1', 'node7_4.5_-1', 'node4.5_5_-1']],
        ['node4.5_5_-1', [-1, 4.5, 5], ['pater0_-1', 'node4_5_-1']],
        ['node3_4.5_-1', [-1, 3, 4.5], ['node4_5_-1', 'T2:C4-s150', 'node2_4.5_-1']],
        ['node2_4.5_-1', [-1, 2.1, 4.5], ['node3_4.5_-1', 'T2:C4-s151b', 'node1_4.5_-1']],
        ['node1_4.5_-1', [-1, 1.1, 4.5], ['node2_4.5_-1', 'stairA4_-1', 'T2:C4-s152']],
        ['node4_9_-1', [-1, 4.1, 9], ['node4_5_-1', 'node4_10_-1', 'T2:B3-s161']],
        ['node4_10_-1', [-1, 4.1, 9], ['stairB3_-1', 'node4_9_-1']],
        ['node7_4.5_-1', [-1, 7, 4.5], ['node4_5_-1', 'node7_4_-1', 'node8_4.5_-1']],
        ['node7_4_-1', [-1, 7, 4.1], ['stairA3_-1', 'node7_4.5_-1', 'node7_1_-1']],
        ['node7_1_-1', [-1, 7, 1.3], ['photo-studio', 'node7_4_-1']],
        ['node8_4.5_-1', [-1, 7.9, 4.5], ['T2:C3-s143', 'node7_4.5_-1', 'node10_5_-1']],
        ['node10_5_-1', [-1, 10, 4.5], ['stairC3_-1', 'node8_4.5_-1', 'node10_6.5_-1', 'node13_5_-1', 'node10.5_5_-1']],
        ['node10.5_5_-1', [-1, 10.5, 5], ['pater1_-1', 'node10_5_-1']],
        ['node13_5_-1', [-1, 13, 4.5], ['node10_5_-1', 'node13_4_-1']],
        ['node13_4_-1', [-1, 13, 4], ['node13_5_-1', 'stairA2_-1']],
        ['node10_6.5_-1', [-1, 10.1, 6.5], ['node10_5_-1', 'T2:B2-s141a', 'T2:B2-s141k', 'node10_7.1_-1']],
        ['node10_7.1_-1', [-1, 10.1, 7.1], ['T2:B2-s141b', 'node10_6.5_-1', 'node10_8_-1']],
        ['node10_8_-1', [-1, 10, 8.1], ['T2:B2-s141j', 'T2:B2-s141d', 'node10_7.1_-1', 'node10_9_-1']],
        ['node10_9_-1', [-1, 10, 9], ['T2:B2-s141e', 'node10_8_-1', 'node10_10_-1']],
        ['node10_10_-1', [-1, 10, 10], ['stairB2_-1', 'node10_9_-1']],
        ['stair_cloak0_0', [0, 3.5, 3.5], ['node4_3.2_0']],
        ['stair_cloak1_0', [0, 4.5, 3.5], ['node4_3.2_0']],
        ['pater0_0', [0, 4.5, 5.5], ['node4.5_5_0']],
        ['pater1_0', [0, 10.5, 5.5], ['node10.5_5_0']],
        ['T2:A4-13', [0, 1.6, 3], ['node1.1_3_0']],
        ['T2:C4-80', [0, 1.8, 5], ['node1.8_4.5_0']],
        ['T2:C4-78', [0, 3, 5], ['node3_4.5_0']],
        ['T2:C3-54', [0, 6, 5], ['node6_4.5_0']],
        ['defibrillator', [0, 4.3, 3], ['node4_3_0']],
        ['vvzs', [0, 1.1, 2], ['node1.1_2.5_0']],
        ['podatelna', [0, 1.5, 2.8], ['node1.1_2.8_0']],
        ['node1.1_2.8_0', [0, 1.1, 2.8], ['podatelna', 'node1.1_3_0', 'node1.1_2.5_0']],
        ['node1.1_2.5_0', [0, 1.1, 2.5], ['node1.1_2.8_0', 'vvzs']],
        ['node1.1_3_0', [0, 1.1, 3], ['T2:A4-13', 'node1.1_2.8_0', 'node1_4.5_0']],
        ['node1_4.5_0', [0, 1.1, 4.5], ['stairA4_0', 'node1.1_3_0', 'node1.8_4.5_0']],
        ['stairA4_0', [0, 0.8, 4.2], ['node1_4.5_0']],
        ['node1.8_4.5_0', [0, 1.8, 4.5], ['node1_4.5_0', 'node3_4.5_0', 'T2:C4-80']],
        ['node3_4.5_0', [0, 3, 4.5], ['node1.8_4.5_0', 'node4_4.5_0', 'T2:C4-78']],
        ['node4_4.5_0', [0, 4, 4.5], ['node6_4.5_0', 'node3_4.5_0', 'node4_3.2_0', 'node3.7_5_0', 'node4_6.5_0', 'node4.5_5_0']],
        ['node4.5_5_0', [0, 4.5, 5], ['pater0_0', 'node4_4.5_0']],
        ['node4_3.2_0', [0, 4, 3.2], ['node4_3_0', 'stair_cloak0_0', 'stair_cloak1_0', 'node4_4.5_0']],
        ['node4_3_0', [0, 4, 3], ['entry', 'node4_3.2_0', 'defibrillator']],
        ['entry', [0, 4, 2.8], ['node4_3_0']],
        ['node3.7_5_0', [0, 3.7, 5], ['stairC4_0', 'node4_4.5_0']],
        ['stairC4_0', [0, 3.7, 5.5], ['node3.7_5_0']],
        ['node4_6.5_0', [0, 4, 6.5], ['T2:B3-59', 'T2:B3-76', 'node4_4.5_0', 'node4_7.5_0']],
        ['node4_7.5_0', [0, 4, 7.5], ['T2:B3-61', 'node4_6.5_0', 'node4_10_0']],
        ['T2:B3-76', [0, 3.5, 6.5], ['node4_6.5_0']],
        ['T2:B3-59', [0, 4.5, 6.5], ['node4_6.5_0']],
        ['T2:B3-61', [0, 4.5, 7.5], ['node4_7.5_0']],
        ['node4_10_0', [0, 4, 10], ['node4_7.5_0', 'stairB3_0']],
        ['stairB3_0', [0, 4.5, 10], ['node4_10_0']],
        ['node6_4.5_0', [0, 6, 4.5], ['T2:C3-54', 'node4_4.5_0', 'node7_4.5_0',]],
        ['node7_4.5_0', [0, 7, 4.5], ['poradcentrum', 'node7_4.1_0', 'node6_4.5_0', 'node7.8_4.5_0',]],
        ['node7_4.1_0', [0, 7, 4.1], ['node7_4.5_0', 'stairA3_0', 'study-department']],
        ['stairA3_0', [0, 7.5, 4.1], ['node7_4.1_0']],
        ['study-department', [0, 7, 3], ['node7_4.1_0']],
        ['poradcentrum', [0, 7, 5], ['node7_4.5_0']],
        ['node7.8_4.5_0', [0, 7.8, 4.5], ['node7_4.5_0', 'T2:C3-52', 'node8.8_4.5_0']],
        ['T2:C3-52', [0, 7.8, 5], ['node7.8_4.5_0']],
        ['node8.8_4.5_0', [0, 8.8, 4.5], ['node10_4.5_0', 'T2:C3-51', 'node7.8_4.5_0']],
        ['T2:C3-51', [0, 8.8, 5], ['node8.8_4.5_0']],
        ['node10_4.5_0', [0, 10, 4.5], ['node11.2_4.5_0', 'fel-cafe', 'node9.8_5_0', 'node10.1_6.5_0', 'node8.8_4.5_0', 'node10.5_5_0']],
        ['node10.5_5_0', [0, 10.5, 5], ['pater1_0', 'node10_4.5_0']],
        ['node9.8_5_0', [0, 9.8, 5], ['stairC3_0', 'node10_4.5_0']],
        ['stairC3_0', [0, 9.8, 5.5], ['node9.8_5_0']],
        ['fel-cafe', [0, 10.1, 4], ['node10_4.5_0']],
        ['node10.1_6.5_0', [0, 10.1, 6.5], ['node10_4.5_0', 'T2:B2-48', 'node10.1_10_0']],
        ['T2:B2-48', [0, 9.7, 6.5], ['node10.1_6.5_0']],
        ['node10.1_10_0', [0, 10.1, 10], ['node10.1_6.5_0', 'stairB2_0', 'node10.1_10.5_0']],
        ['stairB2_0', [0, 10.5, 10], ['node10.1_10_0']],
        ['node10.1_10.5_0', [0, 10.1, 10.5], ['node10.1_10_0', 'T2:B2-39a', 'T2:B2-39e', 'node10.1_11_0']],
        ['T2:B2-39a', [0, 10.6, 10.5], ['node10.1_10.5_0']],
        ['T2:B2-39e', [0, 9.6, 10.5], ['node10.1_10.5_0']],
        ['node10.1_11_0', [0, 10.1, 11], ['node10.1_10.5_0', 'T2:B2-39b', 'T2:B2-39d']],
        ['T2:B2-39b', [0, 10.8, 11], ['node10.1_11_0']],
        ['T2:B2-39d', [0, 9.4, 11], ['node10.1_11_0']],
        ['node11.2_4.5_0', [0, 11.2, 4.5], ['detskykoutek', 'node10_4.5_0', 'node12_4.5_0']],
        ['detskykoutek', [0, 11.2, 5], ['node11.2_4.5_0']],
        ['node12_4.5_0', [0, 12, 4.5], ['node11.2_4.5_0', 'T2:C2-82', 'node13_4.5_0']],
        ['T2:C2-82', [0, 12, 5], ['node12_4.5_0']],
        ['node13_4.5_0', [0, 13, 4.5], ['node12_4.5_0', 'T2:C2-83', 'node13.9_4.5_0', 'node13_4.1_0']],
        ['node13_4.1_0', [0, 13, 4.1], ['node13_4.5_0', 'stairA2_0']],
        ['stairA2_0', [0, 12.7, 4.1], ['node13_4.1_0']],
        ['T2:C2-83', [0, 13, 5], ['node13_4.5_0']],
        ['node13.9_4.5_0', [0, 13.9, 4.5], ['node13_4.5_0', 'T2:C2-84', 'node15_4.5_0']],
        ['T2:C2-84', [0, 13.9, 5], ['node13.9_4.5_0']],
        ['node15_4.5_0', [0, 15, 4.5], ['node13.9_4.5_0', 'T2:C2-86']],
        ['T2:C2-86', [0, 15, 5], ['node15_4.5_0']],
        ['pater0_1', [1, 4.5, 5.5], ['node4.5_5_1']],
        ['pater1_1', [1, 10.5, 5.5], ['node10.5_5_1']],
        ['stairA3_1', [1, 7.5, 4], ['node7_4_1']],
        ['stairA4_1', [1, 0.8, 4.2], ['node1_4.2_1']],
        ['stairC4_1', [1, 3.7, 5], ['node3.7_5_1']],
        ['stairC3_1', [1, 9.8, 5.5], ['node10_5_1']],
        ['stairA2_1', [1, 12.5, 4], ['node13_4_1']],
        ['stairB3_1', [1, 4.5, 10], ['node4_10_1']],
        ['stairB2_1', [1, 10.5, 10], ['node10_10_1']],
        ['administrative-offices', [1, 1, 3], ['node1_4.2_1']],
        ['node1_4.2_1', [1, 1, 4.2], ['administrative-offices', 'stairA4_1', 'node1.5_4.5_1']],
        ['node1.5_4.5_1', [1, 1.5, 4.5], ['node1_4.2_1', 'node4_4.5_1']],
        ['node4_4.5_1', [1, 4, 4.5], ['node1.5_4.5_1', 'canteen', 'node3.7_5_1', 'node4_10_1', 'node6_4.5_1', 'node4.5_5_1']],
        ['node4.5_5_1', [1, 4.5, 5], ['pater0_1', 'node4_4.5_1']],
        ['node3.7_5_1', [1, 3.7, 5.5], ['stairC4_1', 'node4_4.5_1']],
        ['node4_10_1', [1, 4, 10], ['stairB3_1', 'node4_4.5_1']],
        ['canteen', [1, 4, 4], ['node4_4.5_1']],
        ['node6_4.5_1', [1, 6, 4.5], ['node4_4.5_1', 'T2:C3-135', 'node7_4.5_1']],
        ['node7_4.5_1', [1, 7, 4.5], ['node7_4_1', 'node8.5_4.5_1', 'node6_4.5_1']],
        ['node7_4_1', [1, 7, 4], ['node7_4.5_1', 'node7_2_1', 'stairA3_1']],
        ['node7_2_1', [1, 7, 2], ['node7_4_1', 'T2:A3-115b']],
        ['T2:A3-115b', [1, 7.5, 2], ['node7_2_1']],
        ['node8.5_4.5_1', [1, 8.5, 4.5], ['node7_4.5_1', 'T2:C3-132', 'node10_4.5_1']],
        ['T2:C3-135', [1, 6, 5], ['node6_4.5_1']],
        ['T2:C3-132', [1, 8.5, 5], ['node8.5_4.5_1']],
        ['node10_4.5_1', [1, 10, 4.5], ['node8.5_4.5_1', 'node10_5_1', 'node10_10_1', 'node13_4.5_1', 'node10.5_5_1']],
        ['node10.5_5_1', [1, 10.5, 5], ['pater1_1', 'node10_4.5_1']],
        ['node10_5_1', [1, 10, 5], ['node10_4.5_1', 'stairC3_1']],
        ['node10_10_1', [1, 10, 10], ['node10_4.5_1', 'stairB2_1']],
        ['node13_4.5_1', [1, 13, 4.5], ['node10_4.5_1', 'node13_4_1']],
        ['node13_4_1', [1, 13, 4], ['stairA2_1', 'node13_4.5_1']],
        ['pater0_2', [2, 4.5, 5.5], ['node4.5_5_2']],
        ['pater1_2', [2, 10.5, 5.5], ['node10.5_5_2']],
        ['stairA3_2', [2, 7.5, 4], ['node7_4_2']],
        ['stairA4_2', [2, 0.8, 4.2], ['node1_4.2_2']],
        ['stairC4_2', [2, 3.7, 5], ['node3.7_5_2']],
        ['stairC3_2', [2, 9.8, 5.5], ['node10_5_2']],
        ['stairA2_2', [2, 12.5, 4], ['node13_4_2']],
        ['stairB3_2', [2, 4.5, 10], ['node4_10_2']],
        ['stairB2_2', [2, 10.5, 10], ['node10_10_2']],
        ['T2:A4-203b', [2, 0.5, 1.5], ['node1_1.5_2']],
        ['node1_1.5_2', [2, 1, 1.5], ['T2:A4-203b', 'node1_2_2']],
        ['node1_2_2', [2, 1, 2], ['T2:A4-204', 'node1_1.5_2', 'node1_2.5_2']],
        ['T2:A4-204', [2, 1.5, 2], ['node1_2_2']],
        ['node1_2.5_2', [2, 1, 2.5], ['T2:A4-203a', 'node1_3_2', 'node1_2_2']],
        ['T2:A4-203a', [2, 0.5, 2.5], ['node1_2.5_2']],
        ['node1_3_2', [2, 1, 3], ['T2:A4-202b', 'node1_2.5_2', 'T2:A4-205', 'node1_3.5_2']],
        ['T2:A4-202b', [2, 0.5, 3], ['node1_3_2']],
        ['T2:A4-205', [2, 1.5, 3], ['node1_3_2']],
        ['node1_3.5_2', [2, 1, 3.5], ['node1_3_2', 'T2:A4-202a', 'node1_4.2_2']],
        ['T2:A4-202a', [2, 0.5, 3.5], ['node1_3.5_2']],
        ['node1_4.2_2', [2, 1, 4.2], ['stairA4_2', 'node1.5_4.5_2', 'node1_3.5_2']],
        ['node1.5_4.5_2', [2, 1.5, 4.5], ['node1_4.2_2', 'T2:C4-264', 'node2_4.5_2']],
        ['T2:C4-264', [2, 1.5, 5], ['node1.5_4.5_2']],
        ['node2_4.5_2', [2, 2, 4.5], ['node3_4.5_2', 'T2:C4-261', 'node1.5_4.5_2']],
        ['T2:C4-261', [2, 2, 5], ['node2_4.5_2']],
        ['node3_4.5_2', [2, 3, 4.5], ['node2_4.5_2', 'T2:C4-260', 'node4_4.5_2']],
        ['T2:C4-260', [2, 3, 5], ['node3_4.5_2']],
        ['node4_4.5_2', [2, 4, 4.5], ['node3_4.5_2', 'T2:D3-209', 'node3.7_5_2', 'node7_4.5_2', 'node4.5_5_2', 'node4_7_2']],
        ['T2:D3-209', [2, 4, 4], ['node4_4.5_2']],
        ['node3.7_5_2', [2, 3.7, 4.7], ['node4_4.5_2', 'stairC4_2']],
        ['node4.5_5_2', [2, 4.5, 5], ['node4_4.5_2', 'pater0_2']],
        ['node4_7_2', [2, 4, 7], ['node4_4.5_2', 'T2:B3-259', 'node4_10_2']],
        ['T2:B3-259', [2, 3.5, 7], ['node4_7_2']],
        ['node4_10_2', [2, 4, 10], ['node4_7_2', 'stairB3_2']],
        ['node7_4.5_2', [2, 7, 4.5], ['node4_4.5_2', 'node10_4.5_2', 'node7_4_2']],
        ['node7_4_2', [2, 7, 4], ['stairA3_2', 'node7_4.5_2']],
        ['node10_4.5_2', [2, 10, 4.5], ['node10.5_5_2', 'node7_4.5_2', 'T2:D2-259', 'node10_10_2', 'node13_4.5_2', 'node10_5_2']],
        ['T2:D2-259', [2, 10, 4], ['node10_4.5_2']],
        ['node10_10_2', [2, 10, 10], ['stairB2_2', 'node10_4.5_2']],
        ['node10_5_2', [2, 9.8, 5], ['stairC3_2', 'node10_4.5_2']],
        ['node10.5_5_2', [2, 10.5, 5], ['pater1_2', 'node10_4.5_2']],
        ['node13_4.5_2', [2, 13, 4.5], ['node10_4.5_2', 'node13_4_2']],
        ['node13_4_2', [2, 13, 4], ['stairA2_2', 'node13_4.5_2']],
        ['pater0_3', [3, 4.5, 5.5], ['node4.5_5_3']],
        ['pater1_3', [3, 10.5, 5.5], ['node10.5_5_3']],
        ['stairA3_3', [3, 7.5, 4], ['node7_4_3']],
        ['stairA4_3', [3, 0.8, 4.2], ['node1_4.2_3']],
        ['stairC4_3', [3, 3.7, 5], ['node3.7_5_3']],
        ['stairC3_3', [3, 9.8, 5.5], ['node10_5_3']],
        ['stairA2_3', [3, 12.5, 4], ['node13_4_3']],
        ['stairB3_3', [3, 4.5, 10], ['node4_10_3']],
        ['stairB2_3', [3, 10.5, 10], ['node10_10_3']],
        ['T2:A4-304c', [3, 1.5, 2], ['node1_2_3']],
        ['T2:A4-303', [3, 0.5, 3], ['node1_3_3']],
        ['sborovna', [3, 0.5, 4.5], ['node1_4.5_3']],
        ['T2:C4-364', [3, 1.5, 5], ['node1.5_4.5_3']],
        ['T2:C4-363', [3, 2, 5], ['node2_4.5_3']],
        ['T2:C4-362', [3, 3, 5], ['node3_4.5_3']],
        ['T2:B3-359', [3, 3.5, 7], ['node4_7_3']],
        ['T2:D3-309', [3, 4, 4], ['node4_4.5_3']],
        ['T2:C3-340', [3, 6, 5], ['node6_4.5_3']],
        ['T2:C3-337', [3, 8.5, 5], ['node8.5_4.5_3']],
        ['T2:A3-326', [3, 7.5, 3.5], ['node7_3.5_3']],
        ['T2:A3-325', [3, 7.5, 3], ['node7_3_3']],
        ['T2:A3-315', [3, 6.5, 3.5], ['node7_3.5_3']],
        ['T2:A3-316', [3, 6.5, 3], ['node7_3_3']],
        ['T2:A3-317', [3, 6.5, 2.5], ['node7_2.5_3']],
        ['T2:A3-318', [3, 6.5, 2], ['node7_2_3']],
        ['T2:A3-319', [3, 7, 1.5], ['node7_2_3']],
        ['node1_2_3', [3, 1, 2], ['T2:A4-304c', 'node1_3_3']],
        ['node1_3_3', [3, 1, 3], ['T2:A4-303', 'node1_2_3', 'node1_4.2_3']],
        ['node1_4.2_3', [3, 1, 4.2], ['stairA4_3', 'node1_3_3', 'node1_4.5_3']],
        ['node1_4.5_3', [3, 1, 4.5], ['sborovna', 'node1.5_4.5_3', 'node1_4.2_3']],
        ['node1.5_4.5_3', [3, 1.5, 4.5], ['T2:C4-364', 'node1_4.5_3', 'node2_4.5_3']],
        ['node2_4.5_3', [3, 2, 4.5], ['T2:C4-363', 'node1.5_4.5_3', 'node3_4.5_3']],
        ['node3_4.5_3', [3, 3, 4.5], ['T2:C4-362', 'node2_4.5_3', 'node4_4.5_3']],
        ['node4_4.5_3', [3, 4, 4.5], ['T2:D3-309', 'node3_4.5_3', 'node3.7_5_3', 'node4.5_5_3', 'node4_7_3', 'node6_4.5_3']],
        ['node3.7_5_3', [3, 3.7, 5], ['stairC4_3', 'node4_4.5_3']],
        ['node4.5_5_3', [3, 4.5, 5], ['pater0_3', 'node4_4.5_3']],
        ['node4_7_3', [3, 4, 7], ['T2:B3-359', 'node4_4.5_3', 'node4_10_3']],
        ['node4_10_3', [3, 4, 10], ['stairB3_3', 'node4_7_3']],
        ['node6_4.5_3', [3, 6, 4.5], ['T2:C3-340', 'node4_4.5_3', 'node7_4.5_3']],
        ['node7_4.5_3', [3, 7, 4.5], ['node6_4.5_3', 'node8.5_4.5_3', 'node7_4_3']],
        ['node7_4_3', [3, 7, 4], ['stairA3_3', 'node7_3.5_3', 'node7_4.5_3']],
        ['node7_3.5_3', [3, 7, 3.5], ['T2:A3-326', 'T2:A3-315', 'node7_4_3', 'node7_3_3']],
        ['node7_3_3', [3, 7, 3], ['T2:A3-325', 'T2:A3-316', 'node7_3.5_3', 'node7_2.5_3']],
        ['node7_2.5_3', [3, 7, 2.5], ['T2:A3-317', 'node7_3_3', 'node7_2_3']],
        ['node7_2_3', [3, 7, 2], ['T2:A3-318', 'T2:A3-319', 'node7_2.5_3']],
        ['node8.5_4.5_3', [3, 8.5, 4.5], ['T2:C3-337', 'node10_4.5_3', 'node7_4.5_3']],
        ['node10_4.5_3', [3, 10, 4.5], ['node10.5_5_3', 'node8.5_4.5_3', 'node10_10_3', 'node13_4.5_3', 'node10_5_3']],
        ['node10_10_3', [3, 10, 10], ['stairB2_3', 'node10_4.5_3']],
        ['node10_5_3', [3, 9.8, 5], ['stairC3_3', 'node10_4.5_3']],
        ['node10.5_5_3', [3, 10.5, 5], ['pater1_3', 'node10_4.5_3']],
        ['node13_4.5_3', [3, 13, 4.5], ['node10_4.5_3', 'node13_4_3']],
        ['node13_4_3', [3, 13, 4], ['stairA2_3', 'node13_4.5_3']],
        ['pater0_4', [4, 4.5, 5.5], ['node4.5_5_4']],
        ['pater1_4', [4, 10.5, 5.5], ['node10.5_5_4']],
        ['stairA3_4', [4, 7.5, 4], ['node7_4_4']],
        ['stairA4_4', [4, 0.8, 4.2], ['node1_4.2_4']],
        ['stairC4_4', [4, 3.7, 5], ['node3.7_5_4']],
        ['stairC3_4', [4, 9.8, 5.5], ['node10_5_4']],
        ['stairA2_4', [4, 12.5, 4], ['node13_4_4']],
        ['stairB3_4', [4, 4.5, 10], ['node4_10_4']],
        ['stairB2_4', [4, 10.5, 10], ['node10_10_4']],
        ['T2:A4-404', [4, 1, 2], ['node1_3_4']],
        ['T2:A4-405', [4, 1.5, 3], ['node1_3_4']],
        ['T2:A4-402', [4, 0.5, 3.5], ['node1_3.5_4']],
        ['T2:C4-459', [4, 3, 5], ['node3_4.5_4']],
        ['T2:B3-454', [4, 3.5, 8], ['node4_8_4']],
        ['T2:C3-438', [4, 6, 5], ['node6_4.5_4']],
        ['T2:C3-436', [4, 7, 5], ['node7_4.5_4']],
        ['T2:C3-434', [4, 8.5, 5], ['node8.5_4.5_4']],
        ['T2:A3-415', [4, 7.5, 3.5], ['node7_3.5_4']],
        ['T2:A3-412', [4, 7.5, 3.5], ['node7_3.5_4']],
        ['T2:A3-414', [4, 7.5, 3], ['node7_3_4']],
        ['T2:A3-413b', [4, 7.5, 2.5], ['node7_2.5_4']],
        ['T2:A3-413d', [4, 7, 2], ['node7_2.5_4']],
        ['T2:A3-413a', [4, 6.5, 2.5], ['node7_2.5_4']],
        ['T2:B2-431', [4, 9.5, 6.5], ['node10_6.5_4']],
        ['T2:B2-418', [4, 10.5, 6.5], ['node10_6.5_4']],
        ['T2:B2-419', [4, 10.5, 7], ['node10_7_4']],
        ['T2:B2-429', [4, 9.5, 7.5], ['node10_7.5_4']],
        ['T2:B2-428', [4, 9.5, 8], ['node10_8_4']],
        ['node1_3_4', [4, 1, 3], ['T2:A4-404', 'T2:A4-405', 'node1_3.5_4']],
        ['node1_3.5_4', [4, 1, 3.5], ['T2:A4-402', 'node1_4.2_4', 'node1_3_4']],
        ['node1_4.2_4', [4, 1, 4.2], ['stairA4_4', 'node3_4.5_4', 'node1_3.5_4']],
        ['node3_4.5_4', [4, 3, 4.5], ['node1_4.2_4', 'T2:C4-459', 'node4_4.5_4']],
        ['node4_4.5_4', [4, 4, 4.5], ['node3.7_5_4', 'node4.5_5_4', 'node4_8_4', 'node6_4.5_4', 'node3_4.5_4']],
        ['node3.7_5_4', [4, 3.7, 5], ['stairC4_4', 'node4_4.5_4']],
        ['node4.5_5_4', [4, 4.5, 5], ['pater0_4', 'node4_4.5_4']],
        ['node4_8_4', [4, 4, 8], ['T2:B3-454', 'node4_4.5_4', 'node4_10_4']],
        ['node4_10_4', [4, 4, 10], ['stairB3_4', 'node4_8_4']],
        ['node6_4.5_4', [4, 6, 4.5], ['T2:C3-438', 'node4_4.5_4', 'node7_4.5_4']],
        ['node7_4.5_4', [4, 7, 4.5], ['T2:C3-436', 'node6_4.5_4', 'node8.5_4.5_4', 'node7_4_4']],
        ['node8.5_4.5_4', [4, 8.5, 4.5], ['T2:C3-434', 'node7_4.5_4', 'node10_4.5_4']],
        ['node7_4_4', [4, 7, 4], ['stairA3_4', 'node7_4.5_4', 'node7_3.5_4']],
        ['node7_3.5_4', [4, 7, 3.5], ['T2:A3-415', 'T2:A3-412', 'node7_4_4', 'node7_3_4']],
        ['node7_3_4', [4, 7, 3], ['T2:A3-414', 'node7_3.5_4', 'node7_2.5_4']],
        ['node7_2.5_4', [4, 7, 2.5], ['T2:A3-413b', 'T2:A3-413d', 'T2:A3-413a', 'node7_3_4']],
        ['node10_4.5_4', [4, 10, 4.5], ['node8.5_4.5_4', 'node10_5_4', 'node10.5_5_4', 'node10_6.5_4', 'node13_4.5_4']],
        ['node10_5_4', [4, 10, 5], ['node10_4.5_4', 'stairC3_4']],
        ['node10.5_5_4', [4, 10.5, 5], ['node10_4.5_4', 'pater1_4']],
        ['node10_6.5_4', [4, 10, 6.5], ['T2:B2-431', 'T2:B2-418', 'node10_4.5_4', 'node10_7_4']],
        ['node10_7_4', [4, 10, 7], ['node10_7.5_4', 'T2:B2-419', 'node10_6.5_4']],
        ['node10_7.5_4', [4, 10, 7.5], ['node10_7_4', 'T2:B2-429', 'node10_8_4']],
        ['node10_8_4', [4, 10, 8], ['node10_10_4', 'T2:B2-428', 'node10_7.5_4']],
        ['node10_10_4', [4, 10, 10], ['node10_8_4', 'stairB2_4']],
        ['node13_4.5_4', [4, 13, 4.5], ['node10_4.5_4', 'node13_4_4']],
        ['node13_4_4', [4, 13, 4], ['stairA2_4', 'node13_4.5_4']],
        ['pater0_5', [5, 4.5, 5.5], ['node4.5_5_5']],
        ['pater1_5', [5, 10.5, 5.5], ['node10.5_5_5']],
        ['stairA3_5', [5, 7.5, 4], ['node7_4_5']],
        ['stairA4_5', [5, 0.8, 4.2], ['node1_4.2_5']],
        ['stairC4_5', [5, 3.7, 5], ['node3.7_5_5']],
        ['stairC3_5', [5, 9.8, 5.5], ['node10_5_5']],
        ['stairA2_5', [5, 12.5, 4], ['node13_4_5']],
        ['stairB3_5', [5, 4.5, 10], ['node4_10_5']],
        ['stairB2_5', [5, 10.5, 10], ['node10_10_5']],
        ['T2:A4-505b', [5, 1, 2], ['node1_2.5_5']],
        ['T2:B3-541', [5, 4.5, 6], ['node4_6_5']],
        ['T2:B3-542', [5, 4.5, 7], ['node4_7_5']],
        ['T2:B3-554', [5, 3.5, 7.5], ['node4_7.5_5']],
        ['T2:B3-553', [5, 3.5, 8], ['node4_8_5']],
        ['T2:B3-552', [5, 3.5, 9], ['node4_9_5']],
        ['cnr', [5, 7, 3], ['node7_4_5']],
        ['T2:B2-537', [5, 9.5, 6], ['node10_6_5']],
        ['T2:B2-529', [5, 10.5, 9], ['node10_9_5']],
        ['node1_2.5_5', [5, 1, 2.5], ['T2:A4-505b', 'node1_4.2_5']],
        ['node1_4.2_5', [5, 1, 4.2], ['stairA4_5', 'node1_2.5_5', 'node4_4.5_5']],
        ['node4_4.5_5', [5, 4, 4.5], ['node1_4.2_5', 'node4_6_5', 'node3.7_5_5', 'node4.5_5_5', 'node7_4.5_5']],
        ['node4_6_5', [5, 4, 6], ['T2:B3-541', 'node4_4.5_5', 'node4_7_5']],
        ['node4_7_5', [5, 4, 7], ['T2:B3-542', 'node4_7.5_5', 'node4_6_5']],
        ['node4_7.5_5', [5, 4, 7.5], ['T2:B3-554', 'node4_7_5', 'node4_8_5']],
        ['node4_8_5', [5, 4, 8], ['T2:B3-553', 'node4_7.5_5', 'node4_9_5']],
        ['node4_9_5', [5, 4, 9], ['T2:B3-552', 'node4_8_5', 'node4_10_5']],
        ['node4_10_5', [5, 4, 9], ['stairB3_5', 'node4_9_5']],
        ['node3.7_5_5', [5, 3.7, 5], ['stairC4_5', 'node4_4.5_5']],
        ['node4.5_5_5', [5, 4.5, 5], ['pater0_5', 'node4_4.5_5']],
        ['node7_4.5_5', [5, 4.5, 5], ['node7_4_5', 'node4_4.5_5', 'node10_4.5_5']],
        ['node7_4_5', [5, 4, 7], ['stairA3_5', 'node7_4.5_5', 'cnr']],
        ['node10_4.5_5', [5, 10, 4.5], ['node7_4.5_5', 'node10.5_5_5', 'node10_5_5', 'node10_6_5', 'node13_4.5_5']],
        ['node10.5_5_5', [5, 10.5, 5], ['pater1_5', 'node10_4.5_5']],
        ['node10_5_5', [5, 10, 5], ['stairC3_5', 'node10_4.5_5']],
        ['node10_6_5', [5, 10, 6], ['T2:B2-537', 'node10_4.5_5', 'node10_9_5']],
        ['node10_9_5', [5, 10, 9], ['T2:B2-529', 'node10_10_5', 'node10_6_5']],
        ['node10_10_5', [5, 10, 10], ['stairB2_5', 'node10_9_5']],
        ['node13_4.5_5', [5, 13, 4.5], ['node10_4.5_5', 'node13_4_5']],
        ['node13_4_5', [5, 13, 4], ['stairA2_5', 'node13_4.5_5']],
        ['pater0_6.1', [6.1, 4.5, 5.5], ['node4.5_5_6']],
        ['stairC4_6.1', [6.1, 3.7, 5], ['node3.7_5_6']],
        ['stairB3_6.1', [6.1, 4.5, 10], ['node4_10_6']],
        ['T2:B3-606', [6.1, 3.5, 9], ['node4_9_6']],
        ['T2:B3-608', [6.1, 3.5, 10], ['node4_10_6']],
        ['node4_4.5_6', [6.1, 4, 4.5], ['node3.7_5_6', 'node4_9_6', 'node4.5_5_6']],
        ['node3.7_5_6', [6.1, 3.7, 5], ['stairC4_6.1', 'node4_4.5_6']],
        ['node4.5_5_6', [6.1, 4.5, 5], ['pater0_6.1', 'node4_4.5_6']],
        ['node4_9_6', [6.1, 4, 9], ['T2:B3-606', 'node4_4.5_6', 'node4_10_6']],
        ['node4_10_6', [6.1, 4, 10], ['T2:B3-608', 'node4_9_6', 'stairB3_6.1']],
        ['pater1_6.2', [6.2, 10.5, 5.5], ['node10.5_5_6']],
        ['stairC3_6.2', [6.2, 9.5, 5], ['node9.5_5_6']],
        ['stairB2_6.2', [6.2, 9.5, 10], ['node10_10_6']],
        ['T2:B2-626', [6.2, 9.5, 9], ['node10_9_6']],
        ['T2:B2-623', [6.2, 9.5, 7], ['node10_7_6']],
        ['T2:B2-621', [6.2, 9.5, 6], ['node10_6_6']],
        ['node10_4.5_6', [6.2, 4, 4.5], ['node9.5_5_6', 'node10_6_6', 'node10.5_5_6']],
        ['node9.5_5_6', [6.2, 9.5, 5], ['stairC3_6.2', 'node10_4.5_6']],
        ['node10.5_5_6', [6.2, 10.5, 5], ['pater1_6.2', 'node10_4.5_6']],
        ['node10_6_6', [6.2, 10, 6], ['T2:B2-621', 'node10_4.5_6', 'node10_7_6']],
        ['node10_7_6', [6.2, 10, 7], ['T2:B2-623', 'node10_6_6', 'node10_9_6']],
        ['node10_9_6', [6.2, 10, 9], ['T2:B2-626', 'node10_7_6', 'node10_10_6']],
        ['node10_10_6', [6.2, 10, 9], ['stairB2_6.2', 'node10_9_6']],
        ['pater0_7.1', [7.1, 4.5, 5.5], ['node4.5_5_7']],
        ['stairC4_7.1', [7.1, 3.7, 5], ['node3.5_5_7']],
        ['stairB3_7.1', [7.1, 4.5, 10], ['node4_10_7']],
        ['T2:B3-700', [7.1, 3.5, 6], ['node4_6_7']],
        ['T2:B3-701', [7.1, 3.5, 7], ['node4_7_7']],
        ['T2:B3-703', [7.1, 3.5, 8], ['node4_8_7']],
        ['T2:B3-710', [7.1, 5.5, 8], ['node4_8_7']],
        ['T2:B3-714', [7.1, 5.5, 6], ['node4_6_7']],
        ['node4.5_5_7', [7.1, 4.5, 5], ['node4_4.5_7', 'pater0_7.1']],
        ['node3.5_5_7', [7.1, 3.5, 5], ['node4_4.5_7', 'stairC4_7.1']],
        ['node4_10_7', [7.1, 4, 10], ['stairB3_7.1', 'node4_8_7']],
        ['node4_8_7', [7.1, 4, 8], ['T2:B3-703', 'T2:B3-710', 'node4_7_7', 'node4_10_7']],
        ['node4_7_7', [7.1, 4, 7], ['T2:B3-701', 'node4_6_7', 'node4_8_7']],
        ['node4_6_7', [7.1, 4, 6], ['T2:B3-700', 'T2:B3-714', 'node4_7_7', 'node4_4.5_7']],
        ['node4_4.5_7', [7.1, 4, 4.5], ['node4.5_5_7', 'node3.5_5_7', 'node4_6_7']],
        ['pater1_7.2', [7.2, 10.5, 5.5], ['node10.5_5_7']],
        ['stairC3_7.2', [7.2, 9.5, 5], ['node9.5_5_7']],
        ['stairB2_7.2', [7.2, 9.5, 10], ['node10_10_7']],
        ['T2:B2-724', [7.2, 9.5, 10], ['node10_10_7']],
        ['T2:B2-717', [7.2, 9.5, 6], ['node10_6_7']],
        ['node10_4.5_7', [7.2, 10, 4.5], ['node9.5_5_7', 'node10_6_7', 'node10.5_5_7']],
        ['node10.5_5_7', [7.2, 10.5, 5], ['pater1_7.2', 'node10_4.5_7']],
        ['node9.5_5_7', [7.2, 9.5, 5], ['stairC3_7.2', 'node10_4.5_7']],
        ['node10_6_7', [7.2, 10, 6], ['node10_4.5_7', 'node10_10_7', 'T2:B2-717']],
        ['node10_10_7', [7.2, 10, 10], ['node10_6_7', 'stairB2_7.2', 'T2:B2-724']],
        ['pater0_8.1', [8.1, 4.5, 5.5], ['node4.5_5_8']],
        ['stairC4_8.1', [8.1, 3.7, 5], ['node3.5_5_8']],
        ['stairB3_8.1', [8.1, 4.5, 10], ['node4_10_8']],
        ['T2:B3-802', [8.1, 3.5, 7], ['node4_7_8']],
        ['T2:B3-812a', [8.1, 4.5, 7], ['node4_7_8']],
        ['T2:B3-803', [8.1, 3.5, 8], ['node4_8_8']],
        ['node4.5_5_8', [8.1, 4.5, 5], ['node4_4.5_8', 'pater0_8.1']],
        ['node3.5_5_8', [8.1, 3.5, 5], ['node4_4.5_8', 'stairC4_8.1']],
        ['node4_10_8', [8.1, 4, 10], ['stairB3_8.1', 'node4_8_8']],
        ['node4_4.5_8', [8.1, 4, 4.5], ['node4.5_5_8', 'node3.5_5_8', 'node4_7_8']],
        ['node4_7_8', [8.1, 4, 7], ['T2:B3-802', 'T2:B3-812a', 'node4_4.5_8', 'node4_8_8']],
        ['node4_8_8', [8.1, 4, 8], ['T2:B3-803', 'node4_10_8', 'node4_7_8']],
        ['pater1_8.2', [8.2, 10.5, 5.5], ['node10.5_5_8']],
        ['stairC3_8.2', [8.2, 9.5, 5], ['node9.5_5_8']],
        ['stairB2_8.2', [8.2, 9.5, 10], ['node10_10_8']],
        ['T2:B2-815b', [8.2, 9.5, 7], ['node10_7_8']],
        ['T2:B2-817', [8.2, 9.5, 8], ['node10_8_8']],
        ['T2:B2-823', [8.2, 10.5, 8], ['node10_8_8']],
        ['T2:B2-825', [8.2, 9.5, 7], ['node10_7_8']],
        ['node10_4.5_8', [8.2, 10, 4.5], ['node9.5_5_8', 'node10_7_8', 'node10.5_5_8']],
        ['node10.5_5_8', [8.2, 10.5, 5], ['pater1_8.2', 'node10_4.5_8']],
        ['node9.5_5_8', [8.2, 9.5, 5], ['stairC3_8.2', 'node10_4.5_8']],
        ['node10_10_8', [8.2, 10, 10], ['node10_8_8', 'stairB2_8.2']],
        ['node10_8_8', [8.2, 10, 8], ['node10_10_8', 'node10_7_8', 'T2:B2-817', 'T2:B2-823']],
        ['node10_7_8', [8.2, 10, 7], ['node10_4.5_8', 'node10_8_8', 'T2:B2-815b', 'T2:B2-825']],
    ]
};
//# sourceMappingURL=tree-nodes.js.map