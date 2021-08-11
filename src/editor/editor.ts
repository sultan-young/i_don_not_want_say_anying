import DrawPen from '@/draw/draw-pen';
import img from '@/assests/town_tree/tileset.png'
interface IEditor {
    game: any,
    layout: HTMLElement,
}

interface IEditorOption {
    isOpenGridLine: boolean,
}

class Editor {
    protected game;
    protected layout;
    protected editorOption: IEditorOption;
    protected drawpen;
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
    bindEditorMouseClick(event: MouseEvent) {
        const { offsetX, offsetY } = event;
        const { width, height } = this.game.el;
        const x = Math.floor(offsetX / this.game.DENSITY);
        const y = Math.floor(offsetY / this.game.DENSITY);

        // 模拟画点
        // this.drawpen.drawRectByPoint([x * 40, y * 40], 40);
        // const img = require('../assests/town_tree/tileset.png')
        console.log(img)
        // const img = new Image();
        // img.src = '../../assets/town_tree';
        // img.onload = ()=> {
        //     // 模拟画图
        //     this.drawpen.drawMaterialByPoint([x * 40, y * 40], 40)
        //     console.log(img.width )
        // }
        
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
}

export default Editor;