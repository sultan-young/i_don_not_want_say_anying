import {Spirit, ISpiritOption} from "./spirit";

// 障碍物类
class Barrier extends Spirit{
    constructor(spriteOption: ISpiritOption) {
        super(spriteOption);
    }
}

export {
    Barrier,
}