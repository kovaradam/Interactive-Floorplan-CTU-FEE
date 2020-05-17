import {Type, floorNums} from '../../utils/utils'

export const verticalPaths: {[key:string]:[string, string,[number, number, number], number, number[]][]} = {
 T2:[
    ['stair_cloak0', 'T2', [-1, 439, 286], Type.STAIR, [-1.1,0]],
    ['stair_cloak1', 'T2', [-1, 410, 286], Type.STAIR, [-1.1,0]],

    ['stairA2', 'T2', [-1, 120, 254], Type.STAIR, [-1.1,...floorNums['T2'].slice(2,7),5.5]],
    ['elevA2', 'T2', [-1, 93, 254], Type.ELEVATOR, [-1.1,...floorNums['T2'].slice(2,7),5.5]],
    ['stairA3', 'T2', [-1, 304, 254], Type.STAIR, [-1.1,...floorNums['T2'].slice(2,7),5.4]],
    ['elevA3', 'T2', [-1, 331, 253], Type.ELEVATOR, [-1.1,...floorNums['T2'].slice(2,7),5.4]],
    ['stairA4', 'T2', [-1, 542, 254], Type.STAIR,  [-1.1,...floorNums['T2'].slice(2,7),5.3]],
    ['elevA4', 'T2', [-1, 513, 253], Type.ELEVATOR,  [-1.1,...floorNums['T2'].slice(2,7),5.3]],

    ['stairC3', 'T2', [-1, 226, 209], Type.STAIR, [-1.1,...floorNums['T2'].slice(2,7), ...floorNums['T2'].slice(11,15)]],
    ['stairC4', 'T2', [-1, 437, 209], Type.STAIR, [-1.1,...floorNums['T2'].slice(2,11)]],
    
    ['stairB2', 'T2', [-1, 198, 60], Type.STAIR, [-1.1,...floorNums['T2'].slice(2,7), ...floorNums['T2'].slice(11,15)]],
    ['elevB2', 'T2', [-1, 198, 70], Type.ELEVATOR, [-1.1,...floorNums['T2'].slice(2,7), ...floorNums['T2'].slice(11,15)]],
    ['stairB3', 'T2', [-1, 408, 60], Type.STAIR, floorNums['T2'].slice(1,11)],
    ['elevB3', 'T2', [-1, 408, 70], Type.ELEVATOR, floorNums['T2'].slice(1,11)],
    
    ['pater0', 'T2', [-1, 408, 209], Type.PATER, [-1.1,...floorNums['T2'].slice(2,11)]],
    ['pater1', 'T2', [-1, 198, 209], Type.PATER, [-1.1,...floorNums['T2'].slice(2,7), ...floorNums['T2'].slice(11,15)]]],
 H: [
    ['stairE1', 'H', [-1, 180, 97], Type.STAIR, floorNums['H']],
    ['stairF1', 'H', [-1, 170, 310], Type.STAIR, floorNums['H']],
    ['stairG1', 'H', [-1, 510, 310], Type.STAIR, floorNums['H']]

],

}