
class DrawPen {
    public ctx: any;
    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }
    drawRectByPoint(point: Array<number>, width: number) {
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(point[0], point[1], width, width)
    }
    drawMaterialByPoint(img: any, model: any, point: Array<number>) {
        const { el, sourceSize, translate, type} = model;
        console.log(model)
        this.ctx.drawImage(img, translate[0], translate[1], sourceSize[0], sourceSize[1], point[0], point[1], sourceSize[0], sourceSize[1])
    }
}

export default DrawPen;