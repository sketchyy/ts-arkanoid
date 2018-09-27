import { Vector } from "../common/vector";
import { Actor } from "./actor";

export class Ball implements Actor {
    public size: Vector;

    constructor(public pos: Vector, public speed: Vector) {
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.size.x, 0, Math.PI*2);
        ctx.fillStyle = "lightblue";
        ctx.fill();
        ctx.closePath();
    }

    public update(): void {

    }
}

Ball.prototype.size = new Vector(10, 10);