import DrawPen from '@/draw/draw-pen';
import { sourceUrl, TOWN_RESOURCE } from '../asset/town_tree/tileset'
import { IImgResource } from '../asset/interface'
import { Barrier } from '../spirit/barrier';
import { resourceObj } from '../asset/index'
import $ from './dom'
import { getImgByUrl } from '../resource/img_resource';

interface IEditor {
    game: any,
    layout: HTMLElement,
}

interface IEditorOption {
    isOpenGridLine: boolean,
}
interface ITownMaterialDom extends IImgResource {
    el: HTMLElement,
}

class Editor {
    protected game;
    protected layout;
    protected editorOption: IEditorOption;
    protected drawpen;
    protected currentKey: string;
    protected currentSelectMateral: ITownMaterialDom | null;
    protected bottomEl: any;
    constructor(option: IEditor) {
        this.game = option.game;
        this.layout = option.layout;
        this.editorOption = {
            isOpenGridLine: true,
        };
        this.currentSelectMateral = null;
        // 初始化画笔
        this.drawpen = new DrawPen(this.game.ctx);
        this.currentKey = '';
        this.init();
    }
    init() {
       this.initPanel();

        this.gridLineHandler()
        this.initEditorResource();
        this.initBindEvent();
        // this.initByEditorOption();
    }
    initBindEvent() {
    //    this.bindGridLineBtn();   
       // 初始化面板
       //   注册game鼠标点击事件
       this.game.subscribeEvent('click', this.bindEditorMouseClick.bind(this))

    }
    initByEditorOption() {
        
    }
    // 编辑器点击事件
    async bindEditorMouseClick(event: MouseEvent) {
        const { offsetX, offsetY } = event;
        const { width, height } = this.game.el;
        const x = Math.floor(offsetX / this.game.DENSITY);
        const y = Math.floor(offsetY / this.game.DENSITY);
        
        // 模拟画点
        // this.drawpen.drawRectByPoint([x * 40, y * 40], 40);
        const sourceUrl = this.currentSelectMateral?.sourceUrl as string;
        if(!sourceUrl) return;

        const _img = await getImgByUrl(sourceUrl)
        this.drawpen.drawMaterialByPoint(_img, this.currentSelectMateral, [x * this.game.DENSITY, y * this.game.DENSITY])
        this.currentSelectMateral = null;
    }
    // 标线开关
    bindGridLineBtn() {
        const gridLineBtn: HTMLElement = document.createElement('button');
        gridLineBtn.addEventListener('click', ()=> {
            this.editorOption.isOpenGridLine = !this.editorOption.isOpenGridLine;
            if(this.editorOption.isOpenGridLine) {
                this.gridLineHandler()
            }
        });
        gridLineBtn.innerHTML = '标线开关';
        this.layout.appendChild(gridLineBtn)
    }
    // 绘制标线
    gridLineHandler() {
        const { el, ctx, DENSITY } = this.game;
        const width = el.width;
        const height = el.height;
        let wx = 0;

        // 设置虚线
        ctx.setLineDash([5,10])   
        ctx.lineWidth = 1;
        for(let i = 0; i < (width / DENSITY) - 1; i++) {
            wx += DENSITY;
            ctx.moveTo(wx, 0)
            ctx.lineTo(wx, height)
            ctx.stroke()
        }

        let wy = 0;
        for(let j = 0; j < (height / DENSITY) - 1; j++) {
            wy += DENSITY;
            ctx.moveTo(0, wy)
            ctx.lineTo(width, wy)
            ctx.stroke()
        }
        
    }
    initGrid() {
        
    }
    initPanel() {
        this.initBtnPanel()
        this.initBottomPanel()
    }
    initBtnPanel() {
        // 创建操作栏目
        const keys = Object.keys(resourceObj);
        const btnWrap = $.createElement('div', {
            display: 'flex',
        })
        btnWrap.addEventListener('click', (e)=> {
            const targetDom: any = e.target;
            const _key = targetDom.getAttribute('key');
            if(keys.includes(_key)) {
                this.currentKey = _key;
                this.initEditorResource();
            }
        })
        keys.forEach(key=> {
            const el = $.createElement('div', {
                marginLeft: '20px',
                cursor: 'pointer',
            })
            el.setAttribute('key', key);
            el.innerHTML = key;
            btnWrap.appendChild(el)
        })
        this.layout.appendChild(btnWrap)
        this.currentKey = keys[0]
    }
    initBottomPanel() {
        this.bottomEl = document.createElement('div');
        this.bottomEl.style.display = 'flex';
        this.bottomEl.style.flexWrap = 'wrap';
        this.bottomEl.style.alignItems = 'center';
        this.bottomEl.addEventListener('click', (e: MouseEvent)=> {
            const targetDom: any = e.target;
            const index = targetDom && targetDom.getAttribute('_index')
            this.currentSelectMateral = {
                ...resourceObj[this.currentKey][index],
                el: targetDom,
            }
        });
    }
    // 初始化资源
    initEditorResource() {

        this.bottomEl.innerHTML = '';
        const currentResource = resourceObj[this.currentKey];

        currentResource.forEach((material: IImgResource, index: number) => {
            const imgDom = document.createElement('div');
            imgDom.style.background = `url(${material.sourceUrl})  ${-material.translate[0]}px ${-material.translate[1]}px no-repeat`
            imgDom.style.width = `${material.sourceSize[0]}px`;
            imgDom.style.height = `${material.sourceSize[1]}px`;
            imgDom.style.marginLeft = '20px'
            imgDom.setAttribute('_index', `${index}`);
            this.bottomEl.appendChild(imgDom)
        })
        this.layout.appendChild(this.bottomEl)
    }
}

function loadSketchLib(path: any): Promise<any> {
    return Promise.resolve(require(`${path}`))
}
export default Editor;