import { Vector } from "../common/vector";
import { Actor } from "./actor";
import { State } from "../game/state";
import { KeyPressed } from "../game/track-keys";

export class Player implements Actor {
    public size: Vector;
    public speedX: number = 7;

    constructor(public pos: Vector) {
    }

    get type(): string { 
        return "player"; 
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
        ctx.fillStyle = "#FF0000";
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

Player.prototype.size = new Vector(100, 5);