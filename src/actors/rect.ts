import { Actor } from "./actor";
import { State } from "../game/state";
import { Vector } from "../common/vector";

export class Rect implements Actor {
    public type: string = "rect";

    constructor(public id: string, public pos: Vector, public size: Vector, public color: string) { }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update(state: State): void { }
}