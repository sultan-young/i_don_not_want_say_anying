import {Spirit, ISpiritOption} from "./spirit";
import { v4 as uuidv4 } from 'uuid';
import { SPIRIT_TYPE } from './base_type';

// 障碍物类
class Barrier extends Spirit{
    constructor(spriteOption: ISpiritOption) {
        super(spriteOption);
    }
}

function createBarrier(option: any) {
    return new Barrier({
        _id: uuidv4(),
        type: SPIRIT_TYPE.BARRIER,
        resourceUrl: '',
    });
}

export {
    Barrier,
}