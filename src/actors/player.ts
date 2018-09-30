import { Vector } from "../common/vector";
import { Actor } from "./actor";
import { State } from "../game/state";
import { KeyPressed } from "../game/track-keys";

export class Player implements Actor {
    public type: string = "player";
    public speedX: number = 7;

    constructor(public id: string, public pos: Vector, public size: Vector) { }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
        ctx.fillStyle = "#4c9cff";
        ctx.fill();
        ctx.closePath();
    }

    public update(state: State, keys: KeyPressed): void {
        if (keys["ArrowLeft"] && this.pos.x > 0) {
            this.pos.x -= this.speedX;
        }
        if (keys["ArrowRight"] && this.pos.x < state.view.canvas.width - this.size.x) {
            this.pos.x += this.speedX;
        }
    }
}
