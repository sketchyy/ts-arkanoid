import { Vector } from "../common/vector";
import { Actor } from "./actor";
import { State } from "../game/state";

export class Brick implements Actor {
    public type: string = "brick";
    public size: Vector;

    constructor(public id: string, public pos: Vector, public color: string) {
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    public update(state: State): void {}
}

/* Here we use single Vector object for all bricks. */
Brick.prototype.size = new Vector(77, 20);