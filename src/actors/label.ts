import { Actor } from "./actor";
import { State } from "../game/state";
import { Vector } from "../common/vector";

export class Label implements Actor {
    public type: string = "label";
    public text: string;

    constructor(public id: string, public pos: Vector) {
    }
    
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.font = "16px Roboto";
        ctx.fillStyle = "#0095DD";
        ctx.fillText(this.text, this.pos.x, this.pos.y);
    }

    update(state: State): void {}
}
