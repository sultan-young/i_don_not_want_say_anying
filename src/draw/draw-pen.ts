

class DrawPen {
    public ctx: any;
    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }
    drawRectByPoint(point: Array<number>, width: number) {
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(point[0], point[1], width, width)
    }
    drawMaterialByPoint(point: Array<number>, width: number) {
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(point[0], point[1], width, width)
    }
}

export default DrawPen;