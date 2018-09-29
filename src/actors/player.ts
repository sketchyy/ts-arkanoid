import { Vector } from "../common/vector";
import { Actor } from "./actor";

export class Player implements Actor {
    public size: Vector;

    constructor(public pos: Vector/*, public speed: Vector */) {
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();
    }

    public update(canvas: HTMLCanvasElement): void {

    }
}

Player.prototype.size = new Vector(100, 15);