import { Vector } from "../common/vector";
import { Actor } from "./actor";

export class Brick implements Actor {
    public size: Vector;

    constructor(public pos: Vector) {
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
        ctx.fillStyle = "#aaaaaa";
        ctx.fill();
        ctx.closePath();
    }

    public update(): void {

    }
}

Brick.prototype.size = new Vector(77, 20);