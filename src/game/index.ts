interface IGameOption {
    el: HTMLElement,
}

class Game {
    protected el;
    protected ctx: any;
    constructor(gameOption: IGameOption) {
        this.el = gameOption.el;
        this.ctx = null;
    }
    init() {
        this.initScene();
    }
    initScene() {
        const width = this.el.offsetWidth;
        const height = this.el.offsetHeight;
        const canvas = document.createElement('canvas');
        this.ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
    }
}

export default Game;