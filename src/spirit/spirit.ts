// import { SPIRIT_TYPE } from './base_type';
interface ISpiritOption {
    _id: string, // 唯一id
    type: number, // 类型
    resourceUrl: string, // 资源地址

}


// Spirit是所有精灵的基类
// 通用行为
class Spirit {
    protected _id;
    protected type;
    protected resourceUrl;

    constructor(spiritOption: ISpiritOption) {
        this._id = spiritOption._id;
        this.type = spiritOption.type;
        this.resourceUrl = spiritOption.resourceUrl;
    }
}

export {
    Spirit,
    ISpiritOption,
} ; 