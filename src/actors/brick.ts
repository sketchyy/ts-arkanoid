import { Vector } from "../common/vector";
import { Actor } from "./actor";
import { State } from "../game/state";

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

    public update(state: State): void {
        
    }
}

Brick.prototype.size = new Vector(77, 20);