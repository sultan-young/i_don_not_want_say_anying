import { TOWN_RESOURCE, sourceUrl as  TOWN_RESOURCE_URL} from './town_tree/tileset'
import { WINTER_RESOURCE, sourceUrl as WINTER_RESOURCE_URL} from './town_tree/winter'
import { IImgResource } from './interface'
import { IMG_RESOURCE_TYPE } from './type'

// 资源分类
// 资源，建筑，装饰，人物


let resources: Array<IImgResource> = [];


// // 资源整合
function concatResource() {
    return resources.concat(
        TOWN_RESOURCE.map(item=> ({...item, sourceUrl: TOWN_RESOURCE_URL})), 
        WINTER_RESOURCE.map(item=> ({...item, sourceUrl: WINTER_RESOURCE_URL}))
        );
}

function mapResources() {
    return resources.reduce((total: any, current: IImgResource, index: number)=> {
        const { type } = current;
        const key = IMG_RESOURCE_TYPE[type];
        if(total[key]) {
            total[key].push(current)
            return total;
        }else {
            total[key] = [];
            total[key].push(current)
            return total;
        }
    }, {})
}

resources = concatResource()

const resourceObj = mapResources();

export {
    resourceObj,
}