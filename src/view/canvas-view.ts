import { Actor } from "../actors/actor";

export class CanvasView {
    public ctx: CanvasRenderingContext2D;

    constructor(public canvas: HTMLCanvasElement) {
        this.ctx = this.canvas.getContext("2d")
    }

    draw(actors: Actor[]): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        actors.forEach(actor => actor.draw(this.ctx));
    }
}