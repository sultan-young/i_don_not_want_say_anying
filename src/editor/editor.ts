import DrawPen from '@/draw/draw-pen';
import { TOWN_MATERIAL, ITownMaterial } from '../asset/town_tree/tileset'
import { v4 as uuidv4 } from 'uuid';

interface IEditor {
    game: any,
    layout: HTMLElement,
}

interface IEditorOption {
    isOpenGridLine: boolean,
}
interface ITownMaterialDom extends ITownMaterial {
    el: HTMLElement,
}

class Editor {
    protected game;
    protected layout;
    protected editorOption: IEditorOption;
    protected drawpen;
    protected currentSelectMateral: ITownMaterialDom | undefined;
    constructor(option: IEditor) {
        this.game = option.game;
        this.layout = option.layout;
        this.editorOption = {
            isOpenGridLine: true,
        };
        // 初始化画笔
        this.drawpen = new DrawPen(this.game.ctx)
        this.init();
    }
    init() {
        this.gridLineHandler()
        this.initEditorMater();
        this.initBindEvent();
        // this.initByEditorOption();
    }
    initBindEvent() {
       this.bindGridLineBtn();
       this.game.el.addEventListener('click', this.bindEditorMouseClick.bind(this))
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

        const path = require('@/asset/town_tree/tileset.png')
        const img = new Image();
        img.src = path;

        img.onload = ()=> {
            // 模拟画图
            this.drawpen.drawMaterialByPoint(img, this.currentSelectMateral, [x * this.game.DENSITY, y * this.game.DENSITY])

        }
        
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
        
        console.log(width, height)
    }
    initGrid() {
        
    }
    initEditorMater() {
        const parentDom = document.createElement('div');
        parentDom.style.display = 'flex';
        parentDom.style.flexWrap = 'warp';
        parentDom.addEventListener('click', (e)=> {
            const targetDom: any = e.target;
            const index = targetDom && targetDom.getAttribute('_index')
            this.currentSelectMateral = {
                ...TOWN_MATERIAL[index],
                el: targetDom,
            }
        })
        const path = require('../asset/town_tree/tileset.png');

        TOWN_MATERIAL.forEach((material: ITownMaterial, index: number) => {
            const imgDom = document.createElement('div');
            imgDom.style.background = `url(${path})  ${-material.translate[0]}px ${-material.translate[1]}px`
            imgDom.style.width = `${material.sourceSize[0]}px`;
            imgDom.style.height = `${material.sourceSize[1]}px`;
            imgDom.style.marginLeft = '20px'
            imgDom.setAttribute('_index', `${index}`);
            parentDom.appendChild(imgDom)
        })
        console.log(parentDom)
        this.layout.appendChild(parentDom)
        console.log(TOWN_MATERIAL)
    }
}

function loadSketchLib(path: any): Promise<any> {
    return Promise.resolve(require(`${path}`))
}
export default Editor;