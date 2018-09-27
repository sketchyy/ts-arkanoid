import { Actor } from "../actors/actor";

export class CanvasView {
    public ctx: CanvasRenderingContext2D;

    constructor(public canvas: HTMLCanvasElement) {
        this.ctx = this.canvas.getContext("2d")
    }

    draw(actors: Actor[]): void {
        actors.forEach(actor => actor.draw(this.ctx));
    }
}