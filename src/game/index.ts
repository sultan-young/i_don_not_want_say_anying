interface IGameOption {
    layout: HTMLElement,
    DENSITY: number,
}



class Game {
    protected layout;
    public ctx: CanvasRenderingContext2D | null;
    public el: any;
    public DENSITY;
    constructor(gameOption: IGameOption) {
        this.layout = gameOption.layout;
        this.DENSITY = gameOption.DENSITY;
        this.el = null;
        this.ctx = null;
        // 
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
}

export default Game;