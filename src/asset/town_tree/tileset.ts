import { SPIRIT_TYPE } from '../../spirit/base_type'

export interface ITownMaterial {
    translate: Array<number>,
    sourceSize: Array<number>,
    type: any,
}

export const TOWN_MATERIAL: Array<ITownMaterial> = [
    {
        translate: [32, 16],
        sourceSize: [64, 64],
        type: SPIRIT_TYPE.barrier
    },
    {
        translate: [118, 16],
        sourceSize: [54, 63],
        type: SPIRIT_TYPE.barrier
    },
    {
        translate: [33, 96],
        sourceSize: [15, 31],
        type: SPIRIT_TYPE.barrier
    },
    {
        translate: [64, 99],
        sourceSize: [32, 29],
        type: SPIRIT_TYPE.barrier
    },
    {
        translate: [113, 96],
        sourceSize: [14, 16],
        type: SPIRIT_TYPE.barrier
    },
    {
        translate: [33, 148],
        sourceSize: [14, 9],
        type: SPIRIT_TYPE.barrier
    },
    {
        translate: [80, 114],
        sourceSize: [16, 32],
        type: SPIRIT_TYPE.barrier
    },
    {
        translate: [112, 160],
        sourceSize: [16, 16],
        type: SPIRIT_TYPE.barrier
    },
    {
        translate: [144, 144],
        sourceSize: [16, 32],
        type: SPIRIT_TYPE.barrier
    },
    {
        translate: [37, 167],
        sourceSize: [25, 25],
        type: SPIRIT_TYPE.barrier
    },
    {
        translate: [192, 25],
        sourceSize: [80, 127],
        type: SPIRIT_TYPE.barrier
    },
    {
        translate: [288, 16],
        sourceSize: [64, 16],
        type: SPIRIT_TYPE.barrier
    },
    {
        translate: [352, 48],
        sourceSize: [16, 16],
        type: SPIRIT_TYPE.barrier
    },
    {
        translate: [288, 96],
        sourceSize: [16, 48],
        type: SPIRIT_TYPE.barrier
    },
]




