interface IGameOption {
    layout: HTMLElement,
    DENSITY: number,
}



class Game {
    protected layout; // game初始化的父容器
    public ctx: CanvasRenderingContext2D | null; // 2d画笔
    public el: any; // game初始化后的实例
    public DENSITY; // 一个基格占多少像素
    public spiritList: Set<object>; // 当前game spirit列表
    public resourceMap: Map<string, HTMLElement>; // 当前game用到的资源

    constructor(gameOption: IGameOption) {
        this.layout = gameOption.layout;
        this.DENSITY = gameOption.DENSITY;
        this.el = null;
        this.ctx = null;
        this.spiritList = new Set();   
        this.resourceMap = new Map();
    }
    init() {
        this.initScene();
        this.bindMouseClick()
    }
    initScene() {
        const width = this.layout.offsetWidth;
        const height = this.layout.offsetHeight;
        this.el = document.createElement('canvas');
        this.ctx = this.el.getContext('2d');
        this.el.width = width;
        this.el.height = height;
        this.layout.appendChild(this.el)
    }
    bindMouseClick() {
        this.el.addEventListener('click', (e: Event)=> {
            
        })
    }
    // 追加一个spirit
    appendSpirit() {

    }
}

export default Game;